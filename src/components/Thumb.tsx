import { useEffect, useRef, useState } from "react";

type ThumbProps = {
  src: string;
  onOpen: (src: string) => void;
};

export function Thumb({ src, onOpen }: ThumbProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (imageRef.current?.complete) setLoading(false);
  }, [src]);

  return (
    <td className={loading ? "thumb is-loading" : "thumb"}>
      <img
        ref={imageRef}
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        onClick={() => onOpen(src)}
      />
    </td>
  );
}
