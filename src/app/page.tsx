'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0D0D1A]">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0D0D1A]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">✦</span>
            <span className="font-bold text-xl tracking-tight">Saathi</span>
            <span className="text-xs text-white/30 ml-1 hindi-text">साथी</span>
          </div>
          <Link href="/chat"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold px-5 py-2 rounded-full text-sm transition-all">
            Start Chatting →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[#A78BFA] text-xs font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            AI Agents for Good — Kaggle Capstone
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">हिंदी में पूछो</span>
            <br />
            <span className="text-white">हिंदी में जवाब पाओ</span>
          </h1>

          <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10">
            Ask any school subject question in <strong className="text-white">Hindi or Hinglish</strong>.
            Get a clear, simple explanation + practice quiz — instantly.
          </p>

          <Link href="/chat"
            className="inline-block bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all glow-purple">
            सवाल पूछो — Ask Now
          </Link>
        </div>
      </section>

      {/* Demo */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto card rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="text-white/20 text-xs ml-2">Saathi Chat</span>
          </div>
          <div className="space-y-4">
            <div className="flex justify-end">
              <div className="chat-bubble-user text-white px-4 py-3 text-sm max-w-xs">
                Photosynthesis kya hota hai? 🙏
              </div>
            </div>
            <div className="flex justify-start">
              <div className="chat-bubble-saathi px-4 py-3 max-w-sm">
                <p className="text-[#A78BFA] text-xs mb-2 font-medium">✦ Saathi</p>
                <p className="hindi-text text-white/85 text-sm leading-relaxed">
                  प्रकाश संश्लेषण वह तरीका है जिससे पौधे सूरज की रोशनी से खाना बनाते हैं। जैसे आपकी माँ गैस से रोटी बनाती हैं! 🌱
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-xl px-4 py-3 max-w-sm">
                <p className="text-[#A78BFA] text-xs font-semibold mb-1">📝 Practice Question</p>
                <p className="hindi-text text-white/70 text-xs">पौधे खाना कैसे बनाते हैं? A) पानी से B) धूप से ✓ C) हवा से</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">How it works</h2>
          <p className="text-white/30 text-center text-sm mb-12">5 AI agents working together in real time</p>
          <div className="grid grid-cols-5 gap-2">
            {[
              { icon: '🔄', label: 'Translate', sub: 'Hindi → English' },
              { icon: '🎓', label: 'Explain', sub: 'Simple terms' },
              { icon: '✅', label: 'Verify', sub: 'Fact-check' },
              { icon: '🔄', label: 'Translate', sub: 'English → Hindi' },
              { icon: '📝', label: 'Quiz', sub: 'Practice MCQ' },
            ].map((s, i) => (
              <div key={i} className="card rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">{s.icon}</div>
                <p className="text-white text-xs font-semibold">{s.label}</p>
                <p className="text-white/30 text-xs">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: '🌐', title: 'Hindi + Hinglish', desc: 'Type naturally in any mix of Hindi and English.' },
            { icon: '🛡️', title: 'Always Accurate', desc: 'Every answer is fact-checked by an AI verifier before you see it.' },
            { icon: '📚', title: 'Any Subject', desc: 'Maths, Science, History, Geography — all school topics.' },
          ].map((f, i) => (
            <div key={i} className="card rounded-2xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center card rounded-3xl p-12 border-[#7C3AED]/20">
          <p className="hindi-text text-3xl font-bold mb-3">तैयार हो?</p>
          <p className="text-white/40 mb-8 text-sm">Free to use. No login required.</p>
          <Link href="/chat"
            className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all inline-block glow-purple">
            सवाल पूछो — Start Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-white/20 text-xs">
        <p className="mb-3">Saathi — Built with Google ADK + Groq • Kaggle AI Agents Capstone 2026</p>
        <p className="text-white/30 text-xs mb-4 max-w-xl mx-auto">
          AI-generated answers are for educational purposes only. Always verify with your teacher.
          We do not store any personal data.
        </p>
        <div className="flex justify-center gap-6 text-white/25">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          <Link href="/chat" className="hover:text-white transition-colors">Chat</Link>
        </div>
      </footer>
    </main>
  )
}
