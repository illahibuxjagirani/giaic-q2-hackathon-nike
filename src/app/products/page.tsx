import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="px-5 py-5 sm:px-8 lg:px-12">

      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between pb-10 gap-4">
        <h1 className="font-bold text-lg sm:text-xl">New (500)</h1>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <p>Hide Filters</p>
            <Image src="/lines.png" alt="Lines" width={24} height={24} />
          </div>

          <div className="flex items-center gap-2">
            <p>Sort By</p>
            <Image src="/down-arrow.png" alt="Arrow" width={14} height={14} />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left Sidebar */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Filters */}
          <div className="space-y-5 text-sm">
            {/* Categories */}
            <div>
              <ul className="flex flex-col gap-3 font-semibold">
                {[
                  "Shoes",
                  "Sports",
                  "Tops & T-Shirts",
                  "Hoodies & Sweatshirts",
                  "Jackets",
                  "Shorts",
                  "Tracksuits",
                  "Jumpsuits & Rompers",
                  "Skirts & Dresses",
                  "Socks",
                  "Accessories & Equipment",
                ].map((category, index) => (
                  <li key={index}>
                    <Link href="/">{category}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gender Filter */}
            <FilterSection title="Gender" items={["Men", "Women", "Unisex"]} />

            {/* Kids Filter */}
            <FilterSection title="Kids" items={["Boys", "Girls"]} />

            {/* Price Filter */}
            <FilterSection
              title="Shop By Price"
              items={["Under ₹ 2,500.00", "₹ 2,501.00 - ₹ 7,500.00"]}
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:block cursor-pointer bg-slate-200">
            <Image src="/line1.png" alt="" height={850} width={11} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-[80%] space-y-10">
          {[1, 2, 3, 4].map((row) => (
            <div
              key={row}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {[
                {
                  image: "/item1.png",
                  label: "Just In",
                  title: "Nike Air Force 1 Mid '07",
                  description: "Men's Shoes",
                  color: "1 Color",
                  price: "₹ 10,795.00",
                },
                {
                  image: "/item2.png",
                  label: "Just In",
                  title: "Nike Court Vision Low Next Nature",
                  description: "Men's Shoes",
                  color: "1 Color",
                  price: "₹ 4,995.00",
                },
                {
                  image: "/item3.png",
                  label: "Just In",
                  title: "Nike Air Force 1 PLT.AF.ORM",
                  description: "Women's Shoes",
                  color: "1 Color",
                  price: "₹ 8,695.00",
                },
              ].map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FilterSection = ({ title, items }) => (
  <div>
    <div className="flex justify-between items-center">
      <p className="font-bold pb-3">{title}</p>
      <Image src="/up-arrow.png" alt="Toggle" width={14} height={14} />
    </div>

    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="flex gap-1 items-center">
          <p className="h-[20px] w-[20px] border-2 cursor-pointer border-[#D9D9D9]"></p>
          <p>{item}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="space-y-3 cursor-pointer">
    <Image src={product.image} alt="Product" width={300} height={300} />
    <p className="text-red-500">{product.label}</p>
    <div>
      <p className="font-bold">{product.title}</p>
      <p className="text-[#757575]">{product.description}</p>
      <p className="text-[#757575]">{product.color}</p>
    </div>
    <p>{product.price}</p>
  </div>
);