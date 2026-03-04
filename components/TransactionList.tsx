interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: "income" | "expense";
}

interface Props {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
}

export default function TransactionList({ transactions, deleteTransaction }: Props) {
  return (
    <div>
      <h2>Transactions</h2>
      {transactions.length === 0 && <p>No transactions yet.</p>}
      <ul>
        {transactions.map((t) => (
          <li key={t.id}>
            {t.title} - €{t.amount} ({t.type})
            <button onClick={() => deleteTransaction(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}