import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  autherLabel: string;
  createdAtLabel: string;
  onClick: () => void;
  disable: boolean;
}

export const Footer = ({
  isFavorite,
  title,
  autherLabel,
  createdAtLabel,
  onClick,
  disable,
}: FooterProps) => {
  return (
    <div className="relative bg-white p-">
      <p className="text-[13px] trancuate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground trancate">
        {autherLabel},{createdAtLabel}
      </p>
      <button
        disabled={disable}
        onClick={onClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600",
          disable && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn("h-4 w-4", isFavorite && "fill-blue-600 text-blue-600")}
        ></Star>
      </button>
    </div>
  );
};
