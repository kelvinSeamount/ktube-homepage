import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Ktube from "../assets/Ktube.png";
import Button from "../component/Button";
import React from "react";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = React.useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>

        <a href="/" className="flex gap-1">
          <img src={Ktube} className="h-6 rounded-md" alt="logo" />
          <h5>KTube</h5>
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch ? (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            size="icon"
            type="button"
            className="flex-shrink-0"
            variant="ghost"
          >
            <ArrowLeft />
          </Button>
        ) : (
          ""
        )}

        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="search"
            className="rounded-l-full border-secondary-border border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="flex-shrink-0 pyy-2 px-4 rounded-r-full border border-secondary-border border-l-0">
            <Search />
          </Button>
        </div>
        <Button size="icon" type="button" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          type="button"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" type="button" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost" type="button">
          <Upload />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
