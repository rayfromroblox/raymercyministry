'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="h-screen" />
})
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="h-screen" />
})
const Activities = dynamic(() => import('@/components/Activities'), {
  loading: () => <div className="h-screen" />
})
const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="h-96" />
})
const Heartbeat = dynamic(() => import('@/components/Heartbeat'), {
  loading: () => <div className="h-screen" />
})
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="h-screen" />
})
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Testimonials />
      <About />
      <Gallery />
      <Activities />
      <Heartbeat />
      <Contact />
      <Footer />
    </main>
  )
}

