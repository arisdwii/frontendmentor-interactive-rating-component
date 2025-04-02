// Select the elements for rating and thank you states
const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thankyou-state");

// Select all rating buttons and the element to display the selected value
const selectValue = document.querySelectorAll("#select-value");
const rateValue = document.getElementById("rate-value");

// Variable to store the selected rating value
let selectedValue = null;

// Add a click event listener to each rating button
selectValue.forEach((selectVal) => {
  selectVal.addEventListener("click", (e) => {
    e.preventDefault(); // Prevents default behavior (if any)

    // Remove 'active' class from all rating buttons
    selectValue.forEach((item) => item.classList.remove("active"));

    // Toggle 'active' class on the selected rating button
    selectVal.classList.toggle("active");

    // Store the selected rating value
    selectedValue = selectVal.value;
  });
});

// Add click event listener to the submit button
document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault(); // Prevents default behavior (if any)

  // Check if a rating has been selected before submitting
  if (selectedValue) {
    // Hide the rating state
    ratingState.style.display = "none";

    // Show the thank you state
    thankyouState.style.display = "block";

    // Display the selected rating value
    rateValue.textContent = selectedValue;
  }
});
