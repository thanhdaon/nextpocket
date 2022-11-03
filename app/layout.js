import Link from "next/link";
import "app/global.css";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>NextPocket</title>
      </head>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
