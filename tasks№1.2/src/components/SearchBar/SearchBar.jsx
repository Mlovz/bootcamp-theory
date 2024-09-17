import { useState } from "react"
import styles from "./SearchBar.module.css"


const SearchBar = () => {
  const suggestionsList = [
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express',
    'GraphQL',
    'Redux',
  ];

  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestionsList);

  const handleInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setInputValue(userInput);
    
    const filtered = suggestionsList.filter((suggestion) =>
      suggestion.toLowerCase().includes(userInput)
    );
    
    setFilteredSuggestions(filtered);
  };

  return (
    <div className={styles.card}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Начните вводить..."
      />
      <ul>
        {filteredSuggestions.length > 0 ? (
          filteredSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))
        ) : (
          <li>Нет предложений</li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;

