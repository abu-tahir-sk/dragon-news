import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNavbar from "../components/Leftcomponent/RightNavbar";
import Newsdetail from "../components/Newsdetail";
import Navbar from "../components/Navbar";

const NesDetails = () => {
      const data = useLoaderData()
      const news = data.data[0]
      
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <nav className="w-11/12 py-6 mx-auto">
            <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-3">Dragon News</h2>
          <Newsdetail news={news}></Newsdetail>
        </section>
        <aside className="col-span-3">
            <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default NesDetails;
