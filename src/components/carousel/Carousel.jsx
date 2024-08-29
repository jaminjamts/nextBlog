import { BlueTitle, CreateAt } from "../accessories";

export const Carousel = () => {
  const data = [{ title: "dasdca", createAt: "2024.12.24", content: "" }];
  return (
    <main className="w-screen h-[50vh] flex justify-center">
      <div className="container h-full">
        <div className='bg-[url("/image.jpg")] h-full bg-cover rounded-2xl bg-right flex items-end p-2'>
          {data.map((item) => (
            <div className="bg-white flex flex-col h-1/2 w-1/2 rounded-2xl">
              <div className="flex justify-around py-4">
                <BlueTitle detailsTitle={item.title} />
                <CreateAt date={item.createAt} />
              </div>
              <div>{item.content}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 pt-2">
          <button className="border p-4 rounded-md">{"<"}</button>
          <button className="border p-4 rounded-md">{">"}</button>
        </div>
      </div>
    </main>
  );
};
