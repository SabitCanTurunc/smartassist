import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    <div className="h-screen flex w-full">
      {/* Left side: Logo and introductory content */}
      <div className="hidden lg:flex flex-col items-start w-2/3 flex-shrink-0 bg-black px-10 relative">
        <Image
          className="object-cover w-full h-[250px] md:h-[300px] bg-black px-2"
          src="/images/ConvexusBanner.gif"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
          width={0}
          height={0}
        />

        <h2 className="text-white md:text-4xl font-bold mt-6">
          Hi, I’m your AI powered sales assistant, CONVEXUS!
        </h2>
        <p className="text-white md:text-sm mb-10">
          Convexus is capable of capturing lead information without a form...{' '}
          <br />
          Something never done before !!
        </p>

        {/* Adjust the gif positioning to avoid overlap */}
        <div className="absolute top-[300px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/MessageBot.gif"
            alt="app image"
            loading="lazy"
            sizes="30"
            className="!w-[700px] p-20"
            width={0}
            height={0}
          />
        </div>
      </div>

      {/* Right side: The children content */}
      <div className="w-full lg:w-1/3 flex flex-col items-start p-6">
        {children}
      </div>
    </div>
  )
}

export default Layout
