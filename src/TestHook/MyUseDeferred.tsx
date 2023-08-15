import React, {
    useCallback,
    useDeferredValue,
    useEffect,
    useMemo,
    useState,
    useTransition,
  } from "react";
  import InnerComponent from "./InnerComponent";
  
  function MyUseDeferred() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(Date.now());
    const [input, setInput] = useState("");
    const [inputDecimal, setInputDecimal] = useState('');
    const [newTime, setNewTime] = useState(Date.now());
    const [isPending, startTransition] = useTransition();
    const [list, setList] = useState<number[]>([]);
  
    //   const deferred = useDeferredValue(input);
  
    //   const expensiveComputedValue = useMemo(() => {
    //     let j = 0;
  
    //     for (let i = 0; i < 900000000; i++) {
    //       j += i;
    //     }
  
    //     return j + Date.now();
    //   }, [deferred]);
  
    //   useEffect(() => {
    //     let arr = [];
    //     for (let i = 0; i < 20000; i++) {
    //       arr.push(i);
    //     }
  
    //     setList(arr);
    //   }, []);
  
    // new function
    const handleCountChange = () => {
      setCount((count) => count + 1);
    };
  
    const handleOtherStateChange = () => {
      setOtherState(Date.now());
    };
  
    const handleInput = (e: any) => {
      setInput(e.target.value);
  
      startTransition(() => {
        let arr = [];
        for (let i = 0; i < 9000; i++) {
          arr.push(i);
        }
        //   setNewTime(Date.now());
        setList([...arr]);
      });
    };
  
    const handleInputDecimal = (e: any) => {
      if(parseInt(e.target.value) > 100 || parseInt(e.target.value) < 0) {
        alert("Should be maximum value for decimal number between 0 and 100!");
        setInputDecimal('');
      } else {
        setInputDecimal(e.target.value);
      }
    };
  
    return (
      <div className="p-7">
        <div className="flex ">
          <div className="mr-4">
            <label className="block">Multiply Number : </label>
            <input type="number" className="border px-3 py-1 rounded focus-within:outline-none" defaultValue={input} onChange={handleInput} />
          </div>
          <div>
            <label className="block">Show Decimal Number : </label>
            <input type="number" className="border px-3 py-1 rounded focus-within:outline-none" defaultValue={inputDecimal} onChange={handleInputDecimal} />
          </div>
        </div>
        {isPending ? (
          "Loading..."
        ) : (
          <div className="mt-3 px-3">
            {/* <h1>New Time : {newTime}</h1> */}
            {list.map((l) => (
              <div key={l}>
                {
                  input && (
                    inputDecimal && parseInt(inputDecimal) < 100? `${l} * ${input} = ${(l*parseFloat(input)).toFixed(parseInt(inputDecimal))}` :
                    `${l} * ${input} = ${(l*parseFloat(input))}`
                  )
                }
              </div>
            ))}
          </div>
        )}
  
        {/* <div className="my-40">
          <h1>Expensive Value - {expensiveComputedValue}</h1>
          <br /> <br />
          <h1>Other State from Sample component : {otherState}</h1>
          <button onClick={handleOtherStateChange}>Other State Change</button>
        </div>
  
        <h1>Count in sample : {count}</h1>
        <InnerComponent handleCountChange={handleCountChange} /> */}
      </div>
    );
  }
  
  export default MyUseDeferred;
  
  // const largeList: any[] = [];
  
  // for (let i = 0; i < 90000; i++) {
  //   largeList.push({
  //     id: i,
  //     value: "i",
  //   });
  // }
  
  // export default function Sample() {
  //   const [name, setName] = useState("");
  //   const [list, setList] = useState(largeList);
  //   const [isPending, startTransition] = useTransition();
  
  //   function handleChange(e: any) {
  //     setName(e.target.value);
  //     startTransition(() => {
  //       setList(largeList.filter((item) => !item.value.includes(e.target.value)));
  //     });
  //   }
  
  //   return (
  //     <>
  //       <input type="text" value={name} onChange={handleChange} />
  //       {isPending ? (
  //         <div>Loading...</div>
  //       ) : (
  //         list.map((item) => <div key={item.id}>id: {item.id}</div>)
  //       )}
  //     </>
  //   );
  // }
  