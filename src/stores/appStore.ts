import { create } from 'zustand'
import { persist } from 'zustand/middleware'
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8) }

export type EventType = 'conference' | 'wedding' | 'corporate' | 'social'
export type EventStatus = 'planning' | 'confirmed' | 'completed'
export type RSVPStatus = 'pending' | 'accepted' | 'declined'
export interface Event { id: string; name: string; date: string; venue: string; type: EventType; status: EventStatus; guestCount: number; budget: number; spent: number }
export interface Guest { id: string; eventId: string; name: string; email: string; rsvp: RSVPStatus; tableNo?: number }
export interface Vendor { id: string; eventId: string; name: string; service: string; cost: number; status: 'contacted' | 'booked' | 'paid' }

const DEMO_EVENTS: Event[] = [
  { id: '1', name: 'Tech Summit 2026', date: '2026-05-15', venue: 'Convention Center', type: 'conference', status: 'confirmed', guestCount: 500, budget: 150000, spent: 89000 },
  { id: '2', name: 'Smith-Patel Wedding', date: '2026-06-21', venue: 'Grand Ballroom', type: 'wedding', status: 'planning', guestCount: 180, budget: 75000, spent: 32000 },
  { id: '3', name: 'Annual Company Gala', date: '2026-04-30', venue: 'Rooftop Terrace', type: 'corporate', status: 'confirmed', guestCount: 250, budget: 50000, spent: 41000 },
]
const DEMO_GUESTS: Guest[] = [
  { id: '1', eventId: '1', name: 'Alex Rivera', email: 'alex@tech.io', rsvp: 'accepted', tableNo: 1 },
  { id: '2', eventId: '1', name: 'Jordan Blake', email: 'jordan@dev.co', rsvp: 'accepted', tableNo: 2 },
  { id: '3', eventId: '1', name: 'Sam Chen', email: 'sam@ai.com', rsvp: 'pending' },
  { id: '4', eventId: '2', name: 'Emma Smith', email: 'emma@mail.com', rsvp: 'accepted', tableNo: 1 },
  { id: '5', eventId: '2', name: 'Raj Patel', email: 'raj@mail.com', rsvp: 'accepted', tableNo: 1 },
  { id: '6', eventId: '3', name: 'Lisa Wong', email: 'lisa@corp.co', rsvp: 'declined' },
]
const DEMO_VENDORS: Vendor[] = [
  { id: '1', eventId: '1', name: 'SoundPro Audio', service: 'AV Equipment', cost: 15000, status: 'booked' },
  { id: '2', eventId: '1', name: 'GreenLeaf Catering', service: 'Catering', cost: 35000, status: 'paid' },
  { id: '3', eventId: '2', name: 'Bloom & Petal', service: 'Flowers', cost: 8000, status: 'booked' },
  { id: '4', eventId: '2', name: 'ShutterClick Photo', service: 'Photography', cost: 5000, status: 'contacted' },
]

interface AppState {
  events: Event[]; guests: Guest[]; vendors: Vendor[]
  addEvent: (e: Omit<Event, 'id' | 'spent'>) => void
  updateEvent: (id: string, u: Partial<Event>) => void
  deleteEvent: (id: string) => void
  addGuest: (g: Omit<Guest, 'id'>) => void
  updateGuestRsvp: (id: string, rsvp: RSVPStatus) => void
  deleteGuest: (id: string) => void
  addVendor: (v: Omit<Vendor, 'id'>) => void
  updateVendorStatus: (id: string, status: Vendor['status']) => void
  deleteVendor: (id: string) => void
}

export const useAppStore = create<AppState>()(persist((set) => ({
  events: DEMO_EVENTS, guests: DEMO_GUESTS, vendors: DEMO_VENDORS,
  addEvent: (e) => set(s => ({ events: [...s.events, { ...e, id: uid(), spent: 0 }] })),
  updateEvent: (id, u) => set(s => ({ events: s.events.map(e => e.id === id ? { ...e, ...u } : e) })),
  deleteEvent: (id) => set(s => ({ events: s.events.filter(e => e.id !== id), guests: s.guests.filter(g => g.eventId !== id), vendors: s.vendors.filter(v => v.eventId !== id) })),
  addGuest: (g) => set(s => ({ guests: [...s.guests, { ...g, id: uid() }] })),
  updateGuestRsvp: (id, rsvp) => set(s => ({ guests: s.guests.map(g => g.id === id ? { ...g, rsvp } : g) })),
  deleteGuest: (id) => set(s => ({ guests: s.guests.filter(g => g.id !== id) })),
  addVendor: (v) => set(s => ({ vendors: [...s.vendors, { ...v, id: uid() }] })),
  updateVendorStatus: (id, status) => set(s => ({ vendors: s.vendors.map(v => v.id === id ? { ...v, status } : v) })),
  deleteVendor: (id) => set(s => ({ vendors: s.vendors.filter(v => v.id !== id) })),
}), { name: 'eventflow-store' }))
