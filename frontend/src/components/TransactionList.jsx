import { Filter } from "lucide-react";
import React from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, filter, onFilterChange }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <h3 className="text-xl font-bold text-gray-900">Transaction History</h3>

        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => onFilterChange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          >
            <option value="all">All Transactions</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {transactions.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            No transactions found
          </div>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        )}
      </div>
    </div>
  );
};

export default TransactionList;
