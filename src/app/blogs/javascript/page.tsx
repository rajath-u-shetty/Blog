import Image from "next/image";
import Link from "next/link";

export default function Pets() {
    return (
        <main className="text-gray-400 ">
            <div className="mx-14">
            <div className=" ">
                <h1 className="text-4xl text-bold my-8 text-white">What Is a JavaScript Framework?</h1>
                <p className="text-xl mb-2"><span className="text-bold">Frameworks provide developers with the basic foundation necessary for building JavaScript applications.</span> This saves developers the effort of starting from scratch by utilizing a functional base to get things rolling. </p>
                <p className="text-xl mb-2">In JavaScript’s case, this base includes a collection of code libraries. The libraries compile code that elicits specific functionality for the specific type of app you may be working on. In essence, the framework will define the structure of the entire application. </p>
                <h1 className="text-4xl text-bold my-8 text-white">What Does a JavaScript Framework Do?</h1>
                <p className="text-xl mb-2"><span className="text-bold">Each JavaScript framework serves a different purpose.</span> JavaScript is a steadfast choice for web development and many of its frameworks revolve around this undertaking. </p>
                <p className="text-xl mb-2">Building web apps and websites from start to finish can take quite a bit of work. Web frameworks  or really,<span className="text-blue-600 undeline"><Link href={"https://www.trio.dev/react/resources"} >JavaScript frameworks </Link></span> – take advantage of the fact that every website and web app have common features.</p>
                <p className="text-xl mb-2">In this way, you can think of the term framework quite literally. Houses also rely on frameworks as a skeleton for the overall support and shape of an outer framing.<span className="text-blue-600 undeline"><Link  href={"https://www.trio.dev/blog/tech-stack"}> Software frameworks </Link></span> do the same. </p>
            </div>
            <div>
                <h1 className="text-4xl text-white my-8">The 5 Most Popular JavaScript Frameworks</h1>
                <p className="text-xl mb-2">There are a couple dozen JavaScript frameworks out in the ether for you to use. But for the brevity of this piece, it&apos;s probably best to mention the most popular ones.</p>
                <h3 className="text-2xl text-white mb-6">Here are 5 of the most popular JavaScript frameworks.</h3>
                <Image alt="framework" src="/images/framework.jpg" className="w-auto h-auto" />
            </div>
            <div>
                <h1 className="text-4xl text-bold my-8 text-white">1. Node.js</h1>
                <p className="text-xl mb-2"><span className="text-blue-600 undeline"><Link  href={"https://nodejs.org/en"}> Node.js </Link></span> is not exactly a JavaScript framework; it&apos;s a runtime environment. While JavaScript can be written directly into the web browser, this is not always desirable.</p>
                <p className="text-xl mb-2">This is why Node.js lends the capacity for command-line tools and server-side scripting. </p>
                <p className="text-xl mb-2">Though JavaScript usually operates on the client-side or the front-end, server-side scripting begets faster load times as browser technology is not needed. This can decrease user frustration and increase SEO. </p>
            </div>
            <div>
                <h1 className="text-4xl text-bold my-8 text-white">2. Vue.js</h1>
                <p className="text-xl mb-2"><span className="text-blue-600 undeline"><Link href={"https://vuejs.org/"}  >Vue.js</Link></span> calls itself the progressive JavaScript framework. The name stems from its philosophy of incremental adoption. In Vue.js, the core library is focused on the view layer only so any additional functionality must be adopted in increments.</p>
                <p className="text-xl mb-2">The framework uses a model-view-viewmodel (MVVM) architectural pattern. This pattern separates the graphical user interface (UI)  or the view  from the business logic of the application  or the model. The viewmodel layer is a converter medium that synchronizes data.</p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl text-white my-8">3. AngularJS</h1>
                <p className="text-xl mb-2"><span className="text-blue-600 undeline"><Link href={"https://angular.io/"}  >Angular.JS </Link></span> is maintained by Google and addresses common complications in building single-page applications (SPAs). This framework works by leveraging HTML vocabulary on dynamic web pages. In the past, HTML could only be used for static content.</p>
                <p className="text-xl mb-2">SPAs work by dynamically loading content from the webserver rather than the web browser. As a result, SPAs function in a similar fashion to mobile applications and do not need to be reloaded. </p>
            </div>
            </div>
        </main>
    )
}
