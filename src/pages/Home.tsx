import { Link } from 'react-router-dom'
import { PartyPopper, Calendar, Store, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="text-[#F1F5F9]">
      <nav className="border-b border-white/10 px-6 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-[#EC4899] font-bold text-xl"><PartyPopper size={22} /> EventFlow</div>
        <Link to="/dashboard" className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#EC4899] hover:bg-[#DB2777]">Plan an Event</Link>
      </nav>
      <section className="relative py-24 px-6 text-center">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(236,72,153,0.15), transparent 70%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">AI-Powered <span className="text-[#EC4899]">Event Planning</span> Made Effortless</h1>
          <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">From weddings to corporate events — AI handles vendors, logistics, guests, and budgets so you can focus on the moment.</p>
          <div className="flex gap-4 justify-center mb-10">
            {['🎊 Weddings', '🏢 Corporate', '🎉 Parties', '🎵 Festivals'].map(t => <span key={t} className="px-4 py-2 rounded-full border border-white/10 text-sm">{t}</span>)}
          </div>
          <Link to="/dashboard" className="px-8 py-4 rounded-xl text-lg font-bold text-white bg-[#EC4899] hover:bg-[#DB2777] inline-block">Start Planning →</Link>
        </div>
      </section>
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {[
          { icon: Calendar, title: 'Smart Scheduling', desc: 'AI coordinates timelines, reminders, and deadlines automatically.' },
          { icon: Store, title: 'Vendor Matching', desc: 'Find and compare the best vendors for your budget and style.' },
          { icon: Users, title: 'Guest Management', desc: 'RSVPs, dietary needs, seating — all in one place.' },
        ].map(f => (
          <div key={f.title} className="rounded-2xl p-6 border border-white/10 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <f.icon className="mx-auto mb-4 text-[#EC4899]" size={32} /><h3 className="font-semibold mb-2">{f.title}</h3><p className="text-sm text-[#94A3B8]">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
