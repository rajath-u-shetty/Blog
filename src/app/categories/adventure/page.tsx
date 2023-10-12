"use client"
import Link from "next/link";
import { blogData } from "@/app/data/BlogData"; 
import { useRouter } from "next/navigation";

export default function Page() {
    const adventurePosts = blogData.filter((item) =>
        item.category.includes("adventure")
    );
    const router = useRouter()
    const handleRoute = () => (
        router.push("/blogs/hiking")
    )

    return (
    <main className="text-white">
        <div className="text-6xl my-10 ml-24">Adventure Posts</div>
        <hr className="mb-10" />
        <div className="ml-24">
            <div className="">
            {adventurePosts.map((item) => (
                <div className="ml-32 flex items-center gap-52 text-bold text-xl" key={item.date}>
                <div key={item.id} className="">
                    <h1 className=" text-bold text-3xl mt-8 mb-2 cursor-pointer" onClick={handleRoute}>{item.title}</h1>
                    <ul className="flex gap-5 text-green-500  text-xl">
                    {item.category.map((categoryItem, index) => (
                        <Link href={item.url} key={index}>
                        <li className="leading-7 hover:text-green-300">{categoryItem}</li>
                        </Link>
                    ))}
                    </ul>
                    <p className="text-gray-300 mt-1 text-xl">{item.content}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    </main>
    );
}
