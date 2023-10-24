function Characters({name, quote, image}) {
  return (
    <div>
        <div>
            <img 
                src={image} 
                alt={name} 
            />
        </div>
        <div>
            <h3>Character : {name}</h3>
            <p>"{quote}"</p>
        </div>
    </div>
  )
}

export default Characters