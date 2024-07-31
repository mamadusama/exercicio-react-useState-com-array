import { useState } from "react";

function App() {
  const [input, setInput] = useState("")
  const [tarefas, setTarefas] = useState([]);


  function handelTarefas(e){
    e.preventDefault();
    alert(`${input}  adicionado com sucesso`);
    setTarefas([...tarefas, input]);

    setInput("");

  }
  return (
    <>
      <h1>Lista tarefa</h1>

      <div>
        <form onSubmit={handelTarefas}>
          <label>Adicionar tarefa</label><br></br>
          <input
            placeholder="adiciiionar tarefa"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /><br></br>

          <button type="submit">adicionar</button>
        </form>

        <ul>
      {tarefas.map((tarefa) => (
            <li>{tarefa}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
