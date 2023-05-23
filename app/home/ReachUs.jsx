import AppointmentForm from "../components/AppointmentForm";
import ContactForm from "../components/ContactForm";

export default function ReachUs() {
  return (
    <>
      <section className="grid min-h-screen border-opacity-50 bg-primary text-primary-content ">
        <AppointmentForm />
        <div className="text-lg font-bold divider">OR</div>
        <ContactForm />
      </section>
    </>
  );
}
