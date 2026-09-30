import type { DayPlan } from "../data/trip";
import { Thumb } from "./Thumb";

type PlanCardProps = {
  day: DayPlan;
  onOpen: (src: string) => void;
};

export function PlanCard({ day, onOpen }: PlanCardProps) {
  return (
    <article className="card">
      <table className="plan">
        <caption>
          <span>{day.date}</span>
          <strong>{day.title}</strong>
          <em>{day.summary}</em>
        </caption>
        <tbody>
          {day.stops.map((stop) => (
            <tr key={`${day.id}-${stop.time}-${stop.title}`} className={stop.emphasis ? "key" : undefined}>
              <td>{stop.time}</td>
              <td>
                {stop.title}
                {stop.detail ? <small>{stop.detail}</small> : null}
                {stop.mapUrl ? (
                  <a className="map-link" href={stop.mapUrl} target="_blank" rel="noreferrer">
                    지도 보기
                  </a>
                ) : null}
              </td>
              {stop.image ? <Thumb src={stop.image} onOpen={onOpen} /> : null}
            </tr>
          ))}
        </tbody>
      </table>
      {day.note ? <p className="note">{day.note}</p> : null}
      {day.picks ? (
        <p className="picks">
          {day.picks.map((line, index) => (
            <span key={line.label ?? line.text}>
              {index > 0 ? <br /> : null}
              {line.label ? (
                <>
                  <b>{line.label}</b>{" "}
                </>
              ) : null}
              {line.text}
            </span>
          ))}
        </p>
      ) : null}
    </article>
  );
}
