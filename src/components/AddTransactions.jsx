import React, {useState} from 'react'

function AddTransactions() {
    //Define state variables using the useState hook to manage the input values 
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")
    //Define a handleSubmit function that is called when the form is submitted
    function handleSubmit(e) {
        e.preventDefault()

      fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: date,
          description: description,
          category: category,
          amount: amount,
        }),
      });
       alert("added successfully")
    }
  return (
    <div className="ui segment">
        {/* The component renders a form with input fields for date, description, category, and amount. */}
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input value={date} onChange={(e) => setDate(e.target.value)} type="date" name="date" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        {/* submit button that triggers the handleSubmit function when clicked */}
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default AddTransactions