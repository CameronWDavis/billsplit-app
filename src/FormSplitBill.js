import { useState } from "react";
import { Button } from "./App";

// Functional component representing a form to split a bill with a selected friend
export function FormSplitBill({ selectedFriend, onSplitBill }) {
  // State variables to manage form inputs
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Check if bill and paidByUser are provided
    if (!bill || !paidByUser) return;

    // Call the onSplitBill function to handle bill splitting
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  // Render the form for splitting a bill
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      {/* Header indicating the friend with whom the bill is split */}
      <h2>Split a bill with {selectedFriend.name}</h2>

      {/* Input for bill value */}
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      {/* Input for the user's expense */}
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      {/* Display the friend's expense (disabled input) */}
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      {/* Dropdown to select who is paying the bill */}
      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      {/* Button to submit the form */}
      <Button>Split bill</Button>
    </form>
  );
}
