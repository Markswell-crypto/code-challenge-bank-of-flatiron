import React from 'react'
import './App.css'
import AccountInformation from './components/AccountInformation'
import Header from './components/Header'
function App() {

  return (
    <>
    {/*The main App component, which serves as the entry point of the application.*/}
     <div className='ui raised segment'>
      <div className="header item">
    {/*Header component that displays the application header.*/}
          <Header />
      </div>
      <br></br>
      <div>
    {/*AccountInformation component, which contains the main content of the application.*/}
        <AccountInformation />
      </div>
     </div>
    </>
  )
}

export default App
