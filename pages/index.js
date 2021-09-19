import Contacts from "../components/Contacts/Contacts";
import ContactUs from "../components/ContactUs/ContactUs";
import Doubts from "../components/Doubts/Doubts";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Info from "../components/Info/Info";
import InfoSlider from "../components/InfoSlider/InfoSlider";
import Intro from "../components/Intro/Intro";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import Services from "../components/Services/Services";
import Team from "../components/Team/Team";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Info />
        <InfoSlider />
        <Services />
        <Doubts />
        <Team />
        <ContactUs />
        <Contacts />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
