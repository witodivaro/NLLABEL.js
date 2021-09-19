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

import { getSlogans } from "./api/slogans";
import { getServices } from "./api/services";

function App({ services, slogans }) {
  console.log(slogans);
  return (
    <>
      <Header />
      <main>
        <Intro slogans={slogans} />
        <Info />
        <InfoSlider />
        <Services services={services} />
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

export const getServerSideProps = async () => {
  const operations = [];
  operations.push(getServices());
  operations.push(getSlogans());

  const [servicesRes, introsRes] = await Promise.all(operations);

  const { services = [] } = servicesRes?.data || {};
  const { slogans = [] } = introsRes?.data || {};

  return {
    props: {
      services,
      slogans,
    },
  };
};

export default App;
