import { modes, type ModeId } from "../data/modes";

type GnbProps = {
  mode: ModeId;
};

export function Gnb({ mode }: GnbProps) {
  return (
    <nav className="gnb" aria-label="일정">
      {modes.map((item) => (
        <a key={item.id} href={item.href} aria-current={mode === item.id ? "page" : undefined}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
