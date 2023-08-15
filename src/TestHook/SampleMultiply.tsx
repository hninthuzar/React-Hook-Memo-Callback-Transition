import React, {
  useState,
  useTransition,
} from "react";

function Sample() {
  const [input, setInput] = useState("");
  const [inputDecimal, setInputDecimal] = useState('');
  const [isPending, startTransition] = useTransition();
  const [list, setList] = useState<number[]>([]);

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
    const decimalValue = parseInt(e.target.value);
    if(decimalValue > 100 || decimalValue < 0) {
      alert("Should be maximum value for decimal number between 0 and 100!");
      setInputDecimal('0');
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
          <input type="number" className="border px-3 py-1 rounded focus-within:outline-none" value={inputDecimal} onChange={handleInputDecimal} />
        </div>
      </div>
      {isPending ? (
        "Loading..."
      ) : (
        <div className="mt-3 px-3">
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

    </div>
  );
}

export default Sample;

