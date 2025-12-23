import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

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
