import { useEffect } from "react";

function InnerComponent({ handleCountChange }: any) {
  console.log("rendered innercomponent");

  useEffect(() => {
    console.log("calling api...");
    handleCountChange();
  }, []);

  return (
    <div>
      <h1>Inner Component Rendered At : {Date.now()}</h1>
      <button onClick={handleCountChange}>Change count in Inner</button>
    </div>
  );
}

export default InnerComponent;
