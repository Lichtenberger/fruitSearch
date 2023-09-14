const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Define a function 'search' that takes a string 'str' as input.
const search = str => {
    // Convert the input string to lowercase for case-insensitive matching.
    const val = str.toLowerCase();
    // Use the filter method to find matching fruits and store them in 'results'.
    const results = fruit.filter(fruitItem => fruitItem.toLowerCase().includes(val));
    return results;
};

// Define a function 'searchHandler' to handle input events.
const searchHandler = e => {
    // Get the current value of the input element.
    const inputVal = e.currentTarget.value;
    // Perform a search and store the results in 'results'.
    const results = inputVal.length > 0 ? search(inputVal) : [];
    // Call 'showSuggestions' to display the search results.
    showSuggestions(results, inputVal);
};

// Define a function 'showSuggestions' to display search results.
const showSuggestions = (results, inputVal) => {
    // Clear the existing suggestions in the HTML element with the id 'suggestions'.
    suggestions.innerHTML = '';

    // Check if there are matching results.
    if (results.length > 0) {
        // Loop through each result and format it for display.
        results.forEach(item => {
            // Highlight the matching part of the result.
            const match = item.match(new RegExp(inputVal, 'i'));
            item = item.replace(match[0], `<strong>${match[0]}</strong>`);
            // Append the formatted result as an HTML list item.
            suggestions.innerHTML += `<li>${item}</li>`;
        });

        // Add a CSS class to show that suggestions are available.
        suggestions.classList.add('has-suggestions');
    } else {
        // If there are no matching results, clear the suggestions and remove the CSS class.
        suggestions.innerHTML = '';
        suggestions.classList.remove('has-suggestions');
    }
};

// Define a function 'useSuggestion' to handle selecting a suggestion.
const useSuggestion = e => {
    // Set the input value to the selected suggestion's text.
    input.value = e.target.innerText;
    // Set focus back to the input element.
    input.focus();
    // Clear the suggestions and remove the CSS class.
    suggestions.innerHTML = '';
    suggestions.classList.remove('has-suggestions');
};

// Add an event listener to the 'keyup' event of the input element to trigger 'searchHandler'.
input.addEventListener('keyup', searchHandler);
// Add an event listener to the 'click' event of the suggestions element to handle suggestion selection.
suggestions.addEventListener('click', useSuggestion);
