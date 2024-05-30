import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux/cake/cakeAction";


function CakeContainer() {
  const [value,setValue]=useState(0);
  //this hook accepts a function as its parameter : selector function
  //useSelector hooks return whatever returns by  selector  function 
    const state = useSelector((state) => state.cake);
    // console.log(state);

    //return reference to the dispatch function in redux store
    const dispatch = useDispatch();
  return (
    <div>
        <h2>cake number : {state.numOfCakes} </h2>
        <input type="number" value={value} onChange={(e) =>setValue(e.target.value)}/>
        <button onClick={()=>dispatch(buyCake(value))}>Buy Cake</button>
       
    </div>
  )
}

export default CakeContainer;