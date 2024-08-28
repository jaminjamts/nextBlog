import { TrendingTextWhite, TrendTitleBlue } from "../accessories";

export const TrendingCard = () => {
  return (
    <main className="border rounded-xl h-fit w-1/5">
      <TrendTitleBlue title={"technology"} />
      <TrendingTextWhite
        document={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati consequatur ipsam dolore itaque eius?"
        }
      />
    </main>
  );
};
