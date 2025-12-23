import React, { useState } from "react";
import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";

const Index = () => {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <BalanceCard
              balance={balance}
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
