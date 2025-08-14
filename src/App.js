import './App.css';
import Navbar from './components/navbar/model';
import TestPage from './pages/test/model';

function App() {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <div className="App">
      <Navbar />
      <TestPage />
    </div>
  );
}

export default App;
