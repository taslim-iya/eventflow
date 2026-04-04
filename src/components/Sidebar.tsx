import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Calendar, Store, Users, PoundSterling, PartyPopper } from 'lucide-react'

const nav = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/events', label: 'Events', icon: Calendar },
  { to: '/vendors', label: 'Vendors', icon: Store },
  { to: '/guests', label: 'Guest List', icon: Users },
  { to: '/budget', label: 'Budget', icon: PoundSterling },
]

export default function Sidebar() {
  const { pathname } = useLocation()
  return (
    <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-white/10 p-4 flex flex-col" style={{ background: '#12122A' }}>
      <Link to="/" className="flex items-center gap-2 text-[#EC4899] font-bold text-xl mb-8 px-2"><PartyPopper size={22} /> EventFlow</Link>
      <nav className="space-y-1 flex-1">
        {nav.map(n => (
          <Link key={n.to} to={n.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${pathname === n.to ? 'bg-[#EC4899]/10 text-[#EC4899]' : 'text-[#94A3B8] hover:text-white hover:bg-white/5'}`}><n.icon size={18} /> {n.label}</Link>
        ))}
      </nav>
    </aside>
  )
}
