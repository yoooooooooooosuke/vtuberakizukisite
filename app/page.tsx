import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="items-center justify-center p-4 lg:p-16">
      <div className="z-10 w-full items-center justify-center flex flex-col lg:flex-row">
        <Image
          className="sm-none"
          src="/img.png"
          alt="mainvisual"
          width={256}
          height={512}
        />
        <div className="flex-col text-center lg:max-w-5xl lg:mb-0 lg:text-center p-4 lg:p-16">
          <h2 className={`mb-2 lg:mb-4 lg:text-2xl font-semibold`}>
            Virtual Youtuber
          </h2>
          <h2 className={`mb-8 lg:mb-16 text-3xl lg:text-6xl font-semibold text-red-500`}>
            Akizuki
          </h2>
          <h2 className={`mb-8 lg:mb-16 text-xl lg:text-4xl font-semibold text-red-500`}>
            Guide
          </h2>
          <InternalLinks text = "About" url="about" />
          <ExternalLinks text = "twitch" url="test" />
          <ExternalLinks text = "Youtube" url="test" />
          <ExternalLinks text = "X(Twitter)" url="test" />
          <InternalLinks text = "Guideline" url="guideline" />
          <InternalLinks text = "Contact" url="contact" />
        </div>
      </div>
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
    </main>
  );
}

const InternalLinks = (props:{text:string,url:string}) => {
  return(
    <div className="mb-2 lg:mb-4 hover:text-white hover:text-border hover:scale-110">
      <Link href={props.url} passHref>
        <h2 className={`text-2xl font-semibold`}>
          {props.text}
        </h2>
      </Link>
    </div>
  )
}

const ExternalLinks = (props:{text:string,url:string}) => {
  return(
    <div className="mb-2 lg:mb-4">
      <a
        href={props.url}
        className="group hover:text-white hover:text-border hover:scale-110"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`text-2xl font-semibold hover:scale-110`}>
          {props.text}{" "}
          <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none ">
            -&gt;
          </span>
        </h2>
      </a>
    </div>
  )
}