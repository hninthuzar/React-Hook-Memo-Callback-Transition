import { useState } from "react";
import MyIndex from "./MyIndex";
import MyMemo from "./MyUseMemo";
import SampleMultiply from "./SampleMultiply";

function App() {
  const [tabChange, setTabChange] = useState("transition");
  const activeClass = "border-[#2522d8] text-[#2522d8]";

  const handleTabChange = (value: string) => {
    setTabChange(value);
  }

  return (
    <>
      <div className="p-7">
        <button className={`border-[#333] border-[1px] rounded px-2 mr-3 ${tabChange == 'transition'? activeClass : ''}`} onClick={()=>handleTabChange("transition")}>Use Transition</button>
        <button className={`border-[#333] border-[1px] rounded px-2 mr-3 ${tabChange == 'memo'? activeClass : ''}`} onClick={()=>handleTabChange("memo")}>Use Memo</button>
        <button className={`border-[#333] border-[1px] rounded px-2 ${tabChange == 'callback'? activeClass : ''}`} onClick={()=>handleTabChange("callback")}>Use Callback</button>
      </div>
      {
        tabChange === "transition" && <SampleMultiply />
      }
      {
        tabChange === "memo" && (
          <div className="text-center p-7">
            <MyMemo />
          </div>
        )
      }
      {
        tabChange === "callback" && (
          <div className="text-center p-7">
            <MyIndex />
          </div>
        )
      }
      
    </>
  );
}

export default App;
