import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [foundMeaning, setFoundMeaning] = useState('');
  const [wordNotFound, setWordNotFound] = useState(false);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFoundMeaning('');
      setWordNotFound(false);
      return;
    }
    
    const foundWord = data.find(item => 
      item.word.toLowerCase() === searchTerm.toLowerCase().trim()
    );

    if (foundWord) {
      setFoundMeaning(foundWord.meaning);
      setWordNotFound(false);
    } else {
      setFoundMeaning('');
      setWordNotFound(true);
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

      <div className="result-container">
        <h3>Definition:</h3>
        {foundMeaning ? (
          <p>{foundMeaning}</p>
        ) : wordNotFound ? (
          <p>Word not found in the dictionary.</p>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default App;