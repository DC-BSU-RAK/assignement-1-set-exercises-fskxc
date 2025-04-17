window.onload = function() {
  // Get the button with id "calcBtn" and set its click action to run the calculate function
  document.getElementById("calcBtn").onclick = calculate;
};
// This function runs when the button is clicked
function calculate() {
  // Get the value from the Petrol_Price input and change it to a number
  var price = Number(document.getElementById("Petrol_Price").value);
  // Get the value from the litres input and change it to a number
  var litres = Number(document.getElementById("liters").value);
  // Multiply price and litres to get the total cost
  var total = price * litres;
  // Change the text in the totalAmount element to show the total cost with a $ and two decimals
  document.getElementById("totalAmount").innerText = "$" + total.toFixed(2);
}