import {UserDetails} from "../components/Users_components/UserDetails";
import {useAppLocation} from "../hooks";
import {IUser} from "../interfaces";
import {useEffect, useState} from "react";
import {userService} from "../services";
import {useParams} from "react-router-dom";

const UserDetailsPage = () => {
    const {state} = useAppLocation<{user:IUser}>();
    const [userDetails, setUserDetails] = useState<IUser>(null)
    const {id} = useParams();
    useEffect(() => {
        if (state?.user){
            setUserDetails(state.user)
        }else {
            userService.getById(+id).then(({data})=>setUserDetails(data))
        }
    }, [id, state]);
    return (
        <div>
            {userDetails&&<UserDetails userDetails={userDetails}/>}
        </div>
    );
};

export {UserDetailsPage};