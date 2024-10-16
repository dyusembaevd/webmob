import { Typography } from "@/shared/ui/Typography";

export const SectionTwoContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">
        2.1. По&nbsp;настоящей Оферте Компания оказывает Пользователям
        информационные услуги, которые помимо прочего, включают в&nbsp;себя:
      </Typography>

      <ul className="list-disc pl-5">
        <li>
          <Typography as="span">
            предоставление доступа Пользователем к&nbsp;приложению;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            предоставление возможности публикации в&nbsp;приложении различных
            реклам и&nbsp;иных обращений;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            услуги обмена личными сообщениями и&nbsp;координирования
            Пользователей;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            иные услуги, связанные с&nbsp;оформлением заявки, аккаунта
            и&nbsp;иных функций приложения из&nbsp;числа доступных Пользователю.
          </Typography>
        </li>
      </ul>

      <Typography as="span">
        2.2. Пользователи согласны с&nbsp;тем, что&nbsp;услуги, оказываемые
        Пользователями в&nbsp;отношении друг друга, не&nbsp;будут
        и&nbsp;не&nbsp;могут рассматриваться в&nbsp;качестве услуг, которые
        оказываются либо&nbsp;будут оказаны Компанией.
      </Typography>

      <Typography as="span">
        2.3. Компания не&nbsp;будет выступать и&nbsp;не&nbsp;выступает
        в&nbsp;качестве лица, ответственного и&nbsp;/или заинтересованного
        в&nbsp;отношениях между&nbsp;Пользователями. Отношения
        между&nbsp;Пользователями регулируются законодательством Казахстана.
      </Typography>
    </div>
  );
};
