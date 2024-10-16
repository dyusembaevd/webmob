import { Typography } from "@/shared/ui/Typography";

export const SectionFourContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">
        4.1. Оператор осуществляет надлежащую защиту Персональных и&nbsp;иных
        данных в&nbsp;соответствии с&nbsp;Законодательством и&nbsp;принимает
        необходимые и&nbsp;достаточные организационные и&nbsp;технические меры
        для&nbsp;защиты Персональных данных.
      </Typography>

      <Typography>
        <Typography as="span">4.2. </Typography>
        Применяемые меры защиты в&nbsp;том&nbsp;числе позволяют защитить
        Персональные данные от&nbsp;неправомерного или&nbsp;случайного доступа,
        уничтожения, изменения, блокирования, копирования, распространения,
        а&nbsp;также от&nbsp;иных неправомерных действий с&nbsp;ними третьих
        лиц.
      </Typography>
    </div>
  );
};
