import Image from "next/image";

export default function WebDev() {
    return (
        <main className="text-gray-400 text-xl my-8">
            <div className="mx-14">
                <h2 className="font-serif text-white ">if you&apos;re a beginner…</h2>
                <h1 className="text-4xl text-white text-bold my-6">1. Developer Drive</h1>
                <Image alt="developer.ai" src="/images/developer.png" className="h-40 w-auto" />
                <p className="my-4">As mentioned above, this is a perfect option if you&apos;re just beginning your career in web development. By web developers, for web developers, Developer Drive offers the latest news in the world of web development. This includes opinion articles, tutorials, tips & tricks to start off on the right foot. Are you looking to learn how to minimize downtime? How about ensuring your site is secure and easy for consumers to navigate? Or would you like to keep tabs on every Microsoft software release? From JavaScript to mobile development, Developer Drive has you covered.</p>
                <h1 className="text-4xl text-white text-bold my-6">2. Simple Programmer</h1>
                <Image alt="simple" src="/images/simple.png" className="h-40 w-auto" />
                <p className="my-4">While Simple Programmer was originally created by founder John Sonmez to distill what he learned as a web developer into understandable content, today it is focused on helping software developers, programmers and other IT professionals improve their careers and their lives.  This blog gets into the nitty-gritty of being a web developer and if you&apos;ve wondered about something web development related, there&apos;s a good chance they&apos;ve written about it. Simple Programmer puts a fun spin on videos, keeping you engaged with humor while providing valuable content. The&apos;re constantly posting new articles  almost daily  so you&apos;ll never be bored.</p>
                <h1 className="text-4xl text-white text-bold my-6">3. CodeNewbie</h1>
                <Image alt="code" src="/images/code.png" className="h-40 w-auto" />
                <p className="my-4">Just like the blog title says  if you&apos;re a code newbie looking for insight on all things web development, youre in the right place. This site acts as a virtual community for anyone new to the coding world. CodeNewbie offers an open look into the lives of web developers and serves as a place for people to read about career advice while hearing stories from people on their coding journey through the site&apos;s podcasts.  </p>
                <p className="my-4">CodeNewbie originally started as a weekly TwitterChat to connect people learning to code. While they still host a weekly #CodeNewbie TwitterChat every Wednesday at 9PM EST, it&apos;s evolved into a supportive, international community of people learning to code.</p>
                <p className="my-4">If you&apos;re early in your coding journey, we&apos;d recommend joining CodeNewbie&apos;s next Twitter chat by following their Twitter page.</p>
                <h1 className="text-4xl text-white text-bold my-6">4. Scotch.io</h1>
                <Image alt="scoth.ai" src="/images/scotch.png" className="h-40 w-auto" />
                <p className="my-4">So, you&apos;ve been a web developer for a while, or maybe you&apos;re just a fast learner. Either way, hats off to you! Some of the &apos;beginner&apos; blogs outlined above may be a bit too junior for you, which is where Scotch.io comes in handy. This blog is full of tutorials on everything from JavaScript to PHP. They also offer some interesting courses that require minimal commitment and can help take your coding expertise to the next level.</p>
            </div>
        </main>
    )
}
