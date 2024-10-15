import IconBriefcase from "@/shared/assets/icons/icon_briefcase.svg";
import IconHome from "@/shared/assets/icons/icon_home.svg";
import IconMenu from "@/shared/assets/icons/icon_menu.svg";
import IconMessages from "@/shared/assets/icons/icon_messages.svg";

export const BottomNavbar = () => {
  return (
    <nav
      className="bg-opacity-96 h-[68px] w-[335px] rounded-[100px] bg-[#171719] opacity-95 backdrop-blur-[0.3px]"
      style={{
        boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <ul className="flex h-full items-center justify-between px-6">
        <li>
          <a href="/" className="flex flex-col items-center text-white">
            <IconHome size={24} />
            <span className="mt-1 text-xs">Главная</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-col items-center text-white hover:cursor-default"
          >
            <IconBriefcase size={24} />
            <span className="mt-1 text-xs">Проекты</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-col items-center text-white hover:cursor-default"
          >
            <IconMessages size={24} />
            <span className="mt-1 text-xs">Чат</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex flex-col items-center text-white hover:cursor-default"
          >
            <IconMenu size={24} />
            <span className="mt-1 text-xs">Меню</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
