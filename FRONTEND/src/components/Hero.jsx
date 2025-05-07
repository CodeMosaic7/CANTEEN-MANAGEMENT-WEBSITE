export default function Hero() {
  return (
    <>
      <div className=" relative w-full h-[65%]">
        <img
          src="../../public/hero.jpg"
          alt="Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end justify-left text-white p-10">
          <h1 className="text-5xl font-bold text-white">
            ORDER YOUR MEAL IN SECONDS!
          </h1>
        </div>
      </div>
    </>
  );
}
