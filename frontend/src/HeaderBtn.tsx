import React from "react";

interface HeaderBtnProps {
  children: React.ReactElement<SVGElement>;
}

function HeaderBtn({ children }: HeaderBtnProps) {
  return (
    <button className="transition-all h-10.5 w-10.5 bg-transparent hover:bg-theme/5 border-1 border-theme/50 hover:border-theme rounded-sm flex items-center justify-center cursor-pointer focus:bg-theme group focus:hover:bg-theme-dark">
      {children}
    </button>
  );
}

export default HeaderBtn;
