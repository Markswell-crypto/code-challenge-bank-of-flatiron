import React, {useState, useEffect} from 'react'
import TransactionList from './TransactionList'
import AddTransactions from './AddTransactions' 
import SearchTransaction from './SearchTransaction'

function AccountInformation() {
    const [transaction, setTransaction] = useState([])
    const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/transactions" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  return (
    <div>
        <SearchTransaction handleSearch={handleSearch} />
        <AddTransactions /> 
        <TransactionList transactions={transaction} />
    </div>
  )
}
}

export default AccountInformation