import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-4 md:px-[50px] bg-black text-white py-8 mt-4 space-y-16 text-sm">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8">

        {/* Navigation Links */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-[75%] gap-8 md:gap-[10%]">
          
          {/* Column 1 */}
          <div className="space-y-4">
            <ul className="flex flex-col gap-3 uppercase">
              <Link href={"/"}>Find a Store</Link>
              <Link href={"/"}>Become a Member</Link>
              <Link href={"/"}>Sign up for Email</Link>
              <Link href={"/"}>Send Us Feedback</Link>
              <Link href={"/"}>Student Discounts</Link>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <ul className="flex flex-col gap-3 text-[#7E7E7E]">
              <Link href={"/"} className="uppercase text-white">Get Help</Link>
              <Link href={"/"}>Order Status</Link>
              <Link href={"/"}>Delivery</Link>
              <Link href={"/"}>Returns</Link>
              <Link href={"/"}>Payment Options</Link>
              <Link href={"/"}>Contact Us On Nike.com Inquiries</Link>
              <Link href={"/"}>Contact Us On All Other Inquiries</Link>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <ul className="flex flex-col gap-3 text-[#7E7E7E]">
              <Link href={"/"} className="uppercase text-white">About Nike</Link>
              <Link href={"/"}>News</Link>
              <Link href={"/"}>Career</Link>
              <Link href={"/"}>Investors</Link>
              <Link href={"/"}>Sustainability</Link>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center items-center md:justify-start">
          <Image src={"/github.png"} alt="GitHub" width={30} height={30} />
          <Image src={"/fb.png"} alt="Facebook" width={30} height={30} />
          <Image src={"/yt.png"} alt="YouTube" width={30} height={30} />
          <Image src={"/insta.png"} alt="Instagram" width={30} height={30} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#7E7E7E]">

        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-4 items-center text-center md:text-left">
          <div className="flex gap-3 items-center">
            <Image src={"/location.png"} alt="Location" width={10} height={13} />
            <p className="text-white">Pakistan</p>
          </div>
          <p>© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link href={"/"}>Guides</Link>
          <Link href={"/"}>Terms of Sale</Link>
          <Link href={"/"}>Terms of Use</Link>
          <Link href={"/"}>Nike Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
