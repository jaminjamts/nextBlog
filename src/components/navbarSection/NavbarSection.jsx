import Link from "next/link";
import { SearchIcon } from "../svg";

export const NavbarSection = () => {
  return (
    <main className="w-screen flex justify-center">
      <div className="container flex justify-between py-4">
        <div>Lightman</div>
        <div className="md:flex gap-8 hidden ">
          <div className="flex gap-4">
            <Link href="">Home</Link>
            <Link href="/bloglist">Bloglist</Link>
            <Link href="/contact-us">Contact-us</Link>
          </div>
          <div className="flex items-center bg-[var(--gray)] rounded-lg pr-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-[var(--gray)] rounded-lg px-2"
            />
            <SearchIcon />
          </div>
        </div>
      </div>
    </main>
  );
};
