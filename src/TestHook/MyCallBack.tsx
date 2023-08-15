import { memo } from "react";

const MyCallBack = ({
  todos,
  addTodo,
}: {
  todos: string[];
  addTodo: () => void;
}) => {
  console.log("child render");
  return (
    <>
      <h2 className="text-lg font-bold mb-2">My Todos CallBack</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo} className="mt-1 border-[#777] px-2 border-[1px] rounded">Add Todo</button>
    </>
  );
};

export default memo(MyCallBack);
