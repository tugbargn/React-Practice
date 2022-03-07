import React, {useState} from 'react';

function App(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>Merhaba</h3>
      <h1>useState</h1>
      <h4>Count:[count]</h4>
      <div>
        <button onClick={() => {
          setCount[count - 1];
        }
        }>Azalt</button>
        <button onClick={() => {
          setCount[count + 1];
        }
        }>Artır</button>
      </div>
    </div>
  )
}

export default App;
