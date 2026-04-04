const guests = [
  { name: 'Emma & James', rsvp: 'confirmed', dietary: 'None', table: 'A1', count: 2 },
  { name: 'Priya Sharma', rsvp: 'confirmed', dietary: 'Vegetarian', table: 'A2', count: 1 },
  { name: 'The Wilsons', rsvp: 'pending', dietary: 'Gluten-free', table: 'B1', count: 4 },
  { name: 'Marcus Lee', rsvp: 'declined', dietary: '—', table: '—', count: 1 },
  { name: 'Sophie & Tom', rsvp: 'confirmed', dietary: 'Vegan', table: 'A1', count: 2 },
  { name: 'David Chen', rsvp: 'pending', dietary: 'None', table: 'B2', count: 1 },
]

const rsvpColors: Record<string, string> = { confirmed: '#10B981', pending: '#F59E0B', declined: '#EF4444' }

export default function GuestList() {
  const confirmed = guests.filter(g => g.rsvp === 'confirmed').reduce((s, g) => s + g.count, 0)
  const pending = guests.filter(g => g.rsvp === 'pending').reduce((s, g) => s + g.count, 0)
  const total = guests.reduce((s, g) => s + g.count, 0)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Guest List</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl p-4 border border-white/10 text-center" style={{ background: '#1E1E38' }}><div className="text-2xl font-bold text-[#10B981]">{confirmed}</div><div className="text-xs text-[#94A3B8]">Confirmed</div></div>
        <div className="rounded-xl p-4 border border-white/10 text-center" style={{ background: '#1E1E38' }}><div className="text-2xl font-bold text-[#F59E0B]">{pending}</div><div className="text-xs text-[#94A3B8]">Pending</div></div>
        <div className="rounded-xl p-4 border border-white/10 text-center" style={{ background: '#1E1E38' }}><div className="text-2xl font-bold text-[#F1F5F9]">{total}</div><div className="text-xs text-[#94A3B8]">Total Invited</div></div>
      </div>
      <div className="rounded-xl border border-white/10 overflow-hidden" style={{ background: '#1E1E38' }}>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-white/10 text-[#64748B] text-xs text-left"><th className="px-4 py-3">Guest</th><th className="px-4 py-3">RSVP</th><th className="px-4 py-3">Dietary</th><th className="px-4 py-3">Table</th><th className="px-4 py-3">Pax</th></tr></thead>
          <tbody>{guests.map(g => (
            <tr key={g.name} className="border-b border-white/5">
              <td className="px-4 py-3 text-[#F1F5F9]">{g.name}</td>
              <td className="px-4 py-3"><span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: `${rsvpColors[g.rsvp]}20`, color: rsvpColors[g.rsvp] }}>{g.rsvp}</span></td>
              <td className="px-4 py-3 text-[#94A3B8]">{g.dietary}</td>
              <td className="px-4 py-3 text-[#94A3B8]">{g.table}</td>
              <td className="px-4 py-3 text-[#F1F5F9]">{g.count}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  )
}
