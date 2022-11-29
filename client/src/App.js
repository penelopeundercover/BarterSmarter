import "./App.css";
import "./components/loginpage";
import "./components/signuppage";
import "./components/homepage";

function App() {
  return (
    <div className="App">
      <loginpage />
      <signuppage />
      <homepage />
    </div>
  );
}

export default App;
