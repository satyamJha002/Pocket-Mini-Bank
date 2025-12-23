import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const TransactionItem = ({ transaction }) => {
  const isCredit = transaction.type === "credit";

  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-150 border border-gray-100">
      <div className="flex items-center space-x-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isCredit ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isCredit ? (
            <TrendingUp className="w-5 h-5 text-green-600" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-600" />
          )}
        </div>
        <div>
          <p className="font-semibold text-gray-900">
            {transaction.description}
          </p>
          <p className="text-sm text-gray-500">
            {new Date(transaction.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p
          className={`font-bold text-lg ${
            isCredit ? "text-green-600" : "text-red-600"
          }`}
        >
          {isCredit ? "+" : "-"}$
          {transaction.amount.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-xs text-gray-500 capitalize">{transaction.type}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
