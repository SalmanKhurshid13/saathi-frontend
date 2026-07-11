'use client'
import Link from 'next/link'

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-12">Last updated: July 2026</p>

        <div className="space-y-10 text-white/70 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
            <p>Saathi is a free AI-powered educational tool that helps school students understand subjects in Hindi and Hinglish. It was built as part of the Kaggle AI Agents Capstone Project 2026.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. What Data We Collect</h2>
            <p className="mb-3">We collect <strong className="text-white">no personal data</strong>. Specifically:</p>
            <ul className="space-y-2 list-none">
              {[
                'We do NOT store your questions or chat history',
                'We do NOT require you to create an account or log in',
                'We do NOT collect your name, email, or phone number',
                'We do NOT use cookies to track you',
                'We do NOT share any data with advertisers',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#7C3AED] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How Your Questions Are Processed</h2>
            <p>When you type a question, it is sent to our backend server and then to the Groq AI API for processing. Your question is used only to generate an answer and is <strong className="text-white">not stored or logged</strong> by us. Please refer to Groq's privacy policy at groq.com for their data handling practices.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Third Party Services</h2>
            <p>Saathi uses the following third-party services:</p>
            <ul className="mt-3 space-y-2">
              <li>• <strong className="text-white">Groq API</strong> — processes your questions to generate answers</li>
              <li>• <strong className="text-white">Vercel</strong> — hosts our website frontend</li>
              <li>• <strong className="text-white">Render</strong> — hosts our backend server</li>
              <li>• <strong className="text-white">Google ADK</strong> — powers our multi-agent pipeline</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Children's Privacy</h2>
            <p>Saathi is designed for school students. We take children's privacy seriously. Since we collect no personal data and require no registration, there is no risk of collecting data from minors.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Changes to This Policy</h2>
            <p>If we update this policy, we will update the "Last updated" date at the top of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Contact</h2>
            <p>If you have any questions about this privacy policy, please contact us at: <span className="text-[#A78BFA]">salmankhurshid13@gmail.com</span></p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex gap-6 text-sm text-white/30">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="/chat" className="hover:text-white transition-colors">Chat</Link>
        </div>
      </div>
    </main>
  )
}
