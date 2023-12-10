import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(initialName);

  function clickHandler() {
    setIsEditing((editing) => !editing);
  }

  function changeHandler(event) {
    setNewName(event.target.value);
  }

  let editablePlayerName = <span className='player-name'>{newName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type='text' required value={newName} onChange={changeHandler} />
    );
  }
  return (
    <li>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={clickHandler}> {isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
