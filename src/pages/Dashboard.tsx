import { Calendar, CheckCircle, PoundSterling, Store } from 'lucide-react'

const stats = [
  { label: 'Upcoming Events', value: '3', icon: Calendar, color: '#EC4899' },
  { label: 'Tasks Due Today', value: '7', icon: CheckCircle, color: '#F59E0B' },
  { label: 'Budget Remaining', value: '£4,200', icon: PoundSterling, color: '#10B981' },
  { label: 'Vendor Responses', value: '12', icon: Store, color: '#8B5CF6' },
]

const upcoming = [
  { name: "Sarah's Wedding", date: 'May 15, 2026', type: '💒 Wedding', guests: 120, status: 'On Track' },
  { name: 'TechConf Q2', date: 'Jun 8, 2026', type: '🏢 Corporate', guests: 250, status: 'Planning' },
  { name: "Tom's 30th", date: 'Apr 22, 2026', type: '🎉 Party', guests: 45, status: 'Confirmed' },
]

const tasks = [
  { task: 'Confirm catering menu with The Grand Kitchen', event: "Sarah's Wedding", due: 'Today' },
  { task: 'Send speaker invitations', event: 'TechConf Q2', due: 'Today' },
  { task: 'Book DJ for evening', event: "Tom's 30th", due: 'Tomorrow' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="rounded-xl p-5 border border-white/10" style={{ background: '#1E1E38' }}>
            <s.icon size={20} style={{ color: s.color }} className="mb-2" />
            <div className="text-2xl font-bold text-[#F1F5F9]">{s.value}</div>
            <div className="text-xs text-[#94A3B8]">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-xl p-5 border border-white/10" style={{ background: '#1E1E38' }}>
          <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcoming.map(e => (
              <div key={e.name} className="p-3 rounded-lg bg-white/5 flex items-center justify-between">
                <div><div className="text-sm font-medium text-[#F1F5F9]">{e.type} {e.name}</div><div className="text-xs text-[#64748B]">{e.date} · {e.guests} guests</div></div>
                <span className="text-xs text-[#EC4899]">{e.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-5 border border-white/10" style={{ background: '#1E1E38' }}>
          <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Tasks Due</h2>
          <div className="space-y-3">
            {tasks.map(t => (
              <div key={t.task} className="p-3 rounded-lg bg-white/5">
                <div className="text-sm text-[#F1F5F9]">{t.task}</div>
                <div className="text-xs text-[#64748B]">{t.event} · Due: <span className="text-[#F59E0B]">{t.due}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
