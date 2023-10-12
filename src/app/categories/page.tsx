import Link from "next/link";
import { blogData } from "../data/BlogData";

export default function Categories() {
    const categoryCounts: Record<string, number> = {};

    blogData.forEach((item) => {
    item.category.forEach((category) => {
        if (categoryCounts[category]) {
        categoryCounts[category] += 1;
        } else {
        categoryCounts[category] = 1;
        }
    });
    });
    const categories = Object.keys(categoryCounts);

    return (
        <main>
            <div className="flex justify-center place-items-center h-screen gap-16 ">
                <div className="text-white text-bold text-7xl">Tags</div>
                <div className="text-emerald-600 leading-8 text-xl  text-bold ">
                    <ul>
                        {categories.map((category) => (
                            <li key={category} className="hover:text-emerald-300">
                                <Link href={`/categories/${encodeURIComponent(category)}`}>
                                    {category} <span className="text-white">({categoryCounts[category]})</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}
