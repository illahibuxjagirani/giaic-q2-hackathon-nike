import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40">

      {/* 1st Header Div: Top Bar */}
      <div className="px-4 md:px-[50px] bg-[#F5F5F5] flex justify-between h-[36px] items-center">

        {/* Logo Section */}
        <div>
          <Link href={"/"}>
            <Image src="/logo1.png" alt="Logo1" width={24} height={24} />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex text-sm">
            <Link href={"/"} className="px-4 border-r-2 border-slate-600">Find a Store</Link>
            <Link href={"/"} className="px-4 border-r-2 border-slate-600">Help</Link>
            <Link href={"/"} className="px-4 border-r-2 border-slate-600">Join Us</Link>
            <Link href={"/"} className="px-4 border-slate-600">Sign In</Link>
          </ul>
        </div>
      </div>

      {/* 2nd Header Div: Main Navigation */}
      <div className="px-4 md:px-[50px] h-[60px] flex items-center justify-between bg-white">

        {/* Logo Section */}
        <div>
          <Link href={"/"}>
            <Image src={"/logo2.png"} alt="Logo2" width={59} height={21} />
          </Link>
        </div>

        {/* Main Links */}
        <div className="hidden md:flex">
          <ul className="flex gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Men</Link>
            <Link href={"/products"}>Women</Link>
            <Link href={"/products"}>Kids</Link>
            <Link href={"/products"}>Sales</Link>
            <Link href={"/products"}>Products</Link>
          </ul>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="flex items-center relative w-full md:w-auto">
            <Image
              src={"/search.png"}
              height={24}
              width={24}
              alt="Search"
              className="absolute left-2 cursor-pointer"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#efeeee] p-2 pl-10 rounded-full outline-none w-full md:w-auto"
            />
          </div>

          {/* Icons */}
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

      {/* Mobile Navigation */}
      <div className="block md:hidden bg-[#f5f5f5] px-4 py-2">
        <ul className="flex flex-col gap-2 text-sm">
          <Link href={"/"} className="block">New & Featured</Link>
          <Link href={"/"} className="block">Men</Link>
          <Link href={"/"} className="block">Women</Link>
          <Link href={"/"} className="block">Kids</Link>
          <Link href={"/"} className="block">Sales</Link>
          <Link href={"/"} className="block">SNKRS</Link>
        </ul>
      </div>
    </header>
  );
}
