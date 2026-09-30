import { f1Trip } from "./f1";
import { trip, type Trip } from "./trip";

export const modes = [
  { id: "main", label: "메인", href: "#main", trip },
  { id: "f1", label: "F1", href: "#f1", trip: f1Trip },
] as const;

export type ModeId = (typeof modes)[number]["id"];

export function tripFor(mode: ModeId): Trip {
  const match = modes.find((item) => item.id === mode);
  return match ? match.trip : trip;
}
