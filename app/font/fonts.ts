import { Montserrat, Poppins } from "next/font/google";

// Load the Poppins font
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins",          // Use a CSS variable for Tailwind integration
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-montserrat",       // Use a CSS variable for Tailwind integration
});