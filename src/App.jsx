import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import ComingSoon from "./components/ComingSoon";
import Music from "./components/MusicPlayer/Music";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import LibraryWindow from "./components/MusicPlayer/LibraryWindow";

const App = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* <title>Rob-O-Cop.com</title>
        <meta
          name="description"
          content="Rob-O-Cop: Serving Robotic Justice!"
        />
        <meta
          name="keywords"
          content="rob-o-cop robocop robocop.com rob-o-cop.com"
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:description"
          content="Rob-O-Cop: Serving Robotic Justice!"
        />
        <meta name="og:url" content="https://www.rob-o-cop.com" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Rob-O-Cop" />
        <meta
          name="twitter:description"
          content="Rob-O-Cop: Serving Robotic Justice!"
        />
        <meta
          name="twitter:image"
          content="https://www.rob-o-cop.com/logo.png"
        /> */}
      </Helmet>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Features />
        <Services />
        <ComingSoon />
        <Music />
        <Contact />
        <Footer />
      </div>
      <ButtonGradient />
    </HelmetProvider>
  );
};

export default App;
