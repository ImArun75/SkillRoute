import cors from "cors"
import { ENV } from "./env.js"

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173", // Vite default
  "http://localhost:5174", // Vite alternate
  "http://localhost:5175", // Vite alternate
  "http://localhost:5176", // Vite alternate
  // Production frontend URLs
  process.env.FRONTEND_URL?.replace(/\/$/, ""), // Set this in Render environment variables
].filter(Boolean)

export const corsConfig = cors({
  origin: (origin, callback) => {
    // allow server-to-server or tools like Postman
    if (!origin) return callback(null, true)

    // Clean origin for comparison (remove trailing slash)
    const normalizedOrigin = origin.replace(/\/$/, "")

    // In production, allow the configured frontend URL
    // Also allow any origin ending with common deployment platforms
    if (
      allowedOrigins.includes(normalizedOrigin) ||
      normalizedOrigin.endsWith('.vercel.app') ||
      normalizedOrigin.endsWith('.netlify.app') ||
      normalizedOrigin.endsWith('.onrender.com') ||
      normalizedOrigin.endsWith('.localhost') ||
      normalizedOrigin.endsWith('.pages.dev')
    ) {
      callback(null, true)
    } else {
      console.log('CORS blocked origin:', normalizedOrigin)
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
})
