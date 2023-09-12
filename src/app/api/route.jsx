import { NextResponse } from 'next/server'
 
export async function POST(req) {
  const res = await request.json()
  return NextResponse.json({ res })
}



// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, phone, message } = req.body;
  
//     if (!phone || !name || name.trim() === '') {
//       res.status(422).json({ message: 'Невірно вказані дані' });
//       return;
//     }
//     res.status(200).json({ message: 'Дякуємо' });
//     const newMessage = { name, phone, message };
//     console.log(newMessage);
//   }
// }




// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   const { name, phone, message } = req.body;


//   const transporter = nodemailer.createTransport({
//     host: 'your-smtp-host',
//     port: 587,
//     auth: {
//       user: 'your-email@example.com', //змінити на справжню адресу
//       pass: 'your-email-password', // змінити на справжній пароль
//     },
//   });

 
//   const emailContent = `
//     Name: ${name}
//     Phone: ${phone}
//     Message: ${message}
//   `;

//   try {
 
//     await transporter.sendMail({
//       from: 'your-email@example.com',
//       to: 'owner-email@example.com', //змінити на справжню адресу
//       subject: 'New Form Submission',
//       text: emailContent,
//     });

//     res.status(200).json({ message: 'Form submitted successfully!' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error submitting the form.' });
//   }
// }