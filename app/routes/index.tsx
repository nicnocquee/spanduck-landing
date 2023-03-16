export const handle = { hydrate: false };

export default function Index() {
  return (
    <div className="flex flex-col justify-center h-screen p-4 px-8 space-y-6 sm:p-8 sm:space-y-8">
      <div
        className="flex flex-col items-center justify-center text-4xl antialiased font-extrabold tracking-wide text-transparent uppercase bg-center bg-cover bg-clip-text sm:text-7xl"
        style={{
          backgroundImage:
            "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
        }}
      >
        <h1 className="text-4xl font-extrabold md:text-9xl">
          Effortlessly generate beautiful social media image from a tweet or a
          webpage.
        </h1>
      </div>
      <a
        href="https://app.spanduck.hyperjump.tech/"
        className="relative self-start px-6 py-3 font-bold text-black group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
        <span className="relative">Try Spanduck FOR FREE!</span>
      </a>
    </div>
  );
}
