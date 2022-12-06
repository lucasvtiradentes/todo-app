import Link from "next/link";

const Header = () => {
  return (
    <header className="p-5 text-center gap-2 bg-blue-500">
      <Link href="/" className="mx-1 px-2 py-1 bg-white text-blue-500">
        Todo app
      </Link>
      <Link href="/search" className="mx-1 px-2 py-1 bg-white text-blue-500">
        Dictionary
      </Link>
    </header>
  );
};

export default Header;
