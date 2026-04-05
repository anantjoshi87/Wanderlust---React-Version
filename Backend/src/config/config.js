import dotenv from "dotenv";
dotenv.config({ quiet: true });

const requiredEnvVars = [
  "MONGO_URI",
  "PORT",
  "JWT_SECRET",
  "RESEND_API_KEY",
  "NODE_ENV",
  "IMAGEKIT_PRIVATE_KEY",
  "IMAGEKIT_PUBLIC_KEY",
  "IMAGEKIT_URL_ENDPOINT",
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`${key} is not defined in environmental variables`);
  }
});

const config = Object.fromEntries(
  requiredEnvVars.map((key) => [key, process.env[key]]),
);

export default config;
