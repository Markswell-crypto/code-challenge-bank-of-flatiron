import React from 'react'
import TransactionList from './TransactionList'
import AddTransactions from './AddTransactions' 

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
        <Search handleSearch={handleSearch} />
        <AddTransactions /> 
        <TransactionList transactions={transaction} />
    </div>
  )
}
}

export default AccountInformation