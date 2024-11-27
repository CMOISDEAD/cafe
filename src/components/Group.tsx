import { Circle, Coffee } from "lucide-react";
import { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface Props {
  data: { images: string[]; descriptions: string[]; quote: string; by: string };
}

export const Group = ({ data }: Props) => {
  const { images, descriptions, quote, by } = data;
  const [selected, setSelected] = useState<number>(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % descriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex md:flex-row flex-col items-center gap-4 bg-[#17140d] p-5 snap-always snap-center h-screen min-h-screen">
      <div className="gap-4 grid md:grid-cols-3 grid-rows-1 md:grid-rows-4 grid-flow-col md:w-3/5 overflow-x-auto">
        <PhotoProvider>
          {images.map((url, i) => (
            <PhotoView key={i} src={url}>
              <img
                src={url}
                alt="cafe 1"
                className="bg-cover rounded-lg w-48 md:w-80 min-w-48 h-48 md:h-56 transform transition-transform cursor-pointer hover:scale-105"
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
      <div className="flex flex-col flex-1 justify-evenly md:justify-between md:p-10 md:w-2/5 h-full">
        <blockquote className="mb-4 font-serif text-lg md:text-2xl italic">
          "{quote}"<span className="block text-right mt-2">- {by}</span>
        </blockquote>
        <div className="relative bg-[#2d221b] p-5 rounded-lg">
          <p className="text-sm md:text-3xl">{descriptions[selected]}</p>
          <div className="right-0 -bottom-7 left-0 absolute flex gap-4 bg-[#343f1e] m-auto px-2 py-3 rounded-lg w-fit">
            {descriptions.map((_, i) =>
              selected === i ? (
                <Coffee
                  key={i}
                  size={20}
                  className="w-2 md:w-4 h-2 md:h-4 text-amber-950 cursor-pointer"
                  onClick={() => handleSelect(i)}
                />
              ) : (
                <Circle
                  key={i}
                  size={20}
                  className="w-2 md:w-4 h-2 md:h-4 text-white cursor-pointer"
                  onClick={() => handleSelect(i)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
