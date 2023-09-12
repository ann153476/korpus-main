import nodemailer from 'nodemailer';

export async function sendEmail({ name, phone, message }) {
  const config = {
    host: 'smtp.meta.ua',
    port: 465,
    secure: true,
    auth: {
      //   user: process.env.METAEMAIL,
      //   pass: process.env.METAPASS,
      user: 'invizibji@meta.ua',
      pass: 'Test123',
    },
  };

  const transporter = nodemailer.createTransport(config);

  try {
    let info = await transporter.sendMail({
      from: 'invizibji@meta.ua', //пошта для відправки
      to: 'testemail@email.com', //пошта для прийому листів замовником
      subject: name,
      html: `
        <p>Ім'я замовника: <b>${name}</b><p>
        <p>Номер телефону: <b>${phone}</b><p>
        <p>Коментар: <b>${message}</b><p>
      `,
    });

    // console.log(`INFO`, info);
  } catch (error) {
    console.log(error);
    return error;
  }
}
