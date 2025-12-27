import {
  ContactHero,
  WhyContact,
  ContactForm,
} from '../components/contact'

export default function Contact() {
  return (
    <div className="page contact">
      <ContactHero />
      <WhyContact />
      <div data-contact-form>
        <ContactForm />
      </div>
    </div>
  )
}
