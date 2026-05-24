import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import TopBar from './TopBar'
import ScrollToTop from './ScrollToTop'
import FloatingContact from './FloatingContact'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
