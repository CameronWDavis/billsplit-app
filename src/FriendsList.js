import { Friend } from "./Friend";

// Functional component for displaying a list of friends
export function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    // Unordered list to contain the list of friends
    <ul>
      {/* Map through the list of friends and render a Friend component for each */}
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
