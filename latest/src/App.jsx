import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/companies'
import Residencies from './Components/Residencies/residencies'
import Value from './Components/Value/Value'
import Contact from './Components/Contact/Contact'
import Getstarted from './Components/GetStarted/Getstarted'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    
    <div className='App'>
      <div>
        <div className='white-gradient'/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
    
  )
}

export default App
