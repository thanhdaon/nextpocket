import "styles/globals.css";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>NextPocket</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
