import Link from "next/link";

function RootLayout({ children }) {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/notes">Notes</Link>
      </nav>
      {children}
    </main>
  );
}

export default RootLayout;
