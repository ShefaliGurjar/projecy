// Get the search bar and data list elements
const searchBar = document.querySelector('.textarea');
const dataList = document.querySelector('.data-list');
// 
// Check if the search bar element exists
if (searchBar) {
  // Add an event listener to the search bar
  searchBar.addEventListener('input', () => {
    // Get the input value
    const inputValue = searchBar.value;
// 
    // Make an AJAX request to the JSON file to retrieve the data
    fetch(`coursera_course_recommendation.ipynb?q==${encodeURIComponent(inputValue)}`)
      .then(response => {
        // Check if the response is successful
        if (response.ok) {
          // Parse the response as JSON
          response.json()
            .then(data => {
              // Check if the data is an array
              if (Array.isArray(data)) {
                // Loop through the data and create list items
                dataList.innerHTML = '';
                data.forEach(item => {
                  const listItem = document.createElement('li');
                  listItem.textContent = item; // assume the data is a string
                  dataList.appendChild(listItem);
                });
              } else {
                console.error('Error: data is not an array ');
              }
            })
            .catch(error => {
              console.error('Error:', error);
              // Handle the error here
            });
        } else {
          console.error('Error: python-code.json not found');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle the error here
      });
  });
} else {
  console.error('Error: search bar element not found');
}
   
   
   
   
   

   

   

   

   
   
   
   
   
   
   
 
 
 
 
 

 
