import Link from "next/link"
import { HiMenuAlt3 } from "react-icons/hi"

export default function Navbar() {
    return (
        <nav className={`p-5 bg-slate-800 flex justify-between w-auto items-center`}>
            <div className="flex items-center">
                <img src="/images/profilepic.jpeg" className="rounded-full h-16 mr-4 border-emerald-900" />
                <h1 className="text-4xl text-white font-bold">
                    <Link href={"/"}>
                        Rajath U shetty
                    </Link>
                </h1>
            </div>
            <div className="gap-10 flex text-bold text-white text-xl ">
                <Link href={'/blogs'} >
                    <h2 className="transform transition duration-400 hover:scale-125 hover:text-amber-200">Blogs</h2>
                </Link>
                <Link href={'/categories'} >
                    <h2 className="transform transition duration-400 hover:scale-125 hover:text-amber-200">Categories</h2>
                </Link>
                <Link href={'/about'} >
                    <h2 className="transform transition duration-400 hover:scale-125 hover:text-amber-200">About</h2>
                </Link>
            </div>
        </nav>
    )
}
                


{/* <div className="text-4xl hover:opacity-20 border-2 p-2 rounded-md border-black">
                <HiMenuAlt3 />
    </div> */}