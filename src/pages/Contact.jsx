import Header from "../component/Header";
import Footer from "../component/Footer";
import ContactBanner from "../page-elements/Contact-elements/ContactBanner";
import ContactInfo from "../page-elements/Contact-elements/ContactInfo";
import ContactMapForm from "../page-elements/Contact-elements/ContactMapForm";
import OutlineHeading from "../page-elements/Home-elements/OutlineHeading";

const Contact = () => {
  return (
    <>
      <Header />
      <ContactBanner />
      <ContactInfo />
      <ContactMapForm />
      <OutlineHeading />
      <Footer />
    </>
  );
};

export default Contact;
