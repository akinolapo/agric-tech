import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Value from './components/Value'
import TwoColumnMasonry from './components/TwoColumnMasonry'
import TwoColumnComponent from './components/TwoColumnComponent'
import Footer from './components/Footer'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route
        path="messages"
        element={<DashboardMessages />}
      />
      <Route path="tasks" element={<DashboardTasks />} />
    </Route>
    <Route path="about" element={<AboutPage />} />
  </Routes>

    <div>
      <Header/>
      <Hero/>
      <Value/>
      <TwoColumnMasonry/>
      <TwoColumnComponent/>
      <Footer/>
    </div>
    </>
  )
}

export default App