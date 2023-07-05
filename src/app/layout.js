import "./globals.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Online Account Opening Portal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
