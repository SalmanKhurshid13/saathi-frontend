'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000'

type Message = {
  role: 'user' | 'saathi'
  text: string
  quiz?: string
  loading?: boolean
}

const SAMPLE_QUESTIONS = [
  'Photosynthesis kya hota hai?',
  'Gravity kaise kaam karti hai?',
  'India azaad kab hua tha?',
  'Fractions kya hote hain?',
  'Water cycle samjhao',
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'saathi',
      text: 'नमस्ते! 👋 मैं साथी हूँ — आपका AI पढ़ाई साथी। कोई भी सवाल हिंदी या Hinglish में पूछो!',
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendQuestion = async (question: string) => {
    if (!question.trim() || loading) return
    const q = question.trim()
    setInput('')
    setLoading(true)

    setMessages(prev => [...prev, { role: 'user', text: q }])
    setMessages(prev => [...prev, { role: 'saathi', text: '', loading: true }])

    try {
      const res = await fetch(`${BACKEND_URL}/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      })
      const data = await res.json()

      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'saathi',
          text: data.success ? data.explanation : `Sorry, kuch problem aayi: ${data.error}`,
          quiz: data.success ? data.quiz : undefined,
          loading: false,
        }
        return updated
      })
    } catch {
      setMessages(prev => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          role: 'saathi',
          text: 'Network error. Please check your connection and try again.',
          loading: false,
        }
        return updated
      })
    }
    setLoading(false)
  }

  return (
    <div className="flex flex-col h-screen bg-[#0A0F2C]">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0A0F2C]/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white/40 hover:text-white transition-colors">←</Link>
          <span className="text-2xl">📚</span>
          <div>
            <p className="font-bold">Saathi</p>
            <p className="text-xs text-white/40">5 AI agents • Hindi tutor</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
          <span className="text-xs text-white/40">Online</span>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">

        {/* Sample questions */}
        {messages.length === 1 && (
          <div className="max-w-lg mx-auto">
            <p className="text-white/30 text-xs text-center mb-3">Try asking:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {SAMPLE_QUESTIONS.map((q, i) => (
                <button key={i}
                  onClick={() => sendQuestion(q)}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF9933]/40 text-white/70 text-xs px-3 py-2 rounded-full transition-all">
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-up`}>
            <div className={`max-w-lg ${msg.role === 'user' ? 'max-w-sm' : 'max-w-lg'}`}>

              {msg.role === 'saathi' && (
                <p className="text-[#FF9933] text-xs font-medium mb-1 ml-1">साथी • Saathi</p>
              )}

              <div className={msg.role === 'user' ? 'chat-bubble-user text-white px-4 py-3' : 'chat-bubble-saathi px-4 py-3'}>
                {msg.loading ? (
                  <div className="flex gap-1 py-2">
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{animationDelay:'0ms'}} />
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{animationDelay:'150ms'}} />
                    <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{animationDelay:'300ms'}} />
                  </div>
                ) : (
                  <p className={`leading-relaxed text-sm ${msg.role === 'saathi' ? 'hindi-text text-white/90' : 'text-white'}`}>
                    {msg.text}
                  </p>
                )}
              </div>

              {/* Quiz */}
              {msg.quiz && (
                <div className="mt-2 bg-[#FF9933]/10 border border-[#FF9933]/20 rounded-xl px-4 py-3">
                  <p className="text-[#FF9933] text-xs font-semibold mb-2">📝 Practice Question</p>
                  <p className="hindi-text text-white/80 text-sm leading-relaxed whitespace-pre-line">
                    {msg.quiz}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-4 border-t border-white/5 bg-[#0A0F2C]">
        <div className="max-w-2xl mx-auto flex gap-3">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendQuestion(input)}
            placeholder="Apna sawaal likho... (Hindi ya Hinglish mein)"
            disabled={loading}
            className="flex-1 bg-white/5 border border-white/10 focus:border-[#FF9933]/50 text-white placeholder-white/30 rounded-2xl px-5 py-3 text-sm outline-none transition-all hindi-text"
          />
          <button
            onClick={() => sendQuestion(input)}
            disabled={loading || !input.trim()}
            className="bg-[#FF9933] hover:bg-[#E8881F] disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold px-5 py-3 rounded-2xl transition-all text-sm">
            {loading ? '...' : 'पूछो'}
          </button>
        </div>
        <p className="text-white/20 text-xs text-center mt-2">
          Powered by Google ADK • 5 AI Agents
        </p>
      </div>
    </div>
  )
}
