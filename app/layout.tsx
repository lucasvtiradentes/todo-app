import "../styles/globals.css";
import Header from "../components/Header";

interface propsType {
  children: React.ReactNode;
}

export default function RootLayout({children}: propsType) {
  return (
    <html>
      <head>
        <title>Sonnys Website</title>
      </head>
      <body className="">
        <Header />
        <main className="px-6 py-2">{children}</main>
      </body>
    </html>
  );
}
