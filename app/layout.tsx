import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Bias Detector — Fair Hiring for HR Teams',
  description: 'Detect unconscious bias patterns in video interviews. AI-powered transcription and bias detection for HR departments at mid-size companies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="18d869ce-9c90-43b1-9948-e29d922fccb0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
