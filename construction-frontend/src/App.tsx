import { Companies } from './components/';
import { useData } from './hooks/useData';
import './App.css';

function App() {
  const { companies, handleChange, value, error, checkboxes } = useData();

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div className="App">
      {companies && (
        <Companies
          companies={companies}
          handleChange={handleChange}
          value={value}
          checkboxes={checkboxes}
        />
      )}
    </div>
  );
}

export default App;
