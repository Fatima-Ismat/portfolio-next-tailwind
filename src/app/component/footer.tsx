import Image from "next/image";
import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';
import { MdMailOutline } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      
    <Image
  src="/logo.png"
  alt="Ismat Fatima"
  width={100}
  height={100}
  className="w-[50px]"/>


      <span className="ml-3 text-xl">Ismat Fatima</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2020 Ismat Fatima —
     
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
      <Link target="_blank" href="{https://www.linkedin.com/in/ismat-fatima-a67b9b81/}" className="ml-3 text-gray-500">
      <FaLinkedinIn className="text-3xl hover:text-[#0A66C2]" />
      </Link>
      <Link target="_blank" href ="{ismatfatima213@gmail.com}" className="ml-3 text-gray-500">
      <MdMailOutline className='text-3xl hover:text-[#FBBC04]' />
      </Link>
     
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
