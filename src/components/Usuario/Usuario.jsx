import React, { useEffect, useState } from 'react';

function Usuario() {
    const url = 'https://api.opendota.com/api/proPlayers'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
      const response = await fetch(url)
      const responseJSON = await response.json()
      setTodos(responseJSON)
    }
    useEffect(() => {
      fetchApi()
    }, [])
    return (
      <div className="">
        <ul>
          { !todos ? 'Cargando...' :
          todos.map( (todo, index)=>{
            return <li key={index}>{todo.name}</li>
          })
          }
        </ul>
      </div>
    );
  }
  export default Usuario;