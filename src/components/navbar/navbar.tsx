import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-400 p-4 sticky top-0">
      <div className="w-auto md:w-[768px] mx-auto">
        <Link href="/" className="font-bold">
          Arjay Marquez
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
