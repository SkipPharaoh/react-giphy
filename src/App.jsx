// IMPORTS
import './App.css';
import SearchContainer from './components/SearchContainer';

function App() {
  return (
    <div className="Giphy">
      <nav>
        <h3>Giphy Search</h3>
        <h4>Search</h4>
      </nav>
      <section className="Search">
        <SearchContainer />
      </section>
    </div>
  );
}

export default App;
