import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="">

      {/* 1st header div: Contains the top bar with logo and navigation links */}
      <div className="px-[50px] bg-[#F5F5F5] flex justify-between h-[36px] items-center">

        {/* Left div: Displays the main logo */}
        <div>
          <Link href={"/"}>
            <Image src="/logo1.png" alt="Logo1" width={24} height={24} />
          </Link>
        </div>

        {/* Right div: Contains navigation links like "Find a Store", "Help", etc. */}
        <div className="">
          <ul className="flex text-sm">
            {/* Navigation links with borders for separation */}
            <Link href={"/"} className="px-4 border-r-2 border-slate-600">Find a Store</Link>
            <Link href={"/"} className="px-4 border-r-2 border-slate-600">Help</Link>
            <Link href={"/"} className="px-4 border-r-2 border-slate-600">Join Us</Link>
            <Link href={"/"} className="px-4 border-slate-600">Sign In</Link>
          </ul>
        </div>
      </div>

      {/* 2nd header div: Contains the second section with branding and category links */}
      <div className="px-[50px] h-[60px] flex items-center justify-between">

        {/* Left div: Displays the secondary logo */}
        <div>
          <Link href={"/"}>
            <Image src={"/logo2.png"} alt="Logo2" width={59} height={21} />
          </Link>
        </div>

        {/* Center div: Contains the main category links */}
        <div>
          <ul className="flex gap-5">
            {/* Links for main categories like "New & Featured", "Men", etc. */}
            <Link href={"/"}>New & Featured</Link>
            <Link href={"/"}>Men</Link>
            <Link href={"/"}>Women</Link>
            <Link href={"/"}>Kids</Link>
            <Link href={"/"}>Sales</Link>
            <Link href={"/"}>SNKRS</Link>
          </ul>
        </div>

        {/* 3rd div: Contains search input and icons (like wishlist and shopping bag) */}
        <div className="flex items-center gap-3">

          {/* Search box with icon and input field */}
          <div className="flex items-center relative">
            <Image src={"/search.png"} height={24} width={24} alt="Search" className="absolute left-[10px] cursor-pointer" />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#efeeee] p-2 pl-10 rounded-full outline-none"
            />
          </div>

          {/* Right div: Contains icons for wishlist and shopping bag */}
          <div className="flex gap-3">
            <Link href={"/"}>
              <Image src={"/heart.png"} height={24} width={24} alt="Heart" />
            </Link>
            <Link href={"/"}>
              <Image src={"/bag.png"} height={24} width={24} alt="Bag" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
