import { useState } from "react"

type ListProps = {
    initialItems: string[]
}

function List({ initialItems }: ListProps) {
  const [newItem, setNewItem] = useState('')
  const [list, setList] = useState(initialItems);

  function addToDoList() {
    setTimeout(() => {
      setList(state => [...state, newItem]);
    }, 500)
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item));
    }, 500)
  }

  return (
    <>
      <input placeholder="Novo item" value={newItem} onChange={ev => setNewItem(ev.target.value)} type="text"></input>
      <button onClick={addToDoList}>Adicionar</button>
      <ul>
        {list.map(item => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
            </li>
        ))}
      </ul>
    </>
  )
}

export default List