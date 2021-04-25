import { useRecoilState } from "recoil";
import { doubleInitState, initState } from "./store";

function Count() {
  const [count, setCount] = useRecoilState(initState);
  const [doubleCount] = useRecoilState(doubleInitState)
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <p>{doubleCount}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default Count;
