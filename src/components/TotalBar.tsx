import type { Ref } from "react";

type TotalBarProps = {
  ref?: Ref<HTMLElement>;
  label: string;
  amount: string;
};

export function TotalBar({ ref, label, amount }: TotalBarProps) {
  return (
    <aside ref={ref} className="total">
      <span>{label}</span>
      <strong>{amount}</strong>
    </aside>
  );
}
