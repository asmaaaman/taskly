function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-end border-b border-[#e9e9ef] bg-white px-7">
      <div className="flex items-center gap-2.5">
        <div className="flex flex-col items-end leading-tight">
          <span className="text-[9px] font-bold text-[#172033]">
            Mahmoud Taha
          </span>

          <span className="mt-0.5 text-[8px] text-[#6f7480]">freelancer</span>
        </div>

        <div className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-[#1467b8] text-[10px] font-bold text-white">
          MT
        </div>
      </div>
    </header>
  );
}

export default Header;
