interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
}

interface Props {
  transactions: Transaction[];
}

export default function BalanceCard({ transactions }: Props) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  return (
    <div>
      <h2>Balance: €{balance}</h2>
      <p>Income: €{income}</p>
      <p>Expense: €{expense}</p>
    </div>
  );
}