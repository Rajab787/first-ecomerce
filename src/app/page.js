import Banner from "./components/Banner/Banner";
import Category from "./components/Category";
import Product from "./product/Product";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Faqs from "./components/Faqs";
import Testimonial from "./components/testimonials/Testimonial"


export default function Home() {
  return (
   <>
   <Header/>
   <Banner /> 
    <Category/> 
    <Product/> 
    <Faqs />
    <Testimonial/>
    <Partner/> 
    <Footer/>
   </>
  );
}
