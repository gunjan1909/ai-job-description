import Head from "next/head";
import { Inter } from "@next/font/google";
import Dashboard from "@/components/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Description Generator</title>
        <meta name="description" content="Job Description Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-gray-900 min-h-screen text-cyan-200 "}>
        {/* <main className={"min-h-screen bg-grey "}> */}
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            AI Job Description Generator
            <span className="text-4xl md:text-6xl font-bold text-blue-600">
              .
            </span>
          </h1>
          <p className="mt-3 text-2xl">
            Generate awesome
            <span className="text-2xl font-bold text-blue-600">
              {" "}
              Job Descriptions{" "}
            </span>
            in Seconds
          </p>
        </div>
        <Dashboard />
      </main>
    </>
  );
}
