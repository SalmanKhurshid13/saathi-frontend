'use client'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D1A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">✦</span>
            <span className="font-bold text-xl tracking-tight">Saathi</span>
          </Link>
          <Link href="/chat"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-5 py-2 rounded-full text-sm transition-all">
            Start Chatting →
          </Link>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By using Saathi, you agree to these Terms of Use. If you do not agree, please do not use the service. Saathi is a free educational tool and is provided "as is" without any warranty.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Educational Purpose Only</h2>
            <p>Saathi is designed strictly for educational purposes to help school students understand academic subjects. It is <strong className="text-white">not</strong> intended to replace teachers, tutors, or official educational resources.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Accuracy Disclaimer</h2>
            <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl p-4 mb-3">
              <p className="text-white">⚠️ Important: AI-generated answers may not always be 100% accurate.</p>
            </div>
            <p>While Saathi uses a fact-checking AI agent to verify answers before showing them to you, we cannot guarantee complete accuracy at all times. Always verify important information with your teacher or textbook.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Acceptable Use</h2>
            <p className="mb-3">You agree to use Saathi only for lawful educational purposes. You must NOT:</p>
            <ul className="space-y-2">
              <li>• Use Saathi to generate harmful, offensive, or inappropriate content</li>
              <li>• Attempt to hack, overload, or disrupt the service</li>
              <li>• Use Saathi for any commercial purpose without permission</li>
              <li>• Submit personal information of others without their consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property</h2>
            <p>The Saathi platform, its design, and underlying code are owned by the creator. The AI-generated answers are produced dynamically and are not copyrighted content. You are free to use the explanations for your personal studies.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
            <p>Saathi is provided free of charge as an educational aid. We are not liable for any errors in AI-generated content, any decisions made based on Saathi's answers, or any interruption in service availability.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Service Availability</h2>
            <p>Saathi is a free service hosted on free-tier infrastructure. We do not guarantee 100% uptime. The service may occasionally be unavailable due to maintenance or technical issues.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Changes to Terms</h2>
            <p>We may update these terms at any time. Continued use of Saathi after changes means you accept the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
            <p>For any questions about these terms: <span className="text-[#A78BFA]">salmankhurshid13@gmail.com</span></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex gap-6 text-sm text-white/30">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/chat" className="hover:text-white transition-colors">Chat</Link>
        </div>
      </div>
    </main>
  )
}
