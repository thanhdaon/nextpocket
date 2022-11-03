import "styles/globals.css";

function RootLayout({ children }) {
  return <div className="grid min-h-screen grid-cols-2">{children}</div>;
}

export default RootLayout;
