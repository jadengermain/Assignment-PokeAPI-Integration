# Pokémon Search App

This is a simple web application that allows users to search for Pokémon by their name or ID using the PokeAPI. Upon entering a Pokémon name or ID and clicking the "Search" button, the app will display the Pokémon's name, image, and types. If the search term is invalid or the Pokémon is not found, an error message will be shown.

## Features

- Search for Pokémon by name or ID.
- Display the Pokémon's name, image, and types.
- Basic error handling for invalid Pokémon names or IDs.
- Dynamic content rendering using vanilla JavaScript.

## Technologies Used

- **HTML**: Basic structure for the webpage.
- **CSS**: Simple styles to make the app look clean and easy to use.
- **JavaScript**:
  - Fetch API to retrieve data asynchronously from the [PokeAPI](https://pokeapi.co/).
  - DOM manipulation to dynamically update the page with Pokémon information.
  - Basic error handling for missing or incorrect data.

## Setup

1. Clone this repository or download the project files to your local machine.

    ```bash
    git clone https://github.com/yourusername/pokemon-search.git
    ```

2. Open the `index.html` file in your browser.

    Alternatively, you can serve the files using a local server (e.g., using [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code).

## How to Use

1. Open the app in your browser.
2. Enter the name or ID of a Pokémon (e.g., "pikachu" or "25") into the input field.
3. Click the "Search" button or press `Enter` to submit your search.
4. The app will display the Pokémon's name, image, and types.
5. If the Pokémon is not found or an invalid input is provided, an error message will appear.

## Example

- **Search Input**: `pikachu`
- **Output**: 
  - Name: Pikachu
  - Image: Image of Pikachu
  - Type: Electric

## Error Handling

- If no Pokémon is found, an error message will be shown.
- If the input field is empty or invalid, the user will be prompted to enter a valid Pokémon name or ID.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The app uses the [PokeAPI](https://pokeapi.co/) to fetch Pokémon data.
- Special thanks to the creators and maintainers of the PokeAPI for providing open and accessible Pokémon data.
