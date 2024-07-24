'use client'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import useActiveSectionView from '@/hooks/useActiveSectionView'
import sendEmail from '@/actions/sendEmail'
import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'

const ContactForm = () => {
    const { ref } = useActiveSectionView("Contact");
    const { pending } = useFormStatus();
    
    return (
    <motion.section
        className='mb-20 sm:mb-28 w-[min(100%, 38rem)] dark:text-primary-foreground'
        id='contact'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        ref={ref}
        viewport={{ once: true }}
    >
        <h2 className='text-3xl font-semibold tracking-tight lg:text-4xl mb-6 xl:mb-8 text-center capitalize'>
            Contact Me
        </h2>
        <p className='text-gray-700 text-center dark:text-gray-300'>
            Please contact me directly at <u> <a href='mailto:muhammadsaif713@gmail.com'>muhammadsaif713@gmail.com</a> </u> or through this form
        </p>

        <form
            className='flex flex-col mt-10 group'
            action={ async (formData) => {
                console.log('sending');
                const { data, error } = await sendEmail(formData)
                if (error) {
                    toast.error(error)
                    return;
                }
                toast.success('Message Sent!')
            }}
        >
            <input
                type='email'
                name='email'
                className='h-14 px-4 rounded-lg border border-black/10 dark:bg-primary'
                placeholder='Your email'
                required
                maxLength={500}
            />

            <textarea
                name='message'
                className='h-52 my-3 p-4 rounded-lg border border-black/10 dark:bg-primary'
                placeholder='Your message'
                required
                maxLength={800}
            />
            <Button type='submit' 
                className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none
                focus:scale-110 hover:scale-105 active:scale-100 transition-all disabled:scale-100 disabled:bg-opacity-65 dark:bg-secondary dark:text-slate-900'
                disabled={pending}
            >
                {pending ? (
                    <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                ) : (
                    <>Submit <FaPaperPlane size={18} className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' /> </>
                )}
            
            </Button>
            

        </form>
    </motion.section>
  )
}

export default ContactForm