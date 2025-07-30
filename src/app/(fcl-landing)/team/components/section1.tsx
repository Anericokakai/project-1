"use client";
import { BannerImage } from "@/app/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {Camera} from "lucide-react"
import Link from "next/link";
export const Section1 = () => {
  return (
    <div className=" container1 h-[90dvh]  w-full relative ">
      <Image src={BannerImage} alt="banner-image" className="absolute " />
      <h1 className="text-6xl font-bold relative text-white">
        Welcome to Gamers
      </h1>
    </div>
  );
};

export default function Section2() {
  return <div className="bg-blue-500 h-60">

    <div>
       <Link target="_blank" href="https://www.pinterest.com/pin/640144534571374531/">
       <Button>instagram <Camera/>   </Button>
       </Link>  
    </div>


    
  </div>;
}
