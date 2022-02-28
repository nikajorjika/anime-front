import Header from "./Header";
import Footer from "./Footer.js";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <section className="bg-gray-200">
      <div className="flex">
        <Sidebar />
        <main className="min-h-screen w-full bg-white">
          <Header />
          {children}
        </main>
      </div>
      <Footer />
    </section>
  );
}
