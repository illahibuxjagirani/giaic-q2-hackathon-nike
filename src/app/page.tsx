import Image from "next/image";
import Button from "./Components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="py-4">
      
      {/* Header Section */}
      <div className="h-[58px] bg-[#FFFAFA] px-[50px] flex justify-center items-center flex-col">
        <h1 className="text-xl font-bold">Hello Nike App</h1>
        <p>Download the app to access everything Nike. Get Your Great</p>
      </div>

      {/* Second Section: Hero Image and Product Description */}
      <div className="px-[50px] space-y-5">
        {/* Image Section */}
        <div>
          <Image src={"/image1.png"} alt="Image" width={1344} height={700} />
        </div>

        {/* First Look Section */}
        <div className="flex flex-col justify-center items-center gap-5 pb-5">
          <h4 className="font-bold">First Look</h4>
          <h1 className="uppercase font-bold sm:font-normal text-2xl sm:text-6xl">nike airmax pulse</h1>
          <p className="sm:w-[50%]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse—designed to push you past your limits and help you go to the max.
          </p>

          {/* Action Buttons */}
          <div className="space-x-5">
            <Button>Notify Me</Button>
            <Button>Shop Air Max</Button>
          </div>
        </div>
      </div>

      {/* Third Section: Featured Products */}
      <div className="px-[50px] py-4 space-y-4">
        {/* Section Header */}
        <div className="flex justify-between items-center font-semibold">
          <p>Best of Air Max</p>
          <div className="flex gap-4 items-center">
            <p>Shop</p>
            <div className="flex gap-2">
              <Image src={"/left-arrow.png"} alt="Left Arrow" width={48} height={48} className="cursor-pointer" />
              <Image src={"/right-arrow.png"} alt="Right Arrow" width={48} height={48} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Product Listings */}
        <div className="flex gap-3 text-xs sm:text-sm">
          {/* Product 1 */}
          <div className="space-y-4">
            <Image src={"/shoe1.png"} alt="Shoe" height={442} width={442} />
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Nike Air Max Pulse</h1>
                <p className="text-[#757575]">Mens Shoes</p>
              </div>
              <p className="font-bold">₹ 13 995</p>
            </div>
          </div>

          {/* Product 2 */}
          <div className="space-y-4">
            <Image src={"/shoe2.png"} alt="Shoe" height={442} width={442} />
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Nike Air Max 97 SE</h1>
                <p className="text-[#757575]">Mens Shoes</p>
              </div>
              <p className="font-bold">₹ 16 995</p>
            </div>
          </div>

          {/* Product 3 */}
          <div className="space-y-4">
            <Image src={"/shoe1.png"} alt="Shoe" height={442} width={442} />
            <div className="flex justify-between">
              <div>
                <h1 className="font-bold">Nike Air Max SYSTM</h1>
                <p className="text-[#757575]">Womens Shoes</p>
              </div>
              <p className="font-bold">₹ 11 995</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section: Featured Image and Call to Action */}
      <div className="px-[50px] space-y-5 py-5">
        <p className="font-semibold">Featured</p>
        <div>
          <Image src={"/image2.png"} alt="Image" width={1344} height={700} />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 pb-5 pt-4">
          <h1 className="uppercase sm:text-5xl font-semibold">STEP INTO WHAT FEELS GOOD</h1>
          <p className="sm:w-[50%]">Cause everyone should know the feeling of running in that perfect pair.</p>
          <div className="space-x-5">
            <Button>Find Your Shoe</Button>
          </div>
        </div>
      </div>

      {/* Fifth Section: Gear Up */}
      <div className="px-[50px] py-4 space-y-4">
        <p className="font-bold">Gear Up</p>

        {/* Category Navigation */}
        <div className="flex justify-between items-center font-semibold">
          <div className="flex gap-4 items-center w-[75%] ml-auto justify-between px-6">
            <div className="flex items-center gap-3">
              <p>Shop Mens</p>
              <div className="flex gap-2">
                <Image src={"/left-arrow.png"} alt="Left Arrow" width={48} height={48} className="cursor-pointer" />
                <Image src={"/right-arrow.png"} alt="Right Arrow" width={48} height={48} className="cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p>Shop Womens</p>
              <div className="flex gap-2">
                <Image src={"/left-arrow.png"} alt="Left Arrow" width={48} height={48} className="cursor-pointer" />
                <Image src={"/right-arrow.png"} alt="Right Arrow" width={48} height={48} className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex flex-col md:cflex-row gap-3 text-xs sm:text-sms">
          {/* Man 1 */}
          <div className="space-y-4">
            <Image src={"/man1.png"} alt="Shoe" height={300} width={300} />
            <div className="flex justify-between">
              <div className="text-sm">
                <h1 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h1>
                <p className="text-[#757575]">Mens Short-Sleeve</p>
                <p className="text-[#757575]">Running Top</p>
              </div>
              <p className="font-bold">₹ 3895</p>
            </div>
          </div>

          {/* Man 2 */}
          <div className="space-y-4">
            <Image src={"/man2.png"} alt="Shoe" height={200} width={300} />
            <div className="flex justify-between">
              <div className="text-sm">
                <h1 className="font-bold">Nike Dri-FIT Challenger</h1>
                <p className="text-[#757575]">Mens 18cm (approx.)</p>
                <p className="text-[#757575]">2-in-1 Versatile Shorts</p>
              </div>
              <p className="font-bold">₹ 2 495</p>
            </div>
          </div>

          {/* Woman 1 */}
          <div className="space-y-4">
            <Image src={"/woman1.png"} alt="Shoe" height={200} width={300} />
            <div className="flex justify-between">
              <div className="text-sm">
                <h1 className="font-bold">Nike Dri-FIT ADV Run Division</h1>
                <p className="text-[#757575]">Womens Long-Sleeve</p>
                <p className="text-[#757575]">Running Top</p>
              </div>
              <p className="font-bold">₹ 5 295</p>
            </div>
          </div>

          {/* Woman 2 */}
          <div className="space-y-4">
            <Image src={"/woman2.png"} alt="Shoe" height={200} width={300} />
            <div className="flex justify-between">
              <div className="text-sm">
                <h1 className="font-bold">Nike Fast</h1>
                <p className="text-[#757575]">Womens Mid-Rise 7/8 Running</p>
                <p className="text-[#757575]">Leggings with Pockets</p>
              </div>
              <p className="font-bold">₹ 3 795</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Section: Featured Collection */}
      <div className="px-[50px] space-y-5 py-5">
        <p className="font-semibold">Dont Miss</p>
        <div>
          <Image src={"/image3.png"} alt="Image" width={1344} height={700} />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 pb-5 pt-4">
          <h1 className="uppercase sm:text-5xl font-semibold">FLIGHT ESSENTIALS</h1>
          <p className="sm:w-[50%]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <div className="space-x-5">
            <Button>Shop</Button>
          </div>
        </div>
      </div>

      {/* Seventh Section: The Essentials Links */}
      <div className="px-[50px] space-y-5 py-5">
        <p className="font-semibold">The Essentials</p>
        <div className="flex gap-3 md:justify-between pb-10 sm:flex-row flex-col">
          <Image src={"/image4.png"} alt="Image" width={400} height={500} />
          <Image src={"/image5.png"} alt="Image" width={400} height={500} />
          <Image src={"/image6.png"} alt="Image" width={400} height={500} />
        </div>

        {/* Category Links */}
        <div className="flex flex-col gap-5 md:justify-between px-[20%] pt-10">
          <div className="space-y-4">
            <h1 className="font-bold">Icons</h1>
            <ul className="flex flex-col gap-3 text-[#757575]">
              <Link href={"/"}>Air Force 1</Link>
              <Link href={"/"}>Huarache</Link>
              <Link href={"/"}>Air Max 90</Link>
              <Link href={"/"}>Air Max 95</Link>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold">Shoes</h1>
            <ul className="flex flex-col gap-3 text-[#757575]">
              <Link href={"/"}>All Shoes</Link>
              <Link href={"/"}>Custom Shoes</Link>
              <Link href={"/"}>Jordon Shoes</Link>
              <Link href={"/"}>Running Shows</Link>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold">Clothing</h1>
            <ul className="flex flex-col gap-3 text-[#757575]">
              <Link href={"/"}>All Clothing</Link>
              <Link href={"/"}>Modest Wear</Link>
              <Link href={"/"}>Hoodest Pullover</Link>
              <Link href={"/"}>Shirts & Tops</Link>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="font-bold">Kids</h1>
            <ul className="flex flex-col gap-3 text-[#757575]">
              <Link href={"/"}>Infant & Toddler Shoes</Link>
              <Link href={"/"}>Kids Shoes</Link>
              <Link href={"/"}>Kids Jordon Shoes</Link>
              <Link href={"/"}>Kids Basketball Shoes</Link>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
