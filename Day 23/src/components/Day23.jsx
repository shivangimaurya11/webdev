import React, { useState, useEffect, useCallback } from "react";
import "./Day23.css";

function Day23() {
  const { execute, status, value, error } = useAsync(myFunction, false);

  return (
    <div className= "day23">
      {status === "idle" && <div>Click Here</div>}
      {status === "success" && <div>{value}</div>}
      {status === "error" && <div>{error}</div>}

      <button onClick={execute} disabled={status === "pending"} className ="day23-btn">
        {status !== "pending" ? "Click me" : "Loading..."}
      </button>
    </div>
  );
}


const myFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rnd = Math.random() * 10;
      rnd <= 5
        ? resolve("Submitted")
        : reject("Error");
    }, 2000);
  });
};



const useAsync = (asyncFunction, immediate = true) => {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  


  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then(response => {
        setValue(response);
        setStatus("success");
      })
      .catch(error => {
        setError(error);
        setStatus("error");
      });
  }, [asyncFunction]);

  

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export default Day23;