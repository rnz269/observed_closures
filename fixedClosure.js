import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";


/* Open up devtools and observe [[scope]] property on hello function! Can see each iteration 0-4 captures a new count, setCount closure. */
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(function hello() {
        if (count < 5) {     
            console.log(hello.prototype)
            setCount(count + 1);
        }
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  return <h1>{count}</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
