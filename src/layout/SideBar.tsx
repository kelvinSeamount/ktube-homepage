import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import SmallSideBarItem from "../component/SmallSideBarItem";
import LargeBarSection from "../component/LargeBarSection";
import LargeBarItem from "../component/LargeBarItem";

const SideBar = () => {
  return (
    <>
      <aside className="flex flex-col lg:hidden sticky top-0 ml-1 scrollbar-hidden overflow-y-auto">
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSideBarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSideBarItem Icon={Library} title="Libary" url="/libary" />
      </aside>

      <aside className="lg:sticky absolute top-0 pb-4 flex flex-col px-2 w-56 scrollbar-hidden gap-2">
        <LargeBarSection visibleItemCount={1}>
          <LargeBarItem isActive Icon={Home} title="Home" url="/" />
          <LargeBarItem isActive Icon={Home} title="Home" url="/" />
        </LargeBarSection>
      </aside>
    </>
  );
};

export default SideBar;
