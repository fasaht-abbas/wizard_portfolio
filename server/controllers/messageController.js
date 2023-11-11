import nodemailer from "nodemailer";
export const handleMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    console.log(name, email, subject, message);
    if (!name || !email || !subject || !message) {
      return res.status(404).send({
        success: false,
        message: "all the fields are required",
      });
    }
    // creating a nodemailer transporter for sending the mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // mail options and the message to be sent
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: subject,
      text:
        ` ${name} sent you a new message,\n\n` +
        `${message}\n\n` +
        `email : ${email}\n\n` +
        `Best regards,\n`,
    };

    transporter.sendMail(mailOptions);
    return res.status(200).send({
      success: true,
      message: "Otp sent successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
