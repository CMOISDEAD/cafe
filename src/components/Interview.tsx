import ReactPlayer from "react-player";

export const Interview = ({ url }: { url: string }) => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-[#2d221b] snap-always snap-center h-screen">
      <img
        src="/images/cuts/abeja.png"
        alt="abeja"
        className="top-0 left-0 absolute w-20 md:w-96"
      />
      <ReactPlayer url={url} width="70%" height="70%" />
      <blockquote className="mt-4 font-serif text-center text-sm text-white md:text-xl italic">
        &quot;Mujeres Caficultoras de Calarca.&quot;
      </blockquote>
      <img
        src="/images/cuts/cafetera.png"
        alt="cafetera"
        className="right-0 bottom-0 absolute w-20 md:w-96"
      />
    </div>
  );
};
