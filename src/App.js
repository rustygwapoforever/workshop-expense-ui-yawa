import { useEffect, useState } from "react";

// Step 4
function App() {
  // Step 1
  const [expenses, setExpenses] = useState([]);

  // Step 2
  const fetchExpenses = async () => {
    const apiUrl = "https://yawayawa.onrender.com";

    const endpoint = `${apiUrl}/api/expenses`;

    const response = await fetch(endpoint);

    const expenseData = await response.json();

    setExpenses(expenseData);
  };

  // Step 3
  useEffect(() => {
    fetchExpenses();
  }, []);

  
  function renderExpenses(expenses) {
    const rows = expenses.map((expense) => (
      <tr key={expense._id}>
        <td>{expense._id}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
        <td>{new Date(expense.date).toDateString()}</td>
      </tr>
    ));

    return rows;
  }

  return (
    <div>
      <form>
        <textarea cols="30" rows="10"></textarea>
        <input type="number" />
        <input type="date" />
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
          {/* Rendering expenses */}
          {renderExpenses(expenses)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
