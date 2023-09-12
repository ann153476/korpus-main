// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import AboutUs from './MainPage/AboutUs/AboutUs';
import Hero from './MainPage/Hero/Hero';
import Advantages from './MainPage/Advantages/Advantages';
import Feedbacks from './MainPage/Feedbacks/Feedbacks';
// import Promotions from './components/Promotions/Promotions';
// import ContactForm from './components/ContactForm/ContactForm';
import Portfolio from './MainPage/Portfolio/Portfolio';
import FooterImage from './MainPage/FooterImage/FooterImage';
// import NotFaund from './NotFoundPage/NotFound';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Advantages />
      <Portfolio />
      <Feedbacks />
      <FooterImage />
    </main>
  );
}
