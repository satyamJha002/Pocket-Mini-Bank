import { DollarSign } from "lucide-react";
const BalanceCard = ({ balance }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <span className="text-indigo-100 text-sm font-medium">
          Current Balance
        </span>
        <DollarSign className="w-5 h-5 text-indigo-200" />
      </div>
      <div className="mb-4">
        <h2 className="text-4xl font-bold tracking-tight">
          $
          {balance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
      </div>
      <div className="text-indigo-100 text-sm">Available for transfer</div>
    </div>
  );
};

export default BalanceCard;
