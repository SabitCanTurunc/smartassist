import { onGetBlogPosts } from "@/actions/landing";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { pricingCards } from "@/constants/landing-page";
import clsx from "clsx";
import { Check, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser';
import { getMonthName } from "@/lib/utils";

export default async function Home() {
  const posts:
    | {
      id: string
      title: string
      image: string
      content: string
      createdAt: Date
    }[]
    | undefined = await onGetBlogPosts();

  return (
    <main className="flex flex-col">
      <NavBar />

      {/* Video Section */}
      <div className="relative w-full h-screen overflow-hidden border-b border-solid border-zinc-100">
        <Link href="/dashboard">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/images/Convexus.mp4" type="video/mp4" />
            Tarayıcınız bu videoyu desteklemiyor.
          </video>
        </Link>
      </div>

      {/* Image Section */}
      <section id="features-section" className="flex items-center justify-center w-full border-b border-solid border-zinc-100">

        <Image
          src="/images/PoweredByConvexuS.gif"
          width={1920}
          height={1080}
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="flex flex-col items-center gap-4 mt-10 text-center px-4">
        <h2 className="text-4xl">Choose what fits you right</h2>
        <p className="text-muted-foreground max-w-lg">
          Our straightforward pricing plans are tailored to meet your needs. If{" "}
          {"you're"} not ready to commit, you can get started for free.
        </p>
      </section>
      <div className="flex justify-center gap-4 flex-wrap mt-6 pb-10 border-b border-solid border-zinc-100">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-orange">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ month</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div key={feature} className="flex gap-2">
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashboard?plan=${card.title}`}
                className="bg-[#f3d299] border-orange border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Get Started
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* News Room Section */}
      <section id="newsroom-section" className="flex flex-col  border-b border-solid border-zinc-100 items-center gap-4 mt-28 pb-10 px-4">
        <h2 className="text-4xl text-center">News Room</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Explore our insights on AI, technology, and optimizing your business.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 container mt-8 px-4">
        {posts &&
          posts.map((post) => (
            <Link
              href={`/blogs/${post.id}`}
              key={post.id}
              className="hover:bg-gray-100 rounded-xl overflow-hidden"
            >
              <Card className="flex flex-col gap-2 h-full">
                <div className="relative w-full aspect-video">
                  <Image
                    src={`${process.env.CLOUDWAYS_UPLOADS_URL}${post.image}`}
                    alt="post featured image"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="py-5 px-4 flex flex-col gap-5">
                  <CardDescription>
                    {getMonthName(post.createdAt.getMonth())}{' '}
                    {post.createdAt.getDate()} {post.createdAt.getFullYear()}
                  </CardDescription>
                  <CardTitle>{post.title}</CardTitle>
                  {parse(post.content.slice(4, 100))}...
                </div>
              </Card>
            </Link>
          ))}
      </section>
      {/* News Room Section */}
      <section id="contact-section" className="flex flex-col items-center gap-4 mt-24 border-b border-solid border-zinc-100 pb-10 px-4">
        <h2 className="text-4xl text-center">Contact Us</h2>
        <p className="text-muted-foreground text-center max-w-lg">
          Get in touch with us to discuss how we can help you grow your business and achieve your goals.
        </p>
        <Card className="max-w-xl w-full mx-auto p-6 shadow-lg border border-gray-200 rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Reach Us</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">We're here to help! Reach out to us through the following ways:</CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Phone className="text-orange-500" />
              <p className="text-sm">+1 (800) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-orange-500" />
              <p className="text-sm">contact@convexus.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-orange-500" />
              <p className="text-sm">123 Business St, City, Country</p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center mt-4">
            <button className="bg-orangeDark">

              <Link
                href="mailto:contact@convexus.com?subject=Inquiry&body=Hello, I would like to get in touch with you regarding..."
                className="bg-orangeDark text-white p-2 rounded-md text-center w-full"
              >
                Get In Touch
              </Link>
            </button>

          </CardFooter>
        </Card>

      </section>
    </main>
  );
}
