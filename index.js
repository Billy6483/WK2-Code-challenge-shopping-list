// Function to add a new task item to the list
function addTask() {
    var inputBox = document.getElementById('input-box');
    var inputValue = inputBox.value.trim();

    if (inputValue !== '') {
        var listContainer = document.getElementById('listContainer');

        // Create new list item
        var listItem = document.createElement('li');
        listItem.textContent = inputValue;

        // Create purchase button
        var purchaseButton = document.createElement('button');
        purchaseButton.textContent = 'Purchase';
        purchaseButton.onclick = function() {
            // Prompt or mark item as purchased
            var confirmPurchase = confirm('Did you purchase this item?');
            if (confirmPurchase) {
                listItem.classList.add('checked');
            }
        };

        // Append purchase button to list item
        listItem.appendChild(purchaseButton);

        // Append list item to list container
        listContainer.appendChild(listItem);

        // Clear input box
        inputBox.value = '';
    }
}

// Function to clear the entire shopping list
function clearList() {
    var listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = ''; // Clear all list items
}
