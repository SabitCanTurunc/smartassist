'use client';  // This makes the component a Client Component

import Image from 'next/image';
import Link from 'next/link';

function NavBar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
    }
  };

  return (
    <div className=" sticky  top-0 z-50 flex bg-black gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      
      
      {/* Logo */}
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-3xl tracking-tighter text-neutral-700">
        <Link href="/">
          <Image
            src="/images/LogoluConvexus.png"
            alt="LOGO"
            sizes="100vw"
            style={{
              width: '200px',
              height: '50px',
            }}
            width={0}
            height={0}
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="gap-5 justify-between self-stretch my-auto text-sm leading-5 text-white max-md:flex-wrap max-md:max-w-full font-normal hidden md:flex">
        <li>
          <button onClick={() => scrollToSection('pricing-section')} className="text-white">
            Pricing
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('features-section')} className="text-white">
            Features
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('newsroom-section')} className="text-white">
            News Room
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection('contact-section')} className="text-white">
            Contact us
          </button>
        </li>
      </ul>

      {/* Free Trial Button */}
      <Link href="/dashboard" className="bg-orangeDark px-4 py-2 rounded-sm text-white">
        Free Trial
      </Link>
    </div>
  );
}

export default NavBar;
