import { useState } from "react";
import { BlueTitle, CreateAt } from "../accessories";
import { MainContent } from "../accessories/MainContent";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      index: 0,
      url: "https://images.unsplash.com/photo-1569580388550-50907e7bad86?q=80&w=5148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "technology",
      createAt: "2024.12.24",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. OptioLorem ipsum dolor ",
    },
    {
      url: "https://images.unsplash.com/photo-1479888230021-c24f136d849f?q=80&w=5070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "technology",
      createAt: "2024.12.24",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. OptioLorem ipsum dolor ",
    },
    {
      url: "https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?q=80&w=5030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "technology",
      createAt: "2024.12.24",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. OptioLorem ipsum dolor ",
    },
    {
      url: "https://images.unsplash.com/photo-1569580388550-50907e7bad86?q=80&w=5148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "technology",
      createAt: "2024.12.24",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. OptioLorem ipsum dolor ",
    },
  ];

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
  };
  return (
    <main className="w-screen h-[50vh] flex justify-center">
      <div className="container h-full">
        {data.map((item) => (
          <div className="h-full w-full relative">
            <div
              className="h-full w-full"
              style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            >
              <img
                src={item.url}
                alt="main zurag"
                className="h-full w-full rounded-2xl "
              />
            </div>
            <div className="bg-white flex flex-col w-1/2 h-1/2 rounded-2xl absolute bottom-5 left-5 justify-center">
              <div className="flex justify-between px-14 py-4">
                <BlueTitle detailsTitle={item.title} />
                <CreateAt date={item.createAt} />
              </div>
              <div className="flex px-10">
                <MainContent content={item.content} />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-center gap-2 pt-2">
          <button className="border p-4 rounded-md pointer" onClick={prevSlide}>
            {"<"}
          </button>
          <button className="border p-4 rounded-md pointer" onClick={nextSlide}>
            {">"}
          </button>
        </div>
      </div>
    </main>
  );
};
