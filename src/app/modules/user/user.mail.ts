import nodemailer from 'nodemailer'; 

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "shakidul31@gmail.com",
      pass: "dnpppgdjswhmzdyl",
    },
  });

export const sendEmail = async (to: string, subject: string, msg: string) => {
    await transporter.sendMail({
        to: to,
        subject: subject,
        html: msg
      });
}