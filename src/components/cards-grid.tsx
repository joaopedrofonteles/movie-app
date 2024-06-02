import { useState } from "react";
import { series } from "../data/series";
import { CardItem } from "./card-item";
import { FiltersType } from "../types/filter-type";

interface CardsGridProps {
  filterType: FiltersType;
}

export const CardsGrid = ({ filterType = "all" }: CardsGridProps) => {
  const [data, setData] = useState(series);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols 3 lg:grid-cols-4 gap-5">
      {data
        .filter((serie) =>
          filterType === "all" ? serie : serie.badges?.includes(filterType)
        )
        .map((serie) => (
          <CardItem key={serie.id} serie={serie} />
        ))}
    </div>
  );
};
