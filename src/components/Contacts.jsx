import { MdCall } from "react-icons/md";

export const Contacts = () => {
  return (
    <section className="w-full mt-16 px-8 py-4 flex flex-col justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-8">
        <div className="flex flex-col items-start justify-center">
          {/* texts */}
          <div>
            <h2 className="text-2xl text-orange-400 font-medium tracking-wide">
              Our Contact
            </h2>
            <h1 className="text-4xl text-slate-700 font-bold tracking-wide">
              Easy to contact us
            </h1>
            <p className="opacity-70 text-slate-600 text-[12px] w-[400px] font-medium">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
          </div>
          <div className="mt-4 w-[500px] flex flex-row flex-wrap justify-start items-center gap-4">
            {/* boxs */}
            <div className="drop-shadow-sm bg-gray-50 border border-slate-200 p-4 rounded">
              {/* header */}
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="p-2 rounded-sm bg-gray-100 flex items-center justify-center drop-shadow-sm">
                  <MdCall size={25} className="text-blue-500 font-medium" />
                </div>
                <div>
                  <h2 className="font-medium text-slate-700">Call</h2>
                  <p className="opacity-70 text-slate-600 text-sm font-medium">
                    021 123 145 14
                  </p>
                </div>
              </div>
              {/* call action */}
              <div className="mt-4">
                <button className="uppercase text-center w-full px-4 py-2 bg-gradient-to-l from-blue-600 to-blue-500 rounded text-white font-bold hover:drop-shadow-sm hover:scale-105 duration-100 ease-linear">
                  Call now
                </button>
              </div>
            </div>
            <div className="drop-shadow-sm bg-gray-50 border border-slate-200 p-4 rounded">
              {/* header */}
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="p-2 rounded-sm bg-gray-100 flex items-center justify-center drop-shadow-sm">
                  <MdCall size={25} className="text-blue-500 font-medium" />
                </div>
                <div>
                  <h2 className="font-medium text-slate-700">Call</h2>
                  <p className="opacity-70 text-slate-600 text-sm font-medium">
                    021 123 145 14
                  </p>
                </div>
              </div>
              {/* call action */}
              <div className="mt-4">
                <button className="uppercase text-center w-full px-4 py-2 bg-gradient-to-l from-blue-600 to-blue-500 rounded text-white font-bold hover:drop-shadow-sm hover:scale-105 duration-100 ease-linear">
                  Call now
                </button>
              </div>
            </div>
            <div className="drop-shadow-sm bg-gray-50 border border-slate-200 p-4 rounded">
              {/* header */}
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="p-2 rounded-sm bg-gray-100 flex items-center justify-center drop-shadow-sm">
                  <MdCall size={25} className="text-blue-500 font-medium" />
                </div>
                <div>
                  <h2 className="font-medium text-slate-700">Call</h2>
                  <p className="opacity-70 text-slate-600 text-sm font-medium">
                    021 123 145 14
                  </p>
                </div>
              </div>
              {/* call action */}
              <div className="mt-4">
                <button className="uppercase text-center w-full px-4 py-2 bg-gradient-to-l from-blue-600 to-blue-500 rounded text-white font-bold hover:drop-shadow-sm hover:scale-105 duration-100 ease-linear">
                  Call now
                </button>
              </div>
            </div>
            <div className="drop-shadow-sm bg-gray-50 border border-slate-200 p-4 rounded">
              {/* header */}
              <div className="flex flex-row items-center justify-center gap-4">
                <div className="p-2 rounded-sm bg-gray-100 flex items-center justify-center drop-shadow-sm">
                <MdCall size={25} className="text-blue-500 font-medium"/>
                </div>
                <div>
                  <h2 className="font-medium text-slate-700">Call</h2>
                  <p className="opacity-70 text-slate-600 text-sm font-medium">
                    021 123 145 14
                  </p>
                </div>
              </div>
              {/* call action */}
              <div className="mt-4">
                <button className="uppercase text-center w-full px-4 py-2 bg-gradient-to-l from-blue-600 to-blue-500 rounded text-white font-bold hover:drop-shadow-sm hover:scale-105 duration-100 ease-linear">
                  Call now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="../src/assets/contact.jpg"
            alt=""
            className="sm:hidden lg:block lg:w-[350px] lg:h-[460px] rounded border border-orange-400"
          />
        </div>
      </div>
    </section>
  );
};
