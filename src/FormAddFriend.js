import { useState } from "react";
import { Button } from "./App";
// Functional component representing a form to add a new friend
export function FormAddFriend({ onAddFriend }) {
  // State variables to manage form inputs
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Check if name and image are provided
    if (!name || !image) return;

    // Generate a unique ID using crypto.randomUUID() (assuming crypto is imported)
    const id = crypto.randomUUID();

    // Create a new friend object with the provided details
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`, // Appending the unique ID to the image URL
      balance: 0,
    };

    // Call the onAddFriend function to add the new friend to the list
    onAddFriend(newFriend);

    // Clear the form inputs after submission
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  // Render the form for adding a new friend
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* Input for friend name */}
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Input for image URL */}
      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {/* Button to submit the form */}
      <Button>Add</Button>
    </form>
  );
}
