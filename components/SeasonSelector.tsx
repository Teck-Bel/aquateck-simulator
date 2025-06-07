// components/SeasonSelector.tsx
import React from "react";

const seasons = ["Spring", "Summer", "Autumn", "Winter"] as const;
type Season = typeof seasons[number];

type SeasonSelectorProps = {
  selectedSeason: Season;
  onChange: (season: Season) => void;
};

export default function SeasonSelector({ selectedSeason, onChange }: SeasonSelectorProps) {
  return (
    <label>
      Season:
      <select
        value={selectedSeason}
        onChange={(e) => onChange(e.target.value as Season)}
        style={{ marginLeft: "0.5rem" }}
      >
        {seasons.map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select>
    </label>
  );
}
