'use server'
import { validateString, getErrorMessage } from "@/lib/utils";
import { error } from "console";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
    const sender = formData.get('email')
    const message = formData.get('message')

    // server side validation
    if (!validateString(sender, 500)) {
        return { error: "Invalid Email" }
    }
    if (!validateString(message, 5000)) {
        return { error: "Invalid Message" }
    }

    const senderString = sender as string
    const messageString = message as string

    try {
        const { data, error } = await resend.emails.send({
        from: 'Message from Portfolio <onboarding@resend.com>',
        to: 'muhammadsaif713@gmail.com',
        subject: 'Message from portfolio contact form',
        reply_to: senderString,
        react: EmailTemplate({sender: senderString, message: messageString}),
        });

        if (error) {
            return { 
                error: getErrorMessage(error),
                status: 400
            }
        }

        return {
            data,
            status: 200
        }

    } catch (error) {
        console.error(error);
        return {
            error: 'Internal Server Error',
            status: 500
        }
    }





}

export default sendEmail