import Image from "next/image";
import Banner from "./components/Banner/Banner";
import Category from "./components/Category";
import Product from "./components/Product/Product";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
   <>
   <Header/>
   <Banner /> 
    <Category/> 
    <Product/> 
    <Partner/> 
    <Footer/>
   </>
  );
}
