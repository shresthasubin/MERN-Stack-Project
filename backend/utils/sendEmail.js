import nodemailer from 'nodemailer'

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'shresthasubin938@gmail.com',
                pass: 'dwoz zodw soxt gorf'
            }
        })

        await transporter.sendMail({
            from:'shresthasubin938@gmail.com',
            to: email,
            subject: subject,
            text: text
        })
    } catch (err) {
        console.log(err)
    }
}

export {sendEmail}