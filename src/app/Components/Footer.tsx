import Image from "next/image";
import Link from "next/link";

export default function Footer(){
  return(
    <div className="px-[50px] bg-black text-white py-8 mt-4">

{/* top div */}
<div className="flex justify-between">

{/* 1st div */}
<div className="flex w-[75%] gap-[10%]">

<div className="space-y-4">
  <ul className="flex flex-col gap-3 uppercase">
    <Link href={"/"}>Find a Store</Link>
    <Link href={"/"}>Become a Member</Link>
    <Link href={"/"}>Sign up for email</Link>
    <Link href={"/"}>send us feedback</Link>
    <Link href={"/"}>student discounts</Link>
  </ul>
</div>

<div className="space-y-4">
  <ul className="flex flex-col gap-3 text-[#7E7E7E]">
    <Link href={"/"} className="uppercase text-white">Get help</Link>
    <Link href={"/"}>Order Status</Link>
    <Link href={"/"}>Delivery</Link>
    <Link href={"/"}>Return</Link>
    <Link href={"/"}>Payment Options</Link>
    <Link href={"/"}>Contact Us On Nike.com Inquiries</Link>
    <Link href={"/"}>Contact Us On All Other Inquiries</Link>
   
  </ul>
</div>

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


{/* 2nd div */}
<div className="flex items-start gap-3">

<Image src={"/github.png"} alt="" width={30} height={30}/>
<Image src={"/fb.png"} alt="" width={30} height={30}/>
<Image src={"/yt.png"} alt="" width={30} height={30}/>
<Image src={"/insta.png"} alt="" width={30} height={30}/>

</div>


</div>



{/* bottom div */}
<div>

{/* left div */}
<div>

  <div>
<Image src={"/location.png"} alt="" width={10} height={13}/>
  </div>

  <p>© 2023 Nike, Inc. All Rights Reserved</p>
</div>

{/* right div */}
<div>

<ul>
  <Link href={"/"}>Guides</Link>
  <Link href={"/"}>Terms of Sale</Link>
  <Link href={"/"}>Terms of Use</Link>
  <Link href={"/"}>Nike Privacy Policy</Link>
</ul>

</div>

</div>


    </div>
  )
}