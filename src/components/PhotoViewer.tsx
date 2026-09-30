import { useEffect, useRef, useState } from "react";

type PhotoViewerProps = {
  src: string | null;
  onClose: () => void;
};

export function PhotoViewer({ src, onClose }: PhotoViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const largeSrc = src?.replace("width=200", "width=1280") ?? null;
  const [shownSrc, setShownSrc] = useState(largeSrc);
  const [loading, setLoading] = useState(false);

  if (largeSrc !== shownSrc) {
    setShownSrc(largeSrc);
    setLoading(largeSrc !== null);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!largeSrc) {
      if (dialog.open) dialog.close();
      return;
    }

    if (!dialog.open) dialog.showModal();
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) setLoading(false);
  }, [largeSrc]);

  return (
    <dialog
      ref={dialogRef}
      className={loading ? "viewer is-loading" : "viewer"}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onClose={onClose}
    >
      <div className="viewer-stage">
        <div className="viewer-skeleton" aria-hidden="true" />
        <img
          ref={imageRef}
          alt=""
          src={largeSrc ?? undefined}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
        <button type="button" className="viewer-close" aria-label="닫기" onClick={onClose}>
          ×
        </button>
      </div>
    </dialog>
  );
}
