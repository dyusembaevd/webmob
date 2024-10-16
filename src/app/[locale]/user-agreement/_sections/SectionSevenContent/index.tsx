import { Typography } from "@/shared/ui/Typography";

export const SectionSevenContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">
        7.1. Настоящий Договор вступает в&nbsp;силу с&nbsp;момента акцепта
        Пользователем и&nbsp;действует до&nbsp;неопределённого срока.
      </Typography>

      <Typography as="span">
        7.2. Компания имеет право в&nbsp;любой момент изменять условия
        настоящего Договора в&nbsp;одностороннем порядке
        без&nbsp;предварительного согласования с&nbsp;пользователями,
        обеспечивая при&nbsp;этом публикацию изменённых условий
        в&nbsp;Приложении не&nbsp;менее чем за&nbsp;один день
        до&nbsp;их&nbsp;ввода в&nbsp;действие.
      </Typography>
    </div>
  );
};
