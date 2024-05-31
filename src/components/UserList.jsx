import { useEffect } from "react"
import { fetchUsers } from "../redux/user/userAction"
import { useDispatch, useSelector } from "react-redux";


function UserList() {
    const dispatch = useDispatch();
    const state =useSelector((state) => state.users);
    console.log(state);
   useEffect(()=>{
    dispatch(fetchUsers());
   },[dispatch]);
   return(
    <div>UserList</div>
   )
  
}

export default UserList