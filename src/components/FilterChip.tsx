import { cn } from "@/lib/utils";

interface FilterChipProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const FilterChip = ({ children, active = false, onClick, className }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "filter-chip",
        active && "filter-chip-active",
        className
      )}
    >
      {children}
    </button>
  );
};