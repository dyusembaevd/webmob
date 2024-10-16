import { Typography } from "@/shared/ui/Typography";

export const SectionOneContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">
        1.1. В&nbsp;Политике используются следующие термины и&nbsp;определения:
      </Typography>

      <Typography>
        <Typography as="span">1.1.1. Приложение&nbsp;—</Typography>
        мобильное приложение, расположенное в&nbsp;сети Интернет.
        Все&nbsp;исключительные права на&nbsp;приложение
        и&nbsp;его&nbsp;отдельные элементы (включая программное обеспечение,
        дизайн) принадлежат Оператору в&nbsp;полном объёме. Передача
        исключительных прав Пользователю не&nbsp;является предметом настоящей
        Политики.
      </Typography>

      <Typography>
        <Typography as="span">1.1.2. Пользователь&nbsp;—</Typography>
        лицо, использующее приложение.
      </Typography>

      <Typography>
        <Typography as="span">1.1.3. Законодательство&nbsp;—</Typography>
        действующее законодательство Республики Казахстан.
      </Typography>

      <Typography>
        <Typography as="span">1.1.4. Персональные данные&nbsp;—</Typography>
        персональные данные Пользователя, которые Пользователь предоставляет
        самостоятельно при&nbsp;регистрации или&nbsp;в&nbsp;процессе
        использования функционала приложения.
      </Typography>

      <Typography>
        <Typography as="span">1.1.5. Данные&nbsp;—</Typography>
        иные данные о&nbsp;Пользователе (не&nbsp;входящие в&nbsp;понятие
        Персональных данных).
      </Typography>

      <Typography>
        <Typography as="span">1.1.6. Регистрация&nbsp;—</Typography>
        создание Пользователем личного кабинета и&nbsp;заполнение необходимой
        информации.
      </Typography>
    </div>
  );
};
