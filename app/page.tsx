export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Bias Detection
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Stop Unconscious Bias<br />
          <span className="text-[#58a6ff]">Before It Costs You</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload interview recordings and get instant AI analysis flagging biased questions, unequal candidate time, and compliance risks — so your HR team hires fairly every time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Free Trial — $18/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['98%', 'Accuracy'], ['2min', 'Avg Analysis'], ['EEOC', 'Compliant']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#161b22] border-y border-[#30363d] py-12">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: '🎙️', title: 'AI Transcription', desc: 'Automatically transcribes video interviews with speaker identification.' },
            { icon: '🔍', title: 'Bias Flagging', desc: 'Detects leading questions, protected-class references, and unequal treatment.' },
            { icon: '📊', title: 'Compliance Reports', desc: 'Export EEOC-ready reports and track bias trends across your hiring pipeline.' },
          ].map(f => (
            <div key={f.title} className="text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. Cancel anytime.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Per HR team workspace</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited interview uploads',
              'AI transcription & bias detection',
              'Dashboard with analytics',
              'EEOC compliance reports',
              'Team collaboration (up to 10 seats)',
              'Email support',
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What video formats are supported?',
              a: 'We support MP4, MOV, WebM, and AVI files up to 2GB. Most video conferencing exports (Zoom, Teams, Google Meet) work out of the box.'
            },
            {
              q: 'How does the bias detection work?',
              a: 'Our AI transcribes the interview, then analyzes questions for protected-class references, leading language, and time imbalances between candidates using EEOC guidelines as a baseline.'
            },
            {
              q: 'Is our interview data kept private?',
              a: 'Yes. All uploads are encrypted at rest and in transit. We never use your interview data to train models, and you can delete recordings at any time.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-xs text-[#8b949e]">
        <p>© {new Date().getFullYear()} Interview Bias Detector. Built for fair hiring.</p>
      </footer>
    </main>
  )
}
