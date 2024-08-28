import { ButtonGrey } from "../accessories";
import { HamburgerMenuIcon, SearchIcon } from "../svg";

export const NavbarSection = () => {
  return (
    <main>
      <div className="flex w-screen justify-center ">
        <div className="flex container justify-between p-5">
          <div className="p-2">LightTower</div>
          <div className="md:hidden p-2">
            <HamburgerMenuIcon />
          </div>
          <div className="md:flex gap-2 hidden">
            <div className="flex gap-4 p-2">
              <ButtonGrey title={"Home"} />
              <ButtonGrey title={"Blog"} />
              <ButtonGrey title={"Contact"} />
            </div>
            <div className="flex  bg-[var(--bg-gray)] items-center p-2 rounded-2xl">
              <input
                type="text"
                placeholder="Search"
                className="bg-[var(--bg-gray)]"
              />
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
