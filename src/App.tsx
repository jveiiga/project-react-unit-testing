import { useState } from "react"

function App() {
  const [list, setList] = useState(['Diego', 'Rodz', 'Mayk'])

  function addToDoList() {
    setList(state => [...state, 'Novo'])
  }

  return (
    <>
      <button onClick={addToDoList}>Adcionar</button>
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
