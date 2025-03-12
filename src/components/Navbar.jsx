import Link from "next/link";

const Navbar = () => {
  return (
    <div className="xl:max-w-[1200px] bg-[#451f89] mx-auto py-5">
      <div className="flex justify-between items-center xl:max-w-[1000px] mx-auto">
        <Link
        href={'/'}
        >
          <div>
            <h1 className="text-4xl bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent font-extrabold">
              Pskykick.club
            </h1>
          </div>
        </Link>

        <div>
          <nav className="text-white">
            <ul className="flex space-x-10">
                <li>
                    <Link href="/">
                        <h1 className="hover:text-yellow-500">Home</h1>
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <h1 className="hover:text-yellow-500">About us</h1>
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <h1 className="hover:text-yellow-500">Challanges</h1>
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <h1 className="hover:text-yellow-500">FAQ</h1>
                    </Link>
                </li>

                <li>
                    <Link href="/">
                        <h1 className="hover:text-yellow-500">Contact</h1>
                    </Link>
                </li>
            </ul>
          </nav>
        </div>

        <div>
            <button className="bg-yellow-500 px-5 py-2 rounded-lg hover:bg-yellow-600">Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
