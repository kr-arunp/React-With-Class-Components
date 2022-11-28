import React,{useState} from 'react'

function QuoteGenerator() {
 const [isLoading, setIsLoading] = useState(false)
    const [Quotes, setQuotes] = useState([]);
    let res = []; 
    
 const Quote =({ text, author }) => {
    return (
      <span>
        <strong>{text}</strong> &nbsp; <span>{author}</span>
      </span>
    )
  } 
 
const getQuote=()=>{
 setQuotes([])
  setIsLoading(true)
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
      setQuotes(data);
      })
 .catch(() => {
     setIsLoading(false)
    })
 
}


  return (
    <>
    <div>       
              {Quotes.map((quote,i) => {
                  return (
                  <p>
                     <p>
                     {quote.text}
                     <p>
                      <b>{ quote.author}</b>
                     </p>
                     </p>  
                  
                  </p>
                  )
              }
              )}
              
              
        
    </div>
    <button onClick={getQuote}>Get New Quote</button>
    </>
  )
}

export default QuoteGenerator