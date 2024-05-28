import { Serie } from "../types/serie";

interface CardItemProps {
  serie: Serie;
}

export const CardItem = ({ serie }: CardItemProps) => {
  return (
    <div className="w-full overflow-hidden roudend-md bg-white shadow">
      <div className="relative">
        <img
          src={serie.cover}
          alt={serie.title}
          className="w-full h-[280px] object-cover object-top md:object-center"
        />

        {serie.badges && serie.badges?.length > 0 && (
          <div className="absolute top-2 right-2 flex gap-2">
            {serie.badges.map((badge) => (
              <div 
              key={badge}
              className="uppercase font-semibold text-white py-1 px-2 text-xs bg-white/15 rounded-md">{badge}</div>
            ))}
          </div>
        )}
      </div>
      <div className="p-5 space-y-2">
        <p className="text-[#6C757D] text-sm">{serie.date}</p>
        <h2 className="text-lg font-semibold">{serie.title}</h2>
        <p className="text-[#6C757D]text-light">{serie.description}</p>
      </div>
    </div>
  );
};
