'use client'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A] text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D1A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">✦</span>
            <span className="font-bold text-xl">Saathi</span>
          </Link>
          <Link href="/chat" className="bg-[#7C3AED] text-white font-semibold px-5 py-2 rounded-full text-sm">
            Start Chatting
          </Link>
        </div>
      </nav>
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 2026</p>
        <div className="space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Educational Purpose Only</h2>
            <p>Saathi is for educational purposes only and does not replace teachers.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Accuracy Disclaimer</h2>
            <p>AI answers may not always be 100% accurate. Always verify with your teacher.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Contact</h2>
            <p>Email: <span className="text-[#A78BFA]">salmankhurshid13@gmail.com</span></p>
          </section>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex gap-6 text-sm text-white/30">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </main>
  )
}
