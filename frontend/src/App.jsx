import React, { useState, useEffect } from "react";
import { DollarSign, Send } from "lucide-react";
import BalanceCard from "./components/BalanceCard";
import TransactionList from "./components/TransactionList";
import TransferForm from "./components/TransferForm";

const initialTransactions = [
  {
    id: 1,
    date: "2024-12-20",
    description: "Salary Deposit",
    amount: 5000,
    type: "credit",
  },
  {
    id: 2,
    date: "2024-12-19",
    description: "Starbucks",
    amount: 12.5,
    type: "debit",
  },
  {
    id: 3,
    date: "2024-12-18",
    description: "Amazon Purchase",
    amount: 89.99,
    type: "debit",
  },
  {
    id: 4,
    date: "2024-12-17",
    description: "Freelance Project",
    amount: 1200,
    type: "credit",
  },
  {
    id: 5,
    date: "2024-12-16",
    description: "Grocery Store",
    amount: 156.78,
    type: "debit",
  },
  {
    id: 6,
    date: "2024-12-15",
    description: "Netflix Subscription",
    amount: 15.99,
    type: "debit",
  },
  {
    id: 7,
    date: "2024-12-14",
    description: "Gas Station",
    amount: 45.0,
    type: "debit",
  },
  {
    id: 8,
    date: "2024-12-13",
    description: "Investment Return",
    amount: 300,
    type: "credit",
  },
];

const initialBalance = 12500.0;

const App = () => {
  const [balance, setBalance] = useState(initialBalance);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState("all");
  const [showTransferForm, setShowTransferForm] = useState(false);

  useEffect(() => {
    const savedBalance = parseFloat(sessionStorage.getItem("balance"));
    const savedTransactions = sessionStorage.getItem("transactions");

    if (savedBalance) setBalance(savedBalance);
    if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("balance", balance.toString());
    sessionStorage.setItem("transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const handleTransfer = (newTransaction) => {
    setBalance(balance - newTransaction.amount);
    setTransactions([newTransaction, ...transactions]);
  };

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return true;
    if (filter === "income") return t.type === "credit";
    if (filter === "expenses") return t.type === "debit";
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Pocket Bank</h1>
            </div>
            <button
              onClick={() => setShowTransferForm(!showTransferForm)}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Send Money</span>
              <span className="sm:hidden">Send</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <BalanceCard balance={balance} />
          </div>

          {showTransferForm && (
            <div className="lg:col-span-2">
              <TransferForm
                balance={balance}
                onTransfer={handleTransfer}
                onClose={() => setShowTransferForm(false)}
              />
            </div>
          )}
        </div>

        <div className="mt-6">
          <TransactionList
            transactions={filteredTransactions}
            filter={filter}
            onFilterChange={setFilter}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
