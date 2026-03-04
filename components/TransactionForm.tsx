import { useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
}

interface Props {
  addTransaction: (transaction: Transaction) => void;
}

export default function TransactionForm({ addTransaction }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"income" | "expense">("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    addTransaction({
      id: Date.now(),
      title,
      amount,
      type,
    });

    setTitle("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select value={type} onChange={(e) => setType(e.target.value as "income" | "expense")}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}