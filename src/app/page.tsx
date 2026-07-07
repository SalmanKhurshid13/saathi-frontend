'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0F2C]">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0F2C]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="font-bold text-xl">Saathi</span>
            <span className="text-xs text-white/40 ml-1">साथी</span>
          </div>
          <Link href="/chat"
            className="bg-[#FF9933] hover:bg-[#E8881F] text-white font-semibold px-5 py-2 rounded-full text-sm transition-all">
            Chat करें →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">

          {/* India flag colors strip */}
          <div className="flex justify-center gap-1 mb-8">
            <div className="h-1 w-12 rounded-full bg-[#FF9933]" />
            <div className="h-1 w-12 rounded-full bg-white/60" />
            <div className="h-1 w-12 rounded-full bg-[#138808]" />
          </div>

          <p className="text-[#FF9933] font-medium text-sm uppercase tracking-widest mb-4">
            AI Agents for Good
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="gradient-text">पढ़ाई में</span>
            <br />
            <span className="text-white">अब कोई दिक्कत नहीं</span>
          </h1>

          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-4">
            Ask any school subject doubt in <strong className="text-white">Hindi or Hinglish</strong>.
            Get a simple explanation + practice quiz — all back in Hindi.
          </p>
          <p className="text-white/40 text-sm mb-10 hindi-text">
            कोई भी सवाल पूछो, हिंदी में जवाब पाओ।
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat"
              className="bg-[#FF9933] hover:bg-[#E8881F] text-white font-bold px-8 py-4 rounded-full text-lg transition-all glow-saffron">
              सवाल पूछो — Ask Now
            </Link>
            <a href="https://github.com/SalmanKhurshid13/saathi-doubt-solver"
              target="_blank"
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg transition-all">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Demo preview */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="text-white/30 text-xs ml-2">Saathi Chat</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="chat-bubble-user text-white px-4 py-3 text-sm max-w-xs">
                Photosynthesis kya hota hai? Simple mein samjhao 🙏
              </div>
            </div>
            <div className="flex justify-start">
              <div className="chat-bubble-saathi px-4 py-3 text-sm max-w-sm">
                <p className="text-white/50 text-xs mb-2">साथी • Saathi</p>
                <p className="hindi-text text-white/90 leading-relaxed">
                  प्रकाश संश्लेषण वह तरीका है जिससे पौधे सूरज की रोशनी से अपना खाना बनाते हैं।
                  जैसे आपकी माँ गैस से रोटी बनाती हैं, पौधे धूप से खाना बनाते हैं! 🌱
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="chat-bubble-saathi px-4 py-3 text-sm max-w-sm">
                <p className="text-[#FF9933] text-xs mb-2 font-medium">📝 Practice Question</p>
                <p className="hindi-text text-white/80 text-xs">
                  पौधे खाना कैसे बनाते हैं?<br/>
                  A) पानी से &nbsp; B) सूरज की रोशनी से ✓ &nbsp; C) हवा से
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">How Saathi Works</h2>
          <p className="text-white/40 text-center mb-12">5 AI agents working together</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { icon: '🔄', title: 'Translate', desc: 'Hindi → English', color: '#FF9933' },
              { icon: '🎓', title: 'Tutor', desc: 'Simple explanation', color: '#FFB347' },
              { icon: '✅', title: 'Verify', desc: 'Fact-check via MCP', color: '#white' },
              { icon: '🔄', title: 'Translate', desc: 'English → Hindi', color: '#5CB85C' },
              { icon: '📝', title: 'Quiz', desc: 'Practice question', color: '#138808' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-2">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-white/40 text-xs">{step.desc}</p>
                </div>
                {i < 4 && <div className="hidden md:block text-white/20 text-xs">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🌐', title: 'Hindi + Hinglish', desc: 'Type naturally — mix Hindi and English freely. Saathi understands both.' },
            { icon: '🛡️', title: 'Safety First', desc: 'Every explanation is fact-checked by an AI verifier before it reaches you.' },
            { icon: '📚', title: 'Any Subject', desc: 'Maths, Science, History, Geography — ask anything from school curriculum.' },
          ].map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-[#FF9933]/10 to-[#138808]/10 border border-[#FF9933]/20 rounded-3xl p-12">
          <p className="hindi-text text-3xl font-bold mb-2">तैयार हो?</p>
          <p className="text-white/60 mb-8">Start asking your doubts right now. It's free.</p>
          <Link href="/chat"
            className="bg-[#FF9933] hover:bg-[#E8881F] text-white font-bold px-10 py-4 rounded-full text-lg transition-all inline-block">
            सवाल पूछो — Start Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-white/30 text-sm">
        <p>Saathi — Built for the Kaggle AI Agents Capstone • Agents for Good Track</p>
        <p className="mt-1">Powered by Google ADK + Gemini • 
          <a href="https://github.com/SalmanKhurshid13/saathi-doubt-solver" 
            className="text-[#FF9933] hover:underline ml-1" target="_blank">GitHub</a>
        </p>
      </footer>
    </main>
  )
}
