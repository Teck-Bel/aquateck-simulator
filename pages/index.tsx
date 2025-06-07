import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welkom bij AquaTeck Simulator</h1>
      <p>Test hier onze simulaties eenvoudig online.</p>
      <Link href="/dashboard">
        <a>Ga naar dashboard</a>
      </Link>
    </>
  );
}
