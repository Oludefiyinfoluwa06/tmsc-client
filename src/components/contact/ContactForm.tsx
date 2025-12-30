import { useState } from 'react'
import { CheckCircle, MessageCircle } from 'lucide-react'
import { sendWhatsAppMessage, craftContactMessage } from '../../utils/whatsapp'


export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.fullName || !formData.phone || !formData.message) {
      alert('Please fill in Name, Phone, and Message fields')
      return
    }

    const whatsappMessage = craftContactMessage(
      formData.fullName,
      formData.company,
      formData.email,
      formData.phone,
      formData.message
    )

    sendWhatsAppMessage({
      message: whatsappMessage
    })
    setSubmitted(true);
  }

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Contact out Team
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          We'll get back to you within 24 hours
        </p>

        {/* Contact Form */}
        {!submitted && (
          <form className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="+234 812 345 6789"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                placeholder="Tell us more about your needs..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleSendViaWhatsApp}
                type="button"
                className="px-8 py-3 bg-linear-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-600 transition-all flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4" />
                Submit
              </button>
            </div>

            <p className="text-gray-500 text-xs mt-4">
              * Required fields. We respect your privacy and will only contact you regarding your inquiry.
            </p>
          </form>
        )}

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-300 mb-2">Thank You!</h3>
            <p className="text-green-200">
              Your message has been received. Our team will get back to you within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
