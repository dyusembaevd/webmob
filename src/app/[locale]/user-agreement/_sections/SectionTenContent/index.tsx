import { Typography } from "@/shared/ui/Typography";

export const SectionTenContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">Компания: ТОО [пожалуйста, укажите]</Typography>

      <Typography as="span">Адрес: [пожалуйста, укажите]</Typography>

      <Typography as="span">БИН (ИИН): [пожалуйста, укажите]</Typography>

      <Typography as="span">Банк: АО [пожалуйста, укажите]</Typography>

      <Typography as="span">КБе: [пожалуйста, укажите]</Typography>

      <Typography as="span">БИК: [пожалуйста, укажите]</Typography>

      <Typography as="span">Номер счёта: [пожалуйста, укажите]</Typography>
    </div>
  );
};
