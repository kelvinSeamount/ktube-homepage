import React from "react";
import CategoryPills from "./component/CategoryPills";
import { categories, videos } from "./data/home";
import PageHeader from "./layout/PageHeader";
import VideoGridItem from "./component/VideoGridItem";

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div className="">SideBar</div>
        <div className="overflow-x-hidden pb-4 px-8">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onselect={setSelectedCategory}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
