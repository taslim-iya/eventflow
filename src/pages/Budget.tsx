const categories = [
  { name: 'Venue', allocated: 5000, spent: 5000, status: 'paid' },
  { name: 'Catering', allocated: 4000, spent: 2800, status: 'deposit paid' },
  { name: 'Photography', allocated: 1500, spent: 750, status: 'deposit paid' },
  { name: 'Music/DJ', allocated: 800, spent: 0, status: 'pending' },
  { name: 'Flowers', allocated: 1200, spent: 600, status: 'deposit paid' },
  { name: 'Cake', allocated: 500, spent: 500, status: 'paid' },
  { name: 'Misc', allocated: 2000, spent: 350, status: 'ongoing' },
]

const total = categories.reduce((s, c) => s + c.allocated, 0)
const spent = categories.reduce((s, c) => s + c.spent, 0)

export default function Budget() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-[#F1F5F9]">Budget</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl p-5 border border-white/10 text-center" style={{ background: '#1E1E38' }}><div className="text-2xl font-bold text-[#F1F5F9]">£{total.toLocaleString()}</div><div className="text-xs text-[#94A3B8]">Total Budget</div></div>
        <div className="rounded-xl p-5 border border-white/10 text-center" style={{ background: '#1E1E38' }}><div className="text-2xl font-bold text-[#EF4444]">£{spent.toLocaleString()}</div><div className="text-xs text-[#94A3B8]">Spent</div></div>
        <div className="rounded-xl p-5 border border-white/10 text-center" style={{ background: '#1E1E38' }}><div className="text-2xl font-bold text-[#10B981]">£{(total - spent).toLocaleString()}</div><div className="text-xs text-[#94A3B8]">Remaining</div></div>
      </div>
      <div className="rounded-xl p-5 border border-white/10" style={{ background: '#1E1E38' }}>
        <h2 className="text-lg font-semibold text-[#F1F5F9] mb-4">Breakdown</h2>
        <div className="space-y-4">
          {categories.map(c => (
            <div key={c.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[#CBD5E1]">{c.name}</span>
                <span className="text-[#94A3B8]">£{c.spent.toLocaleString()} / £{c.allocated.toLocaleString()}</span>
              </div>
              <div className="h-3 rounded-full bg-white/5"><div className="h-3 rounded-full bg-[#EC4899]" style={{ width: `${(c.spent / c.allocated) * 100}%` }} /></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
