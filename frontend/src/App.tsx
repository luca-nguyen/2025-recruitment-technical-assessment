import "./App.css";
import SearchBar from "./SearchBar";
import buildingsData from "./data.json";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_auto_1fr]">
      <Header />
      <SearchContainer />
      <BuildingsLayout />
    </div>
  );
}

function BuildingsLayout() {
  return (
    <div className="grid grid-cols-1 bg-transparent px-5 py-2 w-full gap-3 xs:grid-cols-2 lg:grid-cols-5 auto-rows-fr overflow-y-auto">
      {buildingsData.map((building) => (
        <Building
          key={building.name}
          name={building.name}
          roomsAvailable={building.rooms_available}
          image={building.building_file || building.building_picture || ""}
          className="building-container"
        />
      ))}
    </div>
  );
}

interface BuildingProps {
  name: string;
  roomsAvailable: number;
  image: string;
}

function Building({
  name,
  roomsAvailable,
  image,
  className,
}: BuildingProps & { className?: string }) {
  const [xsViewport, setXsViewport] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setXsViewport(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageUrl = image ? `/assets/${image.replace("./", "")}` : "";

  return (
    <div
      className={`flex items-center relative group w-full rounded-lg cursor-pointer ${className} h-full`}
    >
      {/* Background Image */}
      <div
        style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : "none" }}
        className="absolute inset-0 bg-cover bg-top rounded-lg"
      />
      <div className="absolute inset-0 bg-black/35 xs:bg-black/0 group-hover:bg-theme/30 transition-colors rounded-lg" />
      <div className="relative flex items-center flex-row xs:flex-col h-full w-full p-3 justify-between">
        {/* Room Availability */}
        <div className="order-last s:order-first flex items-center justify-center w-20 xs:w-1/2 h-8 bg-white rounded-xl px-1 gap-2 ml-auto">
          <svg
            className="fill-available"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z"></path>
          </svg>

          <span className="text-[12px] font-semibold">
            {xsViewport
              ? `${roomsAvailable}/${roomsAvailable}`
              : `${roomsAvailable} rooms available`}
          </span>
        </div>

        {/* Building Name */}
        <div className="flex items-center w-full h-8 bg-transparent xs:bg-theme rounded-lg px-4">
          <span className="text-xs font-semibold text-white truncate">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

function SearchContainer() {
  return (
    <div className="grid grid-cols-[140px_2fr_140px] h-15 bg-transparent px-5 pt-1 items-center gap-12">
      <div className="justify-self-start">
        <button className="flex items-center justify-center h-[50px] w-[150px] border-2 border-theme rounded-lg p-1 cursor-pointer">
          <svg
            className="fill-theme h-[30px] w-[30px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z"></path>
          </svg>
          <span className="text-theme font-bold text-lg">Filters</span>
        </button>
      </div>
      <div className="flex items-center justify-self-center w-full max-w-2xl">
        <SearchBar />
      </div>
      <div className="justify-self-end">
        <button className="flex items-center justify-center h-[50px] w-[150px] border-2 border-theme rounded-lg p-1 gap-2 cursor-pointer">
          <svg
            className="fill-theme h-[30px] w-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M20 4V16H23L19 21L15 16H18V4H20ZM12 18V20H3V18H12ZM14 11V13H3V11H14ZM14 4V6H3V4H14Z"></path>
          </svg>
          <span className="text-theme font-bold text-lg">Sort</span>
        </button>
      </div>
    </div>
  );
}

export default App;
