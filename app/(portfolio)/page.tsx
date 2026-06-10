import PortfolioContent from "@/components/PortfolioContent";

export default function Home() {
  return (

    
    <main className="pt-30">
      <PortfolioContent />
      <h1 className="text-4xl font-bold text-aquamarine-800 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400">
        Daniel Alswanger
      </h1>

      <p className="mt-2 text-lg italic text-gray-600 dark:text-gray-400">
        Server: AWS
      </p>

      <p className="text-lg italic text-gray-600 dark:text-gray-400">
        Framework: Next.js
      </p>
      
    </main>
  );
}
