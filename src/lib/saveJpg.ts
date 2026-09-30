import html2canvas from "html2canvas";

function loadCloneImage(img: HTMLImageElement, src: string) {
  return new Promise<void>((resolve) => {
    const finish = () => resolve();
    const timer = window.setTimeout(finish, 8000);
    img.onload = () => {
      window.clearTimeout(timer);
      finish();
    };
    img.onerror = () => {
      window.clearTimeout(timer);
      finish();
    };
    img.crossOrigin = "anonymous";
    img.src = src;
  });
}

export async function captureTripSheet(parts: {
  cover: HTMLElement;
  main: HTMLElement;
  total: HTMLElement;
}) {
  const sheet = document.createElement("div");
  sheet.className = "capture-sheet";
  const header = parts.cover.cloneNode(true) as HTMLElement;
  header.querySelector(".save")?.remove();
  sheet.append(header, parts.main.cloneNode(true), parts.total.cloneNode(true));
  document.body.append(sheet);

  try {
    const sources = [
      ...parts.cover.querySelectorAll("img"),
      ...parts.main.querySelectorAll("img"),
    ].map((img) => img.getAttribute("src") ?? "");

    await Promise.all(
      [...sheet.querySelectorAll("img")].map((img, index) => loadCloneImage(img, sources[index] ?? "")),
    );
    await document.fonts.ready;

    const canvas = await html2canvas(sheet, {
      scale: 2,
      width: 430,
      height: sheet.scrollHeight,
      windowWidth: 430,
      windowHeight: sheet.scrollHeight,
      x: 0,
      y: 0,
      useCORS: true,
      backgroundColor: "#f3f0e7",
      scrollX: 0,
      scrollY: 0,
    });

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) throw new Error("empty");
    return blob;
  } finally {
    sheet.remove();
  }
}
