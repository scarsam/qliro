import logo from "./logo.svg";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { selectUser } from "./store/reducers/userReducer";
import { fetchUserAsync } from "./store/reducers/userReducer";

function App() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, [user, dispatch]);

  console.log(user);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <button onClick={() => dispatch(userAsync())}>Fetch</button> */}
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
