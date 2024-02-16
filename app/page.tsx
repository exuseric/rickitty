import Image from "next/image";
import SearchBar from "./components/search-bar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-16">
      <header className="text-center">
        <h1 className="font-sans font-bold text-5xl text-bold text-black">Rickitty</h1>
        <p>Explore the world of rick and morty</p>
      </header>

      <SearchBar />
    </main>
  );
}
