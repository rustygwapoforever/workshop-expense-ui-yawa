import logo from "./logo.svg";
import "./App.css";

function App() {
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
        </tbody>
      </table>
  </div>
  );
}

export default App;