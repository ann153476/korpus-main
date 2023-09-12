import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/sendEmail';

export const POST = async req => {
  try {
    const data = await req.json();
    const resp = await sendEmail(data);
    console.log(`here it`, resp);

    return new NextResponse(JSON.stringify({ status: true }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ status: false }), { status: 500 });
  }
};
