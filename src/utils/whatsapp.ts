/**
 * WhatsApp Message Utility
 * Generates WhatsApp messages and opens WhatsApp Web/App with pre-filled messages
 */

export interface WhatsAppMessageConfig {
  phone?: string
  message: string
}

// Default company WhatsApp number (with country code, no + symbol)
const DEFAULT_PHONE = '2349030215252' // South Africa format

/**
 * Send a message via WhatsApp
 * Opens WhatsApp Web with pre-filled message if phone number is not specified
 * Otherwise opens WhatsApp Web with the specified phone number and message
 */
export const sendWhatsAppMessage = (config: WhatsAppMessageConfig) => {
  const { phone = DEFAULT_PHONE, message } = config
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message)
  
  // Open WhatsApp Web with pre-filled message
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}

/**
 * Craft a product inquiry message
 */
export const craftProductMessage = (productName: string, additionalInfo?: string): string => {
  const baseMessage = `Hi, I'm interested in ${productName}.`
  
  if (additionalInfo) {
    return `${baseMessage}\n\nDetails:\n${additionalInfo}`
  }
  
  return `${baseMessage}\n\nCould you please provide more information and pricing?`
}

/**
 * Craft a general contact message
 */
export const craftContactMessage = (name: string, company: string, email: string, phone: string, message: string): string => {
  return `Hello,\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
}

/**
 * Craft a service inquiry message
 */
export const craftServiceMessage = (serviceName: string, description: string): string => {
  return `Hi, I'm interested in ${serviceName}.\n\n${description}\n\nCould you please provide more details?`
}
