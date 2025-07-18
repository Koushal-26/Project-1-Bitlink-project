import Image from "next/image";
import localfont from "next/font/local";
import Link from "next/link";


const poppins = localfont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market.
          </p>
          <p className="px-24 text-center">
            We are the most straightforward URL Shortener in the world. Most of the url shortener will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener.
          </p>
          <div className='flex gap-3'>
            <Link href="/shorten"><button className='text-white bg-purple-500 rounded-lg p-3 py-1 font-bold'>Try Now</button></Link>
            <Link href="/github"><button className='text-white bg-purple-500 rounded-lg p-3 py-1 font-bold'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="Am Image of a vector" src={"/vector.jpg"} fill={true} />

        </div>

      </section>
    </main>
  );
}
