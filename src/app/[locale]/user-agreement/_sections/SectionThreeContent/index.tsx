import { Typography } from "@/shared/ui/Typography";

export const SectionThreeContent = () => {
  return (
    <div className="flex flex-col items-start justify-stretch">
      <Typography as="span">
        3.1. Пользователь для&nbsp;акцепта оферты с&nbsp;последующим оформлением
        Заявки обязан осуществить следующие действия:
      </Typography>

      <Typography>
        <Typography as="span">3.1.1. </Typography>
        Зарегистрироваться (пройти регистрацию) в&nbsp;приложении.
        Для&nbsp;регистрации Пользователь обязан предоставить следующие данные:
      </Typography>

      <ul className=" pl-5">
        <li>
          <Typography as="span">имя, фамилия;</Typography>
        </li>
        <li>
          <Typography as="span">пол;</Typography>
        </li>
        <li>
          <Typography as="span">контактный номер телефона;</Typography>
        </li>
        <li>
          <Typography as="span">контактный email;</Typography>
        </li>
        <li>
          <Typography as="span">город проживания;</Typography>
        </li>
        <li>
          <Typography as="span">[пожалуйста, укажите];</Typography>
        </li>
      </ul>

      <Typography>
        <Typography as="span">3.1.2. </Typography>
        Пользователь направляет Компании всю&nbsp;информацию о&nbsp;видах,
        содержании, стоимости услуг (товаров), а&nbsp;также иные детали, которые
        будут запрошены в&nbsp;рамках регистрации Пользователем
        в&nbsp;приложении.
      </Typography>

      <Typography as="span">
        3.2. После&nbsp;регистрации в&nbsp;приложении Пользователь посредством
        личного кабинета может оформлять Заявку.
      </Typography>

      <Typography as="span">
        3.3. Пользователь гарантирует, что&nbsp;указанная информация полностью
        соответствует действительности и&nbsp;несёт ответственность
        за&nbsp;любые последствия в&nbsp;связи с&nbsp;недостоверностью и/или
        недействительностью предоставленной информации. При&nbsp;этом Компания
        не&nbsp;несёт ответственность за&nbsp;действительность предоставленных
        данных пользователями.
      </Typography>

      <Typography as="span">
        3.4. Пользователь самостоятельно и&nbsp;всецело несёт
        все&nbsp;риски&nbsp;и&nbsp;ответственность за&nbsp;соответствие
        законодательству, содержание, полноту, корректность и&nbsp;достоверность
        размещённой им&nbsp;информации в&nbsp;приложении.
      </Typography>

      <Typography>
        <Typography as="span">3.5. </Typography>
        Пользователи согласны с&nbsp;тем, что&nbsp;Компания имеет право
        аннулировать доступ Пользователей при&nbsp;наступлении
        одного&nbsp;из&nbsp;нижеуказанных обстоятельств:
      </Typography>

      <ul className="list-disc pl-5">
        <li>
          <Typography as="span">
            не&nbsp;выполнены все&nbsp;необходимые требования, описанные
            в&nbsp;Заявке;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            Пользователь получил три&nbsp;и/или более отрицательных
            отзывов&nbsp;от&nbsp;иных пользователей;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            в&nbsp;переписке использовал ненормативную лексику, оскорбления,
            обсуждал вопросы, не&nbsp;связанные с&nbsp;сутью Заявки;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            Пользователь откликнулся на&nbsp;Заявку, но&nbsp;отказался
            её&nbsp;выполнять&nbsp;без уважительной причины;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            Пользователь откликнулся, но&nbsp;отправил выполнять Заявку вместо
            себя другое лицо, не&nbsp;прошедшее процедуру регистрации;
          </Typography>
        </li>
        <li>
          <Typography as="span">
            в&nbsp;иных случаях, когда Компания усмотрела в&nbsp;действиях
            Пользователя признаки нарушения правил использования Приложения.
          </Typography>
        </li>
      </ul>
    </div>
  );
};
