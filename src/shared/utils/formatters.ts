type Props = {
  first_name: string;
  patronymic?: string;
  last_name?: string;
};

export const formatFullName = ({
  first_name,
  last_name,
  patronymic,
}: Props) => {
  const fullName = [
    first_name,
    patronymic,
    last_name && last_name.trim() !== "" ? last_name : null,
  ]
    .filter(Boolean)
    .join(" ");

  return fullName ? fullName : null;
};

export function getTextColorBasedOnBackground(backgroundColor: string): string {
  const hex = backgroundColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
