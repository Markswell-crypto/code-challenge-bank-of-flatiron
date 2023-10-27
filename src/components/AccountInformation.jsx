import React, {useState, useEffect} from 'react'
import TransactionList from './TransactionList'
import SearchTransaction from './SearchTransaction'

function AccountInformation() {
    // Define state variables for transactions, query, form fields, and their initial values
    const [transaction, setTransaction] = useState([])
    const [query, setQuery] = useState("")
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    // useEffect to fetch transactions when the query changes
  useEffect(() => {
    // Fetch the transactions based on the query
    fetch(`http://localhost:3000/transactions?query=${query}`)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
    // Handle the search input change
  function handleSearch(e) {
    e.preventDefault()
    setQuery(e.target.value)
  }
  // Handle form submission to add a new transaction
  function handleSubmit(e) {
    e.preventDefault();
    let transactionObj = {
      date: date,
        description: description,
        category: category,
        amount: parseFloat(amount),
    }
    // Send a POST request to add a new transaction
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionObj),
    })
      .then((response) => response.json())
      .then((data) => {
    // Add the new transaction to the existing list
        const newTransaction = [...transaction, data]
        setTransaction(newTransaction)
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  }
    // Handle transaction added event (could be used to refresh the list)
  function handleTransactionAdded() {
    // Refresh the transactions when a new transaction is added
    fetch('http://localhost:3000/transactions')
      .then((resp) => resp.json())
      .then((data) => {
        let addedTransaction = [...transaction, data]
        setTransaction(addedTransaction)
      })
  }
  return (
    <div>
      {/* Render the search input */}
        <SearchTransaction handleSearch={handleSearch} />
      {/* Render the form for adding a new transaction */}
        <div className="ui segment">
          <form onSubmit={handleSubmit} className="ui form">
            <div className="inline fields">
              <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
              <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
              <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
            </div>
            <button className="ui button" type="submit">
              Add Transaction
            </button>
          </form>
    </div>
     {/* Render the list of transactions using TransactionList */}
      <TransactionList transactions={transaction} query={query} />
    </div>
  )
}


export default AccountInformation