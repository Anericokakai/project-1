import Image from "next/image";
import Section2, { Section1 } from "./team/components/section1";
import NavBar from "./components/nav-bar";

export default function Home() {
  return (
    <main>
      <Section1 />
      <Section2 />
    </main>
  );
}
