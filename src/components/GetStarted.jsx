export const GetStarted = () => {
  return (
    <section className="flex justify-center items-center px-8 py-4">
      <div className="w-full bg-blue-500 border border-blue-600 rounded drop-shadow-sm p-8 flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white font-bold text-sm md:text-4xl tracking-wide capitalize">Get started with Homyz</h1>
        <p className="text-blue-300 text-[10px] md:text-[16px] opacity-80 text-center">
          Subscribe and find super attractive price quotes from us. <br /> Find your
          residence soon
        </p>
        <button className="text-gray-100 uppercase font-bold bg-blue-400 border border-gray-100 px-4 py-2 rounded-sm"><a href="mailto:loserss@outlook.pt">Get Started</a></button>
      </div>
    </section>
  );
};
