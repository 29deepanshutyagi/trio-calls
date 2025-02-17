import nodemailer, { SendMailOptions, SentMessageInfo } from "nodemailer";
import chalk from "chalk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

interface NodemailerError extends Error {
  code?: string;
  command?: string;
}

export const sendMail = async (
  options: SendMailOptions = {}
): Promise<SentMessageInfo> => {
  try {
    // Log environment variables for debugging
    console.log(`Username: ${process.env.EMAIL_USERNAME}`);
    console.log(`Password: ${process.env.EMAIL_PASSWORD}`);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    console.log(chalk.blue(`Sending email to: ${options.to}`));

    const info = await transporter.sendMail({
      ...options,
      from: `"Trio Calls" <${process.env.EMAIL_USERNAME}>`,
    });

    console.log(chalk.green(`Email sent successfully: ${info.messageId}`));
    return info;
  } catch (error: unknown) {
    const mailerError = error as NodemailerError;
    console.error(chalk.red(`Email error: ${mailerError.message}`));
    if (mailerError.code) {
      console.error(chalk.red(`Error code: ${mailerError.code}`));
    }
    if (mailerError.command) {
      console.error(chalk.red(`Command: ${mailerError.command}`));
    }
    throw error;
  }
};
