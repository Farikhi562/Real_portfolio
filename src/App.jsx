import { Routes, Route } from 'react-router-dom'
import Shell from './components/Shell.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Architecture from './pages/Architecture.jsx'
import Company from './pages/Company.jsx'
import Experiments from './pages/Experiments.jsx'
import Playground from './pages/Playground.jsx'
import SystemLogs from './pages/SystemLogs.jsx'
import Contact from './pages/Contact.jsx'
import News from './pages/News.jsx'
import Nexair from './pages/Nexair.jsx'
import NexaSphere from './pages/NexaSphere.jsx'
import NexaCampus from './pages/NexaCampus.jsx'
import NotFound from './pages/NotFound.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import CursorGlow from './components/CursorGlow.jsx'

export default function App() {
  return (
    <Shell>
      <CommandPalette />
      <CursorGlow />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/nexa" element={<Company />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/logs" element={<SystemLogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/nexair" element={<Nexair />} />
        <Route path="/nexa-sphere" element={<NexaSphere />} />
        <Route path="/nexa-campus" element={<NexaCampus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Shell>
  )
}
