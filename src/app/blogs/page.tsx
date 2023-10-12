import Link from "next/link";
import { blogData } from "../data/BlogData";

export default function page() {
    return (
        <main className="text-white ">
            <div className="text-6xl my-10 ml-24">All Posts</div>
            <hr className="mb-10"/>  
            <div className="ml-24">
                <div className="">
                    {blogData.map((item) => (
                        <div className="ml-32 flex items-center gap-52 text-bold text-xl" key={item.date}>{item.date}                        
                        <div key={item.id} className="">
                            <Link href={item.url}>
                                <h1 className=" text-bold text-3xl mt-8 mb-2">{item.title}</h1>
                            </Link>
                            <ul className="flex gap-5 text-green-500  text-xl">
                                {item.category.map((categoryItem, index) => (
                                    <Link href={item.url}>
                                        <li key={index} className="leading-7 hover:text-green-300">{categoryItem}</li>
                                    </Link>
                                ))}
                            </ul>
                            <p className="text-gray-300 mt-1 text-xl">{item.content}</p>
                        </div>
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </main>
    )
}
