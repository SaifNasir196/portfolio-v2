import { NextRequest, NextResponse } from 'next/server';
import { validateString } from '@/lib/utils';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const sender = formData.get('email') as string;
  const message = formData.get('message') as string;

  // Server-side validation
  if (!validateString(sender, 500)) {
    return NextResponse.json({ error: 'Invalid Email' }, { status: 400 });
  }
  if (!validateString(message, 5000)) {
    return NextResponse.json({ error: 'Invalid Message' }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Message from Portfolio <onboarding@resend.dev>',
      to: 'muhammadsaif713@gmail.com',
      subject: 'Message from portfolio contact form',
      reply_to: sender,
      react: EmailTemplate({ sender, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}