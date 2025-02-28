export default function Hero() {
  return (
    <>
      <div className="relative w-full h-[350px]">
        <img
          src="https://source.unsplash.com/1000x500/?food,restaurant"
          alt="Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold">ORDER YOUR MEAL IN SECONDS!</h1>
        </div>
      </div>
    </>
  );
}
