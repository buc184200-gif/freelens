# Freelance Video Editor Platform

Full-stack Next.js 14 website for a freelance video editor with:

- Cinematic dark portfolio UI with Framer Motion animations
- Hero, About, Services, Portfolio, Testimonials, Contact, Footer
- Role-based dashboard (`admin` + `client`)
- NextAuth credentials login
- MongoDB models for users, projects, and messages
- API routes for projects, messages, contact email, and cloud upload signature

## Stack

- Next.js 14 App Router + Tailwind CSS + Framer Motion
- MongoDB + Mongoose
- NextAuth.js (credentials)
- Cloudinary signed upload support
- Nodemailer notifications

## Setup

1. Copy `.env.example` to `.env` and fill values.
2. Install dependencies:
   - `npm install`
3. Run:
   - `npm run dev`
4. Open `http://localhost:3000`.

## Auth Roles

- `admin`: update project status and manage all projects.
- `client`: view own projects, delivery links, invoice status, and chat.

## Important Notes

- Chat API is fully implemented and dashboard refreshes message thread after send.
- For true websocket realtime transport, add a dedicated Socket.io server process and connect it to the same message schema.
