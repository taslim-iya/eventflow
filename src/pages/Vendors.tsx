const vendors = [
  { name: 'The Grand Kitchen', type: '🍽️ Catering', rating: 4.8, price: '££-£££', available: true, ai: true },
  { name: 'Bloom & Wild', type: '💐 Florist', rating: 4.7, price: '££', available: true, ai: false },
  { name: 'SoundWave DJs', type: '🎵 DJ/Music', rating: 4.5, price: '£-££', available: true, ai: true },
  { name: 'The Manor House', type: '🏰 Venue', rating: 4.9, price: '££££', available: false, ai: false },
  { name: 'Capture Moments', type: '📸 Photography', rating: 4.6, price: '££-£££', available: true, ai: true },
  { name: 'Sweet Celebrations', type: '🎂 Cake', rating: 4.4, price: '££', available: true, ai: false },
]

export default function Vendors() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Vendors</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {vendors.map(v => (
          <div key={v.name} className="rounded-xl p-5 border border-white/10 hover:border-[#EC4899]/30 transition" style={{ background: '#1E1E38' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#EC4899]">{v.type}</span>
              {v.ai && <span className="text-xs px-2 py-0.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">🤖 AI Pick</span>}
            </div>
            <h3 className="font-semibold text-[#F1F5F9] mb-1">{v.name}</h3>
            <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-3">
              <span>⭐ {v.rating}</span><span>{v.price}</span>
              <span className={v.available ? 'text-[#10B981]' : 'text-[#EF4444]'}>{v.available ? '● Available' : '● Booked'}</span>
            </div>
            <button className="w-full py-2 rounded-lg border border-[#EC4899]/30 text-[#EC4899] text-sm font-semibold hover:bg-[#EC4899]/10 transition">Contact</button>
          </div>
        ))}
      </div>
    </div>
  )
}
