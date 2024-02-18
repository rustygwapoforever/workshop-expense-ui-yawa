import { useEffect, useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date(Date.now()).toLocaleDateString("en-CA"));
  const [onSuccessfulSave,setOnSuccessfulSave] = useState(false);

  const apiUrl = "https://yawayawa.onrender.com";
  const endpoint = `${apiUrl}/api/expenses`;

  useEffect(() => {
    async function fetchExpenses() {
      const response = await fetch(endpoint);
      const expenseData = await response.json();
      setExpenses(expenseData);
    }

    fetchExpenses();
  }, []);

  function renderExpenses(expenses) {
    return expenses.map(expense => (
      <tr key={expense._id}>
        <td>{expense._id}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
        <td>{new Date(expense.date).toDateString()}</td>
      </tr>
    ));
  }

  async function saveExpense(event) {
    event.preventDefault();

    const expense = {
      description: description,
      amount: amount,
      date: date,
    };

    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    setOnSuccessfulSave(true);
  }

  return (
    <div>
      <form onSubmit={saveExpense}>
        <textarea cols="30" rows="10" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button>Save</button>
      </form>

      <h2>My Expenses</h2>

      <table width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {renderExpenses(expenses)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
