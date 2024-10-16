import { Typography } from "@/shared/ui/Typography";

export const SectionFourContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">4.1. Компания обязуется:</Typography>

      <ul className="list-disc pl-5">
        <li>
          <Typography as="span">
            4.1.1. Предоставить необходимую информацию и&nbsp;возможность
            оформления заявок.
          </Typography>
        </li>
        <li>
          <Typography as="span">
            4.1.2. Осуществлять консультационную поддержку в&nbsp;рамках
            использования приложения.
          </Typography>
        </li>
      </ul>

      <Typography as="span">4.2. Компания имеет право:</Typography>

      <ul className="list-disc pl-5">
        <li>
          <Typography as="span">
            4.2.1. Требовать от&nbsp;Пользователей придерживаться соблюдения
            всех процедур в&nbsp;строгом соответствии с&nbsp;условиями Оферты.
          </Typography>
        </li>
        <li>
          <Typography as="span">
            4.2.2. Отключать и&nbsp;включать приложение, производить
            профилактические работы на&nbsp;сервере и&nbsp;другом оборудовании,
            задействованном в&nbsp;работе приложения.
          </Typography>
        </li>
      </ul>

      <Typography as="span">4.3. Пользователь обязуется:</Typography>

      <ul className="list-disc pl-5">
        <li>
          <Typography as="span">
            4.3.1. При&nbsp;регистрации заполнить необходимые обязательные
            поля&nbsp;и&nbsp;указать в&nbsp;них&nbsp;достоверную информацию,
            согласно разделу 3&nbsp;Договора.
          </Typography>
        </li>
        <li>
          <Typography as="span">
            4.3.2. Не&nbsp;допускать третьих лиц&nbsp;к&nbsp;использованию
            приложения.
          </Typography>
        </li>
        <li>
          <Typography as="span">
            4.3.3. Незамедлительно уведомить Компанию об&nbsp;изменении своих
            персональных и&nbsp;контактных данных.
          </Typography>
        </li>
        <li>
          <Typography as="span">
            4.3.4. Соблюдать правила и&nbsp;механику использования приложения,
            предусмотренные в&nbsp;личном кабинете.
          </Typography>
        </li>
      </ul>

      <Typography as="span">4.4. Пользователь имеет право:</Typography>

      <ul className="list-disc pl-5">
        <li>
          <Typography as="span">
            4.4.1. Оформлять заявки с&nbsp;использованием приложения.
          </Typography>
        </li>
      </ul>
    </div>
  );
};
