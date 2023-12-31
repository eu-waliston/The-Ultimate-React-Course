import React from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return <button className="button" onClick={onClick}>{children}</button>
}

export default function App() {
  const [friends, setFriends] = React.useState(initialFriends)
  const [showAddFriend, setshowAddFriend] = React.useState(false);
  const [selectFriend, setSelectFriend] = React.useState(null)

  function handleShoeAddFriend() {
    setshowAddFriend((show) => !show)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
    setshowAddFriend(false)
  }

  function handleSeclection(friend) {
    setSelectFriend(friend)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onSelection={handleSeclection} />
        {
          showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} selectFriend={selectFriend} />
        }
        <Button onClick={handleShoeAddFriend}>
          {
            showAddFriend ? 'Close' : 'Add Friend'
          }
        </Button>

        {
          selectFriend && < FormSplitBill selectFriend={selectFriend} />
        }
      </div>
    </div>
  )
};

function FriendsList({ friends, onSelection, selectFriend }) {
  return <ul>
    {friends.map(friend => (
      <Friend 
        friend={friend}
        key={friend.id}
        selectFriend={selectFriend}
        onSelection={onSelection}
      />
    ))}
  </ul>
}

function Friend({ friend, onSelection, selectFriend }) {

  const isSelected = selectFriend.id === friend.id

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {
        friend.balance < 0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)}
          </p>
        )
      }

      {
        friend.balance > 0 && (
          <p className="green">
            {friend.name} You owe  {Math.abs(friend.balance)}
          </p>
        )
      }

      {
        friend.balance === 0 && (
          <p className="">
            You and {friend.name} are even
          </p>
        )
      }

      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  )
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID()

    if (!name || !image) return;

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    onAddFriend(newFriend);

    setName('')
    setImage('https://i.pravatar.cc/48')
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>📷 Image Url</label>
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />


      <Button>Add</Button>
    </form>
  )
}

function FormSplitBill({ selectFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectFriend.name}</h2>

      <label>💰 Bill values</label>
      <input type="text" />

      <label>🧍 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 {selectFriend.name}'s expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  )
}