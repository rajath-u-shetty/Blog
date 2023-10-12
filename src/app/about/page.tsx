import Link from "next/link";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Home() {
    return (
        <main className="h-[100%] text-white">
            <div className="text-5xl text-left mt-8 ml-8">About</div>
            <hr className="mt-8 mb-8" />
            <div className="flex justify-evenly  text-[20px] ">
            <div className="border-white">
                <img src="/images/profilepic.jpeg" alt="Rajath's pic" className="rounded-md h-60 w-60 " />
                <div className="flex pt-8 gap-4 justify-center">
                    <Link href={"www.github.com"} className="text-2xl rounded-md">
                            <FaGithub />
                    </Link>
                    <Link href={"www.facebook.com"} className="text-2xl rounded-md">
                        <FaFacebook />
                    </Link>
                    <Link href={"www.instagram.com"} className="text-2xl rounded-md">
                        <FaInstagram />
                    </Link>
                    <Link href={"www.linkedin.com"} className="text-2xl rounded-md">
                        <FaLinkedin />
                    </Link>
                </div>
                <p className="pt-2 flex justify-center">Bengaluru, India</p>
            </div>
            <div className="w-2/3 flex flex-col gap-y-5 items-start">
                <p className="">
                    I'm Rajath, a passionate and creative frontend developer based in the heart of Bengaluru. With a strong focus on building exceptional user experiences, I specialize in utilizing cutting-edge technologies like React and Next.js to bring web applications to life.
                </p>
                <p>
                    <span className="block font-bold">React.js:</span>
                    I have a deep understanding of React, one of the most popular JavaScript libraries for building user interfaces. I can create reusable and interactive components to make web applications more dynamic and responsive.
                </p>
                <p>
                    <span className="block font-bold">Next.js:</span>
                    I excel in using Next.js, the leading React framework for building production-ready, server-rendered applications. I leverage server-side rendering (SSR) and static site generation (SSG) for optimized performance and SEO.
                </p>
                <p>
                    <span className="block font-bold">HTML/CSS:</span>
                    I have a strong foundation in HTML and CSS, ensuring pixel-perfect designs and a seamless user interface. My CSS skills extend to preprocessors like SASS, enabling clean and maintainable styling.
                </p>                
            </div>
            </div>
        </main>
    )
}
