import { DateDetail, TrendTitleBlue } from "../accessories";

export const HeroSection = () => {
  return (
    <main className="flex w-screen h-[50vh] md:h-screen justify-center">
      <div className="container flex flex-col h-full md:h-4/5 md:w-2/3">
        <div className='relative h-full bg-right bg-cover bg-origin-border rounded-2xl m-5 md:px-10 bg-[url("/image.jpg")]'>
          <div className="absolute flex flex-col justify-between gap-4 bg-[var(--default)] w-1/2 rounded-xl bottom-2 left-2 p-4">
            <div className="flex">
              <TrendTitleBlue title={"technology"} />
            </div>
            <div>Lorem ipsum dolor sit amet. Lorem, ipsum.</div>
            <DateDetail DateDay={"August, 15 , 2015"} />
          </div>
        </div>
        <div className="flex justify-center">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>
    </main>
  );
};
