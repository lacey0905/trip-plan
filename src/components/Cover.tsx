import type { Ref } from "react";
import type { Trip } from "../data/trip";

type CoverProps = {
  ref?: Ref<HTMLElement>;
  trip: Trip;
  saving: boolean;
  saveLabel: string;
  onSave: () => void;
};

export function Cover({ ref, trip, saving, saveLabel, onSave }: CoverProps) {
  const heroSrc = `${import.meta.env.BASE_URL}assets/joo.png`;

  return (
    <header ref={ref} className="cover">
      <p className="doc-no">{trip.docNo}</p>
      <figure className="hero">
        <img src={heroSrc} alt={trip.heroAlt} />
        <figcaption>
          <p>{trip.kicker}</p>
          <h1>{trip.title}</h1>
          {trip.subtitle ? (
            <p className="sub">
              <span>+</span>
              {trip.subtitle}
            </p>
          ) : null}
        </figcaption>
      </figure>
      <p className="cover-meta">
        {trip.dates}
        <br />
        {trip.stays}
      </p>
      <p className="route">{trip.route}</p>
      <button
        type="button"
        className={saving ? "save is-saving" : "save"}
        disabled={saving}
        aria-busy={saving || undefined}
        onClick={onSave}
      >
        {saveLabel}
      </button>
    </header>
  );
}
