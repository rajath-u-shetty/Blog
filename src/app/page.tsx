import Link from "next/link";
import { blogData } from "./data/BlogData";

export default function Home() {
  return (
    <main className="text-white ">
        <div className=" mt-20">
          <div className=" flex justify-evenly  flex-wrap  lg:flex-nowrap sm:justify-evenly">
            {blogData.map((item) => (
              <div key={item.id} className=" border-2 border-white rounded-md mx-5 my-5  p-10">
                <Link href={item.url}>
                <img src={item.image} className="w-fit"/>
                <p className="text-bold text-3xl mb-3">{item.title}</p>
                <ul>
                  {item.info.map((infoItem, index) => (
                    <li key={index} className="leading-7">{infoItem}</li>
                  ))}
                </ul>
                </Link>
              </div>
            ))}
          </div>
        </div>
    </main>
  )
}



