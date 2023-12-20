export const Footer = () => {

  return (
    <footer className="mt-16 w-full flex justify-center items-center flex-wrap">
      <div className="w-full px-8 py-4 flex justify-between items-start flex-wrap gap-4">
        <div>
          <img src="../assets/logo2.png" className="w-[75px] lg:w-[150px]"/>
          <p className="w-[200px] opacity-70 text-[12px]">
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-slate-700 text-2xl md:text-3xl font-bold">Information</h2>
          <p className="opacity-70 text-slate-400 text-[12px]">
            145 New York, FL 5467, USA
          </p>
          <div className="py-4 flex flex-row justify-center items-center gap-4">
            <p className="font-medium text-slate-700 text-[12px] md:text-[16px]">Property</p>
            <p className="font-medium text-slate-700 text-[12px] md:text-[16px]">Services</p>
            <p className="font-medium text-slate-700 text-[12px] md:text-[16px]">Product</p>
            <p className="font-medium text-slate-700 text-[12px] md:text-[16px]">About Us</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
