import { useContext } from "react";
import {AuthContex} from '../Providers/AuthProvider'
import { useQuery } from "@tanstack/react-query";

const UserRole = ()=>{
    const {user} = useContext(AuthContex)
    const {data:dataUser,isLoading} = useQuery({
        queryKey: [ 'user',user?.email],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
            return res.json();
        }  
    })
    return [dataUser,isLoading]
}
export default UserRole;