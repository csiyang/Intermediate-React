import Link from "next/link";
import "doodle.css/doodle.css";
import "./globals.css";

export const metadata = {
  title: "Notes Passer",
  description: "Example app for Frontend Masters",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="doodle">
        <nav>
          <h1>
            <Link href="/">Notes Passer</Link>
          </h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
