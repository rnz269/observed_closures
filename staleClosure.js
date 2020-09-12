import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

/* Open up devtools and observe [[scope]] property on hello function! Can see stale closure firsthand. */
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    var stop = 0;
    let id = setInterval(function hello() {
      setCount(count + 1);
      if (stop < 15) {
        console.log(hello.prototype);
        stop = stop + 1;
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
