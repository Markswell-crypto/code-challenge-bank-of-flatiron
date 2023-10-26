import React from 'react'
import './App.css'
import AccountInformation from './components/AccountInformation'
import Header from './components/Header'
function App() {

  return (
    <>
     <div className='ui raised segment'>
      <div className="header item">
          <Header />
      </div>
      <br></br>
      <div>
        <AccountInformation />
      </div>
     </div>
    </>
  )
}

export default App
