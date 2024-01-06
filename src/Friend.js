import { Button } from "./App";

// Functional component representing an individual friend in the list
export function Friend({ friend, onSelection, selectedFriend }) {
  // Check if the current friend is selected
  const isSelected = selectedFriend?.id === friend.id;

  return (
    // List item with conditional class based on selection state
    <li className={isSelected ? "selected" : ""}>
      {/* Display friend's image */}
      <img src={friend.image} alt={friend.name} />

      {/* Display friend's name */}
      <h3>{friend.name}</h3>

      {/* Display balance information based on different conditions */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {/* Button to select/deselect the friend */}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
