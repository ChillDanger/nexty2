import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  <h1 className="text-4xl font-bold text-aquamarine-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
    Daniel Alswanger
  </h1>

  <p className="mt-2 text-lg italic text-gray-600 dark:text-gray-400">
    Server: AWS
  </p>

  <p className="text-lg italic text-gray-600 dark:text-gray-400">
    Framework: Next.js
  </p>
</div>
  );
}

