const input = require("@mimo-org/input");

const items = [];

function displayList(items) {
  console.log("\nHere is the list of items:");
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

function addItem(items, itemToAdd) {
  items.push(itemToAdd);
  console.log(`"${itemToAdd}" has been added to the list.`);
}

function removeItem(items, itemIndex) {
  displayList(items);

  if (itemIndex > 0 && itemIndex <= items.length) {
    const removedItem = items.splice(itemIndex - 1, 1)[0];
    return removedItem;
  } else {
    console.log("Invalid number. Please try again.");
  }
}

let running = true;

while (running) {
  console.log("\nChoose an option:");
  console.log("1. View the list");
  console.log("2. Add an item to the list");
  console.log("3. Remove an item from the list");
  console.log("4. Exit");

  const choice = input("Enter your choice (1-4): ");

  if (choice == 1) {
    displayList(items);
  } else if (choice == 2) {
    const newItem = input("Enter a new item to add to the list: ");
    addItem(items, newItem);  } else if (choice == 3) {
    const itemIndex = parseInt(input("Enter the number of the item to remove: "), 10);
    const removedItem = removeItem(items, itemIndex);
    if (removedItem) {
      console.log(`"${removedItem}" has been removed from the list.`);
    }
  } else if (choice == 4) {
    running = false;
  } else {
    console.log("Invalid choice, please select a valid option.");
  }
}