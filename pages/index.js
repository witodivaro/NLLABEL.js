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
import Head from "../components/Head/Head";
import { getTeam } from "./api/team";

function App({ services, slogans, team }) {
  return (
    <>
      <Head />
      <Header />
      <main>
        <Intro slogans={slogans} />
        <Info />
        <InfoSlider />
        <Services services={services} />
        <Doubts />
        <Team team={team} />
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
  operations.push(getTeam());

  let services = [];
  let team = [];
  let slogans = [{ text: "NL Label" }];

  try {
    const [servicesRes, slogansRes, teamRes] = await Promise.all(operations);
  
    if (servicesRes.data?.services) {
      services = servicesRes.data.services;
    }

    if (slogansRes.data?.slogans?.length) {
      slogans = slogansRes.data.slogans;
    }

    if (teamRes.data) {
      team = teamRes.data.team;
    }
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      services,
      slogans: slogans.map(({ text }) => text),
      team
    },
  };
};

export default App;
