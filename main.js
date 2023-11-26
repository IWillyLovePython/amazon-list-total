function getCurrentListTotal() {
    let total = 0;
    let itemsClass = document.getElementsByClassName("a-spacing-none g-item-sortable");
    
    for (let itemIndex = 0; itemIndex < itemsClass.length; itemIndex++) {
        let price = Number(itemsClass[itemIndex].getAttribute("data-price"));
        total += price;
    }

    total = total.toFixed(2);

    return total;
}

function displayCurrentListTotal() {
    let total = getCurrentListTotal();
    const parentDiv = document.querySelector("div.a-row");

    const spanElement = document.createElement("span");
    spanElement.setAttribute("id", "profile-list-name");
    spanElement.setAttribute("aria-level", "2");
    spanElement.setAttribute("class", "a-size-medium a-text-bold");
    spanElement.setAttribute("role", "heading");
    spanElement.style.color = 'green';
    spanElement.textContent = `Total: $${total}`;
    
    parentDiv.appendChild(spanElement);
}

displayCurrentListTotal();
