import type { CostRow } from "../data/trip";

type CostCardProps = {
  caption: string;
  title: string;
  note: string;
  rows: CostRow[];
};

export function CostCard({ caption, title, note, rows }: CostCardProps) {
  return (
    <article className="card">
      <table className="cost">
        <caption>
          <span>{caption}</span>
          <strong>{title}</strong>
        </caption>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td>
                {row.label}
                {row.detail ? <small>{row.detail}</small> : null}
              </td>
              <td>{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="note">{note}</p>
    </article>
  );
}
