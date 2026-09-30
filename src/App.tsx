import { useEffect, useRef, useState } from "react";
import { CostCard } from "./components/CostCard";
import { Cover } from "./components/Cover";
import { Gnb } from "./components/Gnb";
import { PhotoViewer } from "./components/PhotoViewer";
import { PlanCard } from "./components/PlanCard";
import { TotalBar } from "./components/TotalBar";
import { tripFor, type ModeId } from "./data/modes";
import { captureTripSheet } from "./lib/saveJpg";

function readMode(): ModeId {
  return location.hash === "#f1" ? "f1" : "main";
}

export function App() {
  const coverRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const totalRef = useRef<HTMLElement>(null);
  const [mode, setMode] = useState<ModeId>(readMode);
  const [photo, setPhoto] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveLabel, setSaveLabel] = useState("JPG로 저장");
  const trip = tripFor(mode);

  useEffect(() => {
    const sync = () => {
      setMode(readMode());
      setPhoto(null);
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  async function handleSave() {
    const cover = coverRef.current;
    const main = mainRef.current;
    const total = totalRef.current;
    if (saving || !cover || !main || !total) return;

    if (!window.showSaveFilePicker) {
      setSaveLabel("다시 시도");
      return;
    }

    setSaving(true);
    setSaveLabel("저장 중");

    let fileHandle: FileSystemFileHandle;
    try {
      fileHandle = await window.showSaveFilePicker({
        suggestedName: "주슬기의-싱가포르-여행.jpg",
        types: [{ description: "JPEG 이미지", accept: { "image/jpeg": [".jpg"] } }],
      });
    } catch {
      setSaving(false);
      setSaveLabel("JPG로 저장");
      return;
    }

    try {
      const blob = await captureTripSheet({ cover, main, total });
      const writable = await fileHandle.createWritable();
      await writable.write(blob);
      await writable.close();
      setSaving(false);
      setSaveLabel("JPG로 저장");
    } catch {
      setSaving(false);
      setSaveLabel("다시 시도");
    }
  }

  return (
    <>
      <Gnb mode={mode} />
      <Cover ref={coverRef} trip={trip} saving={saving} saveLabel={saveLabel} onSave={() => void handleSave()} />
      <main key={mode} ref={mainRef}>
        {trip.days.map((day) => (
          <PlanCard key={day.id} day={day} onOpen={setPhoto} />
        ))}
        <CostCard {...trip.cost} />
        <p className="credits">{trip.credits}</p>
      </main>
      <PhotoViewer src={photo} onClose={() => setPhoto(null)} />
      <TotalBar ref={totalRef} label={trip.totalLabel} amount={trip.totalAmount} />
    </>
  );
}
