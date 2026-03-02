# 🦷 DentIQ

An intelligent, modern, and comprehensive dental clinic management platform built with Next.js. DentIQ streamlines appointment scheduling, patient management, and communication, featuring an innovative AI voice assistant for seamless booking experiences.

## ✨ Key Features

- **🤖 AI Voice Assistant:** Groundbreaking voice-activated appointment scheduling using Vapi AI.
- **📅 Smart Appointments:** Effortless booking system with beautiful calendars and real-time availability.
- **📊 Comprehensive Dashboards:** Dedicated portals for both patients and administrators to track appointments and history.
- **✉️ Automated Communications:** Beautiful email confirmations and reminders powered by Resend and React Email.
- **🔐 Secure Authentication:** Robust user authentication and authorization handled by Clerk.
- **🎨 Modern UI/UX:** Responsive, accessible, and stunning interface built with Tailwind CSS v4 and modern UI components.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) & React 19
- **Database:** Prisma ORM
- **Authentication:** Clerk
- **Styling:** Tailwind CSS v4, Radix UI
- **Emails:** Resend & React Email
- **AI Integration:** Vapi AI
- **Forms & Validation:** React Hook Form & Zod
- **Icons & Visualization:** Lucide React & Recharts

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v20+) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/DentIQ.git
   cd DentIQ
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or yarn install, pnpm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory and add the necessary environment variables:
   ```env
   # Database
   DATABASE_URL=

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   # Resend Emails
   RESEND_API_KEY=

   # Vapi AI
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=
   ```

4. **Database Setup**
   Run Prisma database push to sync the schema:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── app/               # Next.js App Router pages and layouts
│   ├── admin/         # Admin dashboard and controls
│   ├── api/           # API routes for emails and internal endpoints
│   ├── appointments/  # Appointment booking flow
│   ├── dashboard/     # Patient dashboard
│   └── voice/         # AI Voice assistant integration
├── components/        # Reusable React components
├── lib/               # Utility functions and shared logic
├── prisma/            # Database schema and migrations
└── public/            # Static assets
```

## 📄 License

This project is licensed under the MIT License.
