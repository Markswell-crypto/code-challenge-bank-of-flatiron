import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, query }) {
  // Filter transactions based on the query and convert to lowercase for case-insensitive search
  const filteredTransactions = Array.isArray(transactions)? transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(query.toLowerCase())
    )
  : [];
  // Map the filtered transactions to Transaction components for rendering
  const list = filteredTransactions.map((item) => (
    <Transaction
      key={item.id}
      date={item.date}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  return (
    <table className="ui celled striped padded table">
      <thead>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
}

export default TransactionList;
