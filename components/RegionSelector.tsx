// components/RegionSelector.tsx
import React from "react";

const regions = ["North Sea", "Mediterranean Sea", "Tropical Sea"] as const;
type Region = typeof regions[number];

type RegionSelectorProps = {
  selectedRegion: Region;
  onChange: (region: Region) => void;
};

export default function RegionSelector({ selectedRegion, onChange }: RegionSelectorProps) {
  return (
    <label>
      Region:
      <select
        value={selectedRegion}
        onChange={(e) => onChange(e.target.value as Region)}
        style={{ marginLeft: "0.5rem" }}
      >
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </label>
  );
}
