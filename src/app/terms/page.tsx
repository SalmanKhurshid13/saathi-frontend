'use client'
import Link from 'next/link'
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 2026</p>
        <div className="space-y-8 text-white/70">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Educational Purpose Only</h2>
            <p>Saathi is for educational purposes only and does not replace teachers or textbooks.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Accuracy Disclaimer</h2>
            <p>AI answers may not always be 100 percent accurate. Always verify with your teacher.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>Email: salmankhurshid13@gmail.com</p>
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
