'use server'

// Contact form action - placeholder for blank canvas
const action = async (_: { success: boolean; message: string } | null, formData: FormData) => {
  return { success: true, message: 'Form submission disabled - blank canvas mode' }
}

export default action