import { useState } from 'react'
import './App.css'
import AccountInformation from './components/AccountInformation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='ui raised segment'>
      <Header>
        <h1>THE BANK OF FLATIRON</h1>
      </Header>
      <AccountInformation />
     </div>
    </>
  )
}

export default App
