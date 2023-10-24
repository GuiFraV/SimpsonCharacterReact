import { useEffect, useState } from "react"
import Characters from "./Characters"

function List() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    const getData = async () => {
      try{
        const resp = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const json = await resp.json();
        setData(json)
        setLoading(false)

      }catch(e){
        console.log(e)
        setLoading(false)
        return null
      }
    }
    getData()
  },[])


  return (
    <div>
      <h1>List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (data.map((char, i) => {
        return (
          <Characters 
            key={i}
            name={char.character}
            quote={char.quote}
            image={char.image}
          />  
        )
      }))}
    </div>
  )
}

export default List