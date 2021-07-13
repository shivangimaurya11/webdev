import React , {useState} from "react";




function App(props)
{
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    return(
        <div className="App">
            <button onClick={() => {
                // const newCount=count+1;
                setCount(count+1);
                // console.log(count);
            }
            }>{count}</button>

<button onClick={() => {
                // const newCount1=count1+1;
                setCount1(count1+1);
                // console.log(count1);
            }
            }>{count1}</button>



<button onClick={() => {
                // const newCount1=count1+1;
                setCount2(count2+1);
                // console.log(count1);
            }
            }>{count2}</button>
        </div>

    );
}
export default App;
