import Image from 'next/image';

export function Header() {
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <Image
              src="trash.svg"
              className="mr-3 h-6 sm:h-9"
              width="100"
              height="100"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white hover:bg-gray-50 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
            >
              Log in
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
