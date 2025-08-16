// ------------------------
// Smoothie Class Definition
// ------------------------
class Smoothie {
    constructor(size, base, fruits, extras) {  
        // Step 1: Initialize the smoothie with size, base, fruits, extras, and calculate its price
        this.size = size;
        this.base = base;
        this.fruits = fruits;
        this.extras = extras;
        this.price = this.calculatePrice();
    }

    calculatePrice() {  
        // Step 2: Calculate total price based on size and extras
        let basePrice = 0;

        // Set price depending on smoothie size
        if (this.size === "small") basePrice = 3;
        if (this.size === "medium") basePrice = 5;
        if (this.size === "large") basePrice = 7;

        // Add $1 for each extra ingredient
        basePrice += this.extras.length * 1;

        return basePrice; // Final price
    }

    getDescription() {  
        // Step 3: Return a formatted summary of the smoothie order
        return `
            <h2>✅ Your Smoothie Order</h2>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Fruits:</strong> ${this.fruits.length > 0 ? this.fruits.join(", ") : "None"}</p>
            <p><strong>Extras:</strong> ${this.extras.length > 0 ? this.extras.join(", ") : "None"}</p>
            <p><strong>Total Price:</strong> $${this.price.toFixed(2)}</p>
        `;
    }
}

// ------------------------
// Form Submission Handling
// ------------------------
document.getElementById("smoothieForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    // Step 4: Stop page from reloading when form is submitted

    // Step 5: Get selected smoothie size and base from the form
    let size = document.getElementById("size").value;
    let base = document.getElementById("base").value;

    // Step 6: Collect selected fruits (checkbox values) into an array
    let fruits = Array.from(document.querySelectorAll("input[name='fruit']:checked"))
                      .map(fruit => fruit.value);

    // Step 7: Collect selected extras (checkbox values) into an array
    let extras = Array.from(document.querySelectorAll("input[name='extra']:checked"))
                      .map(extra => extra.value);

    // Step 8: Create a Smoothie object with the chosen options
    let mySmoothie = new Smoothie(size, base, fruits, extras);

    // Step 9: Show the order summary inside the "orderSummary" div
    document.getElementById("orderSummary").innerHTML = mySmoothie.getDescription();
});
