// Function to fetch Pokémon data
async function fetchPokemon(pokemonNameOrId) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId.toLowerCase()}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
  
      const data = await response.json();
      displayPokemonInfo(data);
    } catch (error) {
      displayErrorMessage(error.message);
    }
  }
  
  // Function to display Pokémon info
  function displayPokemonInfo(pokemon) {
    const pokemonInfoDiv = document.getElementById('pokemon-info');
    const errorMessageDiv = document.getElementById('error-message');
    
    // Clear any previous content
    pokemonInfoDiv.innerHTML = '';
    errorMessageDiv.innerHTML = '';
  
    // Create the Pokémon elements
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name.toUpperCase();
  
    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.front_default;
    pokemonImage.alt = pokemon.name;
  
    const pokemonTypes = document.createElement('p');
    pokemonTypes.textContent = `Type(s): ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
  
    // Append to the DOM
    pokemonInfoDiv.appendChild(pokemonName);
    pokemonInfoDiv.appendChild(pokemonImage);
    pokemonInfoDiv.appendChild(pokemonTypes);
  }
  
  // Function to display error message
  function displayErrorMessage(message) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = message;
  }
  
  // Event listener for the search button
  document.getElementById('search-btn').addEventListener('click', () => {
    const pokemonInput = document.getElementById('pokemon-input').value.trim();
    if (pokemonInput) {
      fetchPokemon(pokemonInput);
    } else {
      displayErrorMessage('Please enter a Pokémon name or ID');
    }
  });
  
  // Optional: Allow pressing "Enter" to trigger the search
  document.getElementById('pokemon-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('search-btn').click();
    }
  });
  