import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import { sendWhatsAppMessage } from '../../utils/whatsapp'


export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '', // optional
    intendedUse: '',
    location: '',
    description: '',
    email: '',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()

    // basic validation: require name, intended use, location, description, and at least one contact
    if (!formData.fullName || !formData.intendedUse || !formData.location || !formData.description) {
      alert('Please complete Full Name, Intended use, Location, and Brief description.')
      return
    }

    if (!formData.email && !formData.phone) {
      alert('Please provide at least an Email Address or Phone Number.')
      return
    }

    const whatsappMessage = `Enquiry from website:\n\nFull Name: ${formData.fullName}\nOrganisation / Company: ${formData.company || 'N/A'}\nIntended use: ${formData.intendedUse}\nLocation: ${formData.location}\n\nBrief description:\n${formData.description}\n\nContact details:\nEmail: ${formData.email || 'N/A'}\nPhone: ${formData.phone || 'N/A'}`

    // show success message first, then open WhatsApp after at least 1 second
    setSubmitted(true)
    setTimeout(() => {
      sendWhatsAppMessage({ message: whatsappMessage })
    }, 1000)
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Centre Use & Deployment Enquiry
          </h2>

          {/* Contact Form */}
          {!submitted && (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Full Name"
                  />
                </div>

                {/* Organisation / Company (optional) */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Organisation / Company <span className="text-gray-500">(optional)</span></label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Organisation / Company"
                  />
                </div>

                {/* Intended use dropdown */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Intended use of a Machine & Skills centre <span className="text-red-600">*</span></label>
                  <select
                    name="intendedUse"
                    value={formData.intendedUse}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="Production work and skills use">Production work and skills use</option>
                    <option value="Training linked to real production">Training linked to real production</option>
                    <option value="Institutional or government deployment">Institutional or government deployment</option>
                    <option value="Exploring centre sponsorship or partnership">Exploring centre sponsorship or partnership</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Location <span className="text-red-600">*</span></label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="City / State"
                  />
                </div>
              </div>

              {/* Brief description */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Brief description <span className="text-red-600">*</span></label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none"
                  placeholder="In a few sentences, describe what you want to do."
                />
              </div>

              {/* Contact details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Email Address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <p className="text-gray-600 text-sm">
                <span className="text-red-600">*</span> Required fields. We respect your privacy and will only contact you regarding your enquiry.
              </p>

              {/* Submit Button */}
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={handleSendViaWhatsApp}
                  type="button"
                  className="px-8 py-3 bg-linear-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          )}

          {/* Success Message */}
          {submitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
              <p className="text-green-800 mb-4">
                Thank you. We will review your enquiry and respond with the appropriate next step.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
