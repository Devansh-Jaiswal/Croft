import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder_key';

// Note: Contact form submission will not work without valid Supabase credentials
// Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const submitContactForm = async (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
