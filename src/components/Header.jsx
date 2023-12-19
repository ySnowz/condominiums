export const Header = () => {
  return (
    <header className="w-full flex items-center justify-center p-5 bg-gray-900">
      <nav className="w-full flex justify-between lg:justify-around items-center">
        <img src="./logo.png" alt="logo" width={100} />
        <button className="block lg:hidden text-4xl font-thin text-white">=</button>
        <ul className="hidden lg:flex gap-4 text-white">
          <li className="opacity-75 hover:opacity-100 hover:text-orange-300 duration-100 ease-linear">
            <a href="#">Residencies</a>
          </li>
          <li className="opacity-75 hover:opacity-100 hover:text-orange-300 duration-100 ease-linear">
            <a href="#">Our Value</a>
          </li>
          <li className="opacity-75 hover:opacity-100 hover:text-orange-300 duration-100 ease-linear">
            <a href="#">Get Started</a>
          </li>
          <li className="hover:scale-105 duration-75 ease-linear">
            <a href="#" className="py-2 px-4 bg-gradient-to-l from-blue-600 to-blue-500 rounded-sm uppercase font-bold">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
