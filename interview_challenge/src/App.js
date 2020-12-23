import React, {useState} from 'react'
import './App.css';
import axios from "axios";
function App() {
  const [state, setState] = useState('');
  const [results,setResults] = useState([]);

  const handleSearch = (state) => {
      axios.get(`http://api.tvmaze.com/search/shows?q=${state}`)
      .then(res => {
        setResults(res.data)
      })
  }
  const handleChange = (e) => {
     setState(e.target.value)
  }
  console.log(results)
  return (
    <div className="App">
      <header className='header'>Show Finder</header>
       <br/>
      <div style={{margin:'20px auto',width:'300px'}}>
        <input style={{height:'30px',marginRight:'5px',backgroundColor:'#F0F8FF',width:'200px'}}variant="outlined" onChange={handleChange} />
        <button style={{color:'white',backgroundColor:'darkblue',height:'30px'}}onClick={()=>handleSearch(state)}>Search</button>
     </div>
        {results.map((result, index) => {
        return (
            <div key={index} style={{display:'flex', width:'900px',height:'300px',margin:'100px auto'}}>
               <img src={result.show.image&&result.show.image.medium} alt=''style={{width:'200px',height:'300px'}}/>
               <div style={{backgroundColor:'#F0F8FF',width:'700px',paddingLeft:'10px'}}>
                <h3 style={{textAlign:'center'}}>{result.show.name}</h3>
                <p style={{textAlign:'left',width:'600px'}}dangerouslySetInnerHTML={{__html:  result.show.summary}}/>
              </div>
            </div>
          )
        })}
    </div>
  );
}

export default App;
