import { useEffect } from "react"
import { fetchUsers } from "../redux/user/userAction"
import { useDispatch, useSelector } from "react-redux";


function UserList() {
    const dispatch = useDispatch();
    const {loading,erorr,data} =useSelector((state) => state.users);
   
   useEffect(()=>{
    dispatch(fetchUsers());
   },[dispatch]);


   return(
    <div>
        <h2>UserList</h2>
        { loading ?
        (<p>loading...</p> )
        : erorr ? (<p> {erorr}</p>) 
        :(<div>
            {
             data.map((user) => <li key={user.id}>{user.name}</li>)
             }
         </div>)
        }
    </div>
   );
}

export default UserList;