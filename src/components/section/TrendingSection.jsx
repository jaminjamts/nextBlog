import { TrendingCard } from "../card/TrendingCard";

export const TrendingSection = () => {
  return (
    <main className="w-screen flex justify-center mx-7">
      <div className="container flex gap-1">
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </div>
    </main>
  );
};
