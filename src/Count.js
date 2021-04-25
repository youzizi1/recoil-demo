import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { doubleInitState, initState,userInfoInitState } from "./store";

const User = () => {
  const userInfoStatus = useRecoilValueLoadable(userInfoInitState)
  switch (userInfoStatus.state) {
    case 'hasValue':
      return <div>{userInfoStatus.contents.username}</div>
    case 'loading':
      return <div>loading</div>
    case 'hasError':
      throw userInfoInitState.contents
    default: 
      return ''
  }
}

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
      <User />
    </div>
  );
}

export default Count;
