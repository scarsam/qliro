import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectUser } from "../store/reducers/userReducer";
import { fetchUserAsync } from "../store/reducers/userReducer";

const Customer: React.VFC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, [user, dispatch]);

  return <p>Render grid component</p>;
};

export default Customer;
