import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import Events from '@/pages/Events'
import Vendors from '@/pages/Vendors'
import GuestList from '@/pages/GuestList'
import Budget from '@/pages/Budget'

export default function App() {
  const { pathname } = useLocation()
  const isLanding = pathname === '/'
  return (
    <div className="min-h-screen" style={{ background: '#1A1A2E' }}>
      {isLanding ? <Routes><Route path="/" element={<Home />} /></Routes> : (
        <div className="flex">
          <Sidebar />
          <main className="flex-1 ml-[240px] p-6 min-h-screen">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/guests" element={<GuestList />} />
              <Route path="/budget" element={<Budget />} />
            </Routes>
          </main>
        </div>
      )}
    </div>
  )
}
