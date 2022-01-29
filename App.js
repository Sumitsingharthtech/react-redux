import React, { useReducer } from 'react';

const init=0;

const reducer=(state,action)=>{


if ( action.type==="Inc" ){
return state + 1; 
}
if ( action.type==="Dec" ){
return state - 1; 
}

  return state;

}

const App = () => {
 
 
 const [state,dispatch] = useReducer(reducer, init);

 return (
<>
<div>
<h1> Bank Account : {state} </h1>
<button onClick={()=>dispatch({type:"Inc"})} > Inc </button>
<button onClick={()=>dispatch({type:"Dec"})}  > Dec</button>

</div>

</>


  );
};

export default App;
