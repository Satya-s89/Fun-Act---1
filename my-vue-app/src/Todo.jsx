import { useState } from "react"

const Todo =() => {
    const[inputText,setInputText] = useState("");
    const[todos,setTodos] = useState([]);

    function takeInput(event){
        console.log(event.target.value);
        setInputText(event.target.value);
    }

    function addtodos(){
        const temTodos = [...todos];
        const newData = {
            description: inputText,
            status :false,
        } 
        temTodos.push(newData);
        setTodos(temTodos);
        setInputText("");
    }
    return(
        <div>
            <div>
                <input type="text" onChange={takeInput}/>
                <button onClick={addtodos}>Add Todo</button>
            </div>

            <div>
                {
                    todos.map((ele) => {
                        <div>
                            <p>Description: {ele.description}</p>
                            <p>Status: {ele.status? "Completed" : "Pending"}</p>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default Todo