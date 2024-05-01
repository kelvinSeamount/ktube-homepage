import React from "react";
import CategoryPills from "./component/CategoryPills";
import { categories } from "./data/home";
import PageHeader from "./layout/PageHeader";

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        <div className="">SideBar</div>
        <div className="overflow-x-hidden py-4 px-8">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onselect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
