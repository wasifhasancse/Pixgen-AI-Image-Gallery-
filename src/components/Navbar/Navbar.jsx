"use client";
import Image from "next/image";
import Link from "next/link";
//website title: pixgen - AI Image
const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center py-3 max-w-11/12 mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">pixgen.</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"} className="px-2 py-1 hover:bg-gray-200 rounded" >Home</Link>
          </li>
          <li>
            <Link href={"/all-photos"} className="px-2 py-1 hover:bg-gray-200 rounded" >All Photos</Link>
          </li>
          <li>
            <Link href={"/pricing"} className="px-2 py-1 hover:bg-gray-200 rounded" >Pricing</Link>
          </li>
          <li>
            <Link href={"/profile"} className="px-2 py-1 hover:bg-gray-200 rounded" >Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link href={"/signup"} className="px-2 py-1 hover:bg-gray-200 rounded" >Sign Up</Link>
            </li>
            <li>
              <Link href={"/signin"} className="px-2 py-1 hover:bg-gray-200 rounded" >Sign In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
