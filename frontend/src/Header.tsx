import { useState } from "react";
import HeaderBtn from "./HeaderBtn";

function Header() {
  const [closed, setClosed] = useState(false);

  function handleClick() {
    setClosed(!closed);
  }

  return (
    <header className="flex h-15 border-b-1 border-gray-300 items-center pl-[16px] pr-[16px] pt=[4px] pb=[4px] justify-between">
      <span
        onClick={handleClick}
        className="transition-all cursor-pointer flex gap-1 items-center hover:opacity-70"
      >
        {closed ? (
          <img className="h-11" src="/assets/freeroomsDoorClosed.png" />
        ) : (
          <img className="h-11" src="/assets/freeRoomsLogo.png" />
        )}
        <h1
          className="font-josefin transition-all text-3xl font-semibold text-theme sm:block hidden"
          //   style={{ fontFamily: "'Josefin Sans', sans-serif" }}
        >
          Freerooms
        </h1>
      </span>
      <span className="flex items-center gap-2">
        <HeaderBtn>
          <svg
            className="fill-theme focus:fill-white h-[30px] w-[30px] group-focus:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>
        </HeaderBtn>
        <HeaderBtn>
          <svg
            className="fill-theme h-[30px] w-[30px] group-focus:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M22 12.999V20C22 20.5523 21.5523 21 21 21H13V12.999H22ZM11 12.999V21H3C2.44772 21 2 20.5523 2 20V12.999H11ZM11 3V10.999H2V4C2 3.44772 2.44772 3 3 3H11ZM21 3C21.5523 3 22 3.44772 22 4V10.999H13V3H21Z"></path>
          </svg>
        </HeaderBtn>
        <HeaderBtn>
          <svg
            className="fill-theme h-[30px] w-[30px] group-focus:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5ZM15 19.7639V7.17594L14.9352 7.20369L9 4.23607V16.8241L9.06476 16.7963L15 19.7639Z"></path>
          </svg>
        </HeaderBtn>
        <HeaderBtn>
          <svg
            className="fill-theme h-[30px] w-[30px] group-focus:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
          </svg>
        </HeaderBtn>
      </span>
    </header>
  );
}

export default Header;
