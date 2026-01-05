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
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Send us a Message
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>

          {/* Contact Form */}
          {!submitted && (
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="+234 812 345 6789"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <p className="text-gray-600 text-sm">
                <span className="text-red-600">*</span> Required fields. We respect your privacy and will only contact you regarding your inquiry.
              </p>

              {/* Submit Button */}
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={handleSendViaWhatsApp}
                  type="button"
                  className="px-8 py-3 bg-linear-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Send Message
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
                Your message has been received. Our team will get back to you within 24 hours.
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
