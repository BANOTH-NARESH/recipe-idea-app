import { useState } from "react";
function App(){
  const [count, setcount]=useState(0);
  return (
    <div>
      {count}
  </div>
  )
}

export default App;
