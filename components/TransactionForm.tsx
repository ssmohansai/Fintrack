// TransactionForm.tsx
// Form to add a new transaction (income or expense)

import { useState } from "react";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
}

interface Props {
  addTransaction: (transaction: Transaction) => void; // Function passed from parent to add transaction
}

export default function TransactionForm({ addTransaction }: Props) {
  const [title, setTitle] = useState(""); // Controlled input for transaction title
  const [amount, setAmount] = useState(0); // Controlled input for transaction amount
  const [type, setType] = useState<"income" | "expense">("income"); // Controlled select for type

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return; // Prevent empty submission

    addTransaction({
      id: Date.now(), // Unique ID for transaction
      title,
      amount,
      type,
    });

    setTitle(""); // Clear input after submit
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