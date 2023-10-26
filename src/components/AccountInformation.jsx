import React from 'react'
import TransactionList from './TransactionList'

function AccountInformation() {
    
  return (
    <div>
        {/* <Search handleSearch={handleSearch} />
        <AddTransactionForm /> */}
        <TransactionList transactions={transaction} />
    </div>
  )
}

export default AccountInformation