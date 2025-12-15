import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setDefinition('');
      return;
    }
    
    const foundWord = data.find(item => 
      item.word.toLowerCase() === searchTerm.toLowerCase().trim()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition('Word not found in the dictionary.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='App'>
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter search term..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {definition && (
        <div className="result-container">
          {definition === 'Word not found in the dictionary.' ? (
            <p className="not-found">{definition}</p>
          ) : (
            <div>
              <h3>Definition:</h3>
              <p>{definition}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;