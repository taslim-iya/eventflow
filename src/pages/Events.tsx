import { Plus } from 'lucide-react'

const events = [
  { name: "Sarah's Wedding", date: 'May 15, 2026', type: 'Wedding', guests: 120, budget: '£15,000', status: 'planning', color: '#EC4899' },
  { name: 'TechConf Q2', date: 'Jun 8, 2026', type: 'Corporate', guests: 250, budget: '£8,500', status: 'planning', color: '#8B5CF6' },
  { name: "Tom's 30th", date: 'Apr 22, 2026', type: 'Party', guests: 45, budget: '£2,500', status: 'confirmed', color: '#10B981' },
  { name: 'Annual Gala', date: 'Sep 20, 2026', type: 'Corporate', guests: 300, budget: '£25,000', status: 'draft', color: '#64748B' },
]

const statusLabels: Record<string, string> = { planning: '🔧 Planning', confirmed: '✅ Confirmed', draft: '📝 Draft', completed: '🎉 Completed' }

export default function Events() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#F1F5F9]">Events</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#EC4899]"><Plus size={16} /> New Event</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {events.map(e => (
          <div key={e.name} className="rounded-xl p-6 border border-white/10" style={{ background: '#1E1E38' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-[#F1F5F9]">{e.name}</h3>
              <span className="px-2 py-1 rounded-full text-xs" style={{ background: `${e.color}20`, color: e.color }}>{statusLabels[e.status]}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-[#64748B]">Date:</span> <span className="text-[#CBD5E1]">{e.date}</span></div>
              <div><span className="text-[#64748B]">Type:</span> <span className="text-[#CBD5E1]">{e.type}</span></div>
              <div><span className="text-[#64748B]">Guests:</span> <span className="text-[#CBD5E1]">{e.guests}</span></div>
              <div><span className="text-[#64748B]">Budget:</span> <span className="text-[#EC4899] font-medium">{e.budget}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
