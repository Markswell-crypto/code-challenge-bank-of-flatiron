import React, {useState, useEffect} from 'react'
import TransactionList from './TransactionList'
import SearchTransaction from './SearchTransaction'

function AccountInformation() {
    const [transaction, setTransaction] = useState([])
    const [query, setQuery] = useState("")
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch the transactions based on the query
    fetch(`http://localhost:3000/transactions?query=${query}`)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  }, [query])
  function handleSearch(e) {
    e.preventDefault()
    setQuery(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    let transactionObj = {
      date: date,
        description: description,
        category: category,
        amount: parseFloat(amount),
    }

    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionObj),
    })
      .then((response) => response.json())
      .then((data) => {
        const newTransaction = [...transaction, data]
        setTransaction(newTransaction)
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
  }
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
        <SearchTransaction handleSearch={handleSearch} />
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
        <TransactionList transactions={transaction} query={query} />
    </div>
  )
}


export default AccountInformation