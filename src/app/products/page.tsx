import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="px-4 md:px-10 lg:px-16 py-5">
      {/* Top Div */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-bold text-xl">New (500)</h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <p>Hide Filters</p>
            <Image src="/lines.png" alt="Lines" width={24} height={24} />
          </div>
          <div className="flex items-center gap-2">
            <p>Sort By</p>
            <Image src="/down-arrow.png" alt="Sort Icon" width={14} height={14} />
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Div */}
        <div className="flex flex-col md:flex-row gap-5">
          {/* Filters */}
          <div className="space-y-5 text-sm">
            {/* Category Filter */}
            <div>
              <ul className="flex flex-col gap-3 font-semibold">
                <li>
                  <Link href="/">Shoes</Link>
                </li>
                <li>
                  <Link href="/">Sports</Link>
                </li>
                <li>
                  <Link href="/">Tops & T-Shirts</Link>
                </li>
                <li>
                  <Link href="/">Hoodies & Sweatshirts</Link>
                </li>
                <li>
                  <Link href="/">Jackets</Link>
                </li>
                <li>
                  <Link href="/">Shorts</Link>
                </li>
                <li>
                  <Link href="/">Tracksuits</Link>
                </li>
                <li>
                  <Link href="/">Jumpsuits & Rompers</Link>
                </li>
                <li>
                  <Link href="/">Skirts & Dresses</Link>
                </li>
                <li>
                  <Link href="/">Socks</Link>
                </li>
                <li>
                  <Link href="/">Accessories & Equipment</Link>
                </li>
              </ul>
            </div>

            {/* Gender Filter */}
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold pb-3">Gender</p>
                <Image src="/up-arrow.png" alt="Arrow" width={14} height={14} />
              </div>
              <div className="space-y-2">
                {["Men", "Women", "Unisex"].map((gender) => (
                  <div key={gender} className="flex items-center gap-2">
                    <div className="h-5 w-5 border-2 cursor-pointer border-gray-300"></div>
                    <p>{gender}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shop By Price */}
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold pb-3">Shop By Price</p>
                <Image src="/up-arrow.png" alt="Arrow" width={14} height={14} />
              </div>
              <div className="space-y-2">
                {["Under ₹ 2 500.00", "₹ 2 501.00 - ₹ 7 500.00"].map((price) => (
                  <div key={price} className="flex items-center gap-2">
                    <div className="h-5 w-5 border-2 cursor-pointer border-gray-300"></div>
                    <p>{price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-1 bg-gray-200"></div>
        </div>

        {/* Right Div */}
        <div className="flex-1 space-y-16">
          {/* Product Rows */}
          {Array.from({ length: 2 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Sample Product */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="space-y-3 cursor-pointer">
                  <Image src={`/item${item}.png`} alt={`Item ${item}`} width={300} height={300} />
                  <p className="text-red-500">Just In</p>
                  <div>
                    <p className="font-bold">Nike Air Force 1 Mid 07</p>
                    <p className="text-gray-500">Mens Shoes</p>
                    <p className="text-gray-500">1 Color</p>
                  </div>
                  <p>MRP: ₹ 10,795.00</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
