import React from "react";
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <main className="min-h-[86vh] container bg-red-100 mx-auto relative">
        I am Home
        <div className="relative w-full h-[700px] my-3">
          <Image
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Young Asian woman traveling"
            fill
            quality={50}
            className="object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default Page;
