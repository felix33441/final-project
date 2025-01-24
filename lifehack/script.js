// Modal functions
function showModal(event) {
    event.preventDefault(); // Prevent form submission to avoid page reload
    // Show the modal after form submission
    document.getElementById("successModal").style.display = "block";
}

function closeModal() {
    // Hide the modal when the "Close" button is clicked
    document.getElementById("successModal").style.display = "none";
}

// Label focus effect (label moves to the top when clicked)
const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
    // When input is focused, move label to the top
    input.addEventListener('focus', function() {
        const label = this.previousElementSibling;
        label.style.fontSize = '12px';  // Smaller size when focused
        label.style.top = '0';          // Move label to the top
        label.style.left = '10px';      // Slightly adjust the position
    });

    // When input is blurred (user leaves the field)
    input.addEventListener('blur', function() {
        const label = this.previousElementSibling;
        // Only reset the label position if the field is empty
        if (this.value === '') {
            label.style.fontSize = '16px';  // Original size when not focused
            label.style.top = '10px';       // Original position
            label.style.left = '10px';      // Original position
        }
    });
});
