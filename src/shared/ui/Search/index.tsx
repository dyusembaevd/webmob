import IconLocation from "@/shared/assets/icons/icon_location.svg";
import IconSearch from "@/shared/icons/search.svg";

interface SearchProps {
  placeholder: string;
}

export const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className="bg-base-200 flex items-center gap-1.5 rounded-xl px-3 py-3">
      <IconLocation className="h-6 w-6" />
      <input
        type="text"
        className="bg-base-200 placeholder-base-700 w-full outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
