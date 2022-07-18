
import './App.css';
import { useDeferredValue, useState,useTransition } from 'react';
let a = new Array(10000).fill(0)

function App() {
  let [name, setName] = useState('')
  let [isPending, startTransition] = useTransition();
  //startTransition으로 문제의 state변경 감싸기.
  //ispending은 처리중일때 ture -> ispending을 이용해서 UI 만들 수 있다. loading
  console.log(isPending)
  let state = useDeferredValue(name)//늦게 처리를 원합니다. 

  return (
    <div className="App">
      <input onChange={
        (e)=>
        startTransition(()=>setName(e.target.value)
        )}/>
      {
       a.map(()=>{
          return <div>{state}</div>
        })
      }
    </div>
  );
}

export default App;
