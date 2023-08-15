import { useCallback, useState } from "react";
import MyCallBack from "./MyCallBack";

function MyIndex() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div className="border rounded-lg border-gray-300 p-5">
      <MyCallBack todos={todos} addTodo={addTodo} />
      <hr className="my-4"/>
      <div>
        Count: {count}
        <button onClick={increment} className="ml-2 p-1">
          +
        </button>
      </div>
    </div>
  );
}

export default MyIndex;
