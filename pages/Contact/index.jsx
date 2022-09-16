import LayoutDefault from "../../layouts/LayoutDefault";
import Contacts from "./Contacts";

function Contact() {
  return (
    <LayoutDefault other={true} name="Contact Us">
      <Contacts />
    </LayoutDefault>
  );
}

export default Contact;
