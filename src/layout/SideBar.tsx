import {
  Clapperboard,
  Clock,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Library,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  PlaySquare,
  Podcast,
  Radio,
  Repeat,
  Shirt,
  ShoppingBag,
  Trophy,
} from "lucide-react";
import SmallSideBarItem from "../component/SmallSideBarItem";
import LargeBarSection from "../component/LargeBarSection";
import LargeBarItem from "../component/LargeBarItem";
import { playlists, subscriptions } from "../data/sidebar";

const SideBar = () => {
  return (
    <>
      <aside className="flex flex-col lg:hidden sticky top-0 ml-1 scrollbar-hidden overflow-y-auto pb-4">
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSideBarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSideBarItem Icon={Library} title="Libary" url="/libary" />
      </aside>

      <aside className="lg:sticky absolute top-0 pb-4 flex-col px-2 w-56 scrollbar-hidden gap-2 lg:flex hidden overflow-y-auto">
        <LargeBarSection visibleItemCount={0}>
          <LargeBarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <LargeBarItem
            IconOrImgUrl={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
            isActive
          />
        </LargeBarSection>
        <hr />
        <LargeBarSection visibleItemCount={5}>
          <LargeBarItem
            IconOrImgUrl={Library}
            title="Library"
            url="/library"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={History}
            title="History"
            url="/history"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            url="/your-videos"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
            isActive
          />
          {playlists.map((playlist) => (
            <LargeBarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
              isActive
            />
          ))}
        </LargeBarSection>

        <hr />
        <LargeBarSection title="Subscription" visibleItemCount={0}>
          {subscriptions.map((subscription) => (
            <LargeBarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
              isActive
            />
          ))}
        </LargeBarSection>
        <hr />
        <LargeBarSection title="Explore" visibleItemCount={0}>
          <LargeBarItem
            IconOrImgUrl={Flame}
            title="Trending"
            url="/trending"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={ShoppingBag}
            title="Shopping"
            url="/shopping"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Music2}
            title="Music"
            url="/music"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Film}
            title="Movies & TV"
            url="/movies-tv"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Radio}
            title="Live"
            url="/live"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Gamepad2}
            title="Gaming"
            url="/gaming"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Newspaper}
            title="News"
            url="/news"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Trophy}
            title="Sports"
            url="/sports"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Lightbulb}
            title="Leraning"
            url="/learning"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
            isActive
          />
          <LargeBarItem
            IconOrImgUrl={Podcast}
            title="Podcasts"
            url="/podcasts"
            isActive
          />
        </LargeBarSection>
      </aside>
    </>
  );
};

export default SideBar;
