// EmailJS Service - Handles email sending for contact and schedule forms
import emailjs from '@emailjs/browser';
import { siteConfig } from '@/config/site';

// Initialize EmailJS with public key
if (siteConfig.emailJS.publicKey) {
  emailjs.init(siteConfig.emailJS.publicKey);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ScheduleFormData {
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  unitType?: string;
}

/**
 * Send contact form email
 */
export const sendContactEmail = async (data: ContactFormData): Promise<void> => {
  const { serviceId, templateIds } = siteConfig.emailJS;

  // If EmailJS is not configured, log to console and simulate success
  if (!serviceId || !templateIds.contact) {
    console.log('EmailJS not configured. Form data:', data);
    console.log('To enable email sending:');
    console.log('1. Sign up at https://www.emailjs.com/');
    console.log('2. Create a service and email templates');
    console.log('3. Add credentials to your .env file');
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  }

  try {
    await emailjs.send(
      serviceId,
      templateIds.contact,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        message: data.message,
        to_email: siteConfig.contact.email,
      }
    );
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw new Error('Failed to send message. Please try again later.');
  }
};

/**
 * Send schedule tour email
 */
export const sendScheduleEmail = async (data: ScheduleFormData): Promise<void> => {
  const { serviceId, templateIds } = siteConfig.emailJS;

  // If EmailJS is not configured, log to console and simulate success
  if (!serviceId || !templateIds.schedule) {
    console.log('EmailJS not configured. Appointment data:', data);
    console.log('To enable email sending:');
    console.log('1. Sign up at https://www.emailjs.com/');
    console.log('2. Create a service and email templates');
    console.log('3. Add credentials to your .env file');
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  }

  try {
    await emailjs.send(
      serviceId,
      templateIds.schedule,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        tour_date: data.date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        tour_time: data.time,
        unit_type: data.unitType || 'No preference',
        to_email: siteConfig.contact.email,
      }
    );
  } catch (error) {
    console.error('Failed to send schedule email:', error);
    throw new Error('Failed to schedule tour. Please try again later.');
  }
};

/**
 * Check if EmailJS is properly configured
 */
export const isEmailConfigured = (): boolean => {
  const { serviceId, templateIds, publicKey } = siteConfig.emailJS;
  return !!(serviceId && publicKey && (templateIds.contact || templateIds.schedule));
};

