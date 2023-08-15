import { useMemo, useState } from "react";

function MyMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div className="border rounded-lg border-gray-300 p-5">
      <div>
        <h2 className="text-lg font-bold mb-2">My Todos Memo</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo} className="mt-1 border-[#777] px-2 border-[1px] rounded">Add Todo</button>
      </div>
      <hr className="my-4"/>
      <div>
        Count: {count}
        <button onClick={increment} className="ml-2 p-1">
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default MyMemo;
