import  {useState, useEffect} from 'react'

import  { firestore } from './firebaseApp'

function App(){
    const [tarefas, setTarefas] =  useState([])

    function loadItems(){
    firestore.collection("tarefas").get().then((querySnapshot) => {
        const items = []
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                texto: doc.data()['texto'],
                completada: doc.data()['completada']
            })
        })
        setTarefas(items)
    })
    }

    useEffect(() => {
        loadItems()
    })

    return (
        <div className="App">
            <ul>
                {tarefas.map((t) =>(
                    <li>{t.texto}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
