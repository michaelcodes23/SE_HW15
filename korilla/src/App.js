// import logo from './logo.svg';
import './App.css';
import Receipt from './Receipt.js'



function App() {
  return (
    <body>
        <h1>Korilla - Receipts of Those Who Have Not Paid Below:</h1>
        <div className = "container">
          <Receipt/>
        </div>
    </body>

  );
}

export default App;
