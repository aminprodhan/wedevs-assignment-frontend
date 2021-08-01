import react,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {SyncOutlined} from '@ant-design/icons';
import {useRouter} from 'next/router';
import {getSessionUser} from '~/store/auth/action';
const UserRoute=({children})=>{
    const auth=useSelector(state => state.auth);

    const router=useRouter();
    const [ok,setOk]=useState(false);
    

    useEffect(()=>{
        fetchUser();
    },[]);
    const fetchUser=async()=>{
        if(!getSessionUser() || getSessionUser() == '')
           router.push("/login");
        else
            setOk(true);

        //console.log("user="+getSessionUser());
        //if(!getSessionUser() || getSessionUser() == '')
           // router.push("/login");
    }
    return(
        <>
            {!ok ? <SyncOutlined span 
                        className="d-flex justify-content-center display-1 text-primary p-5" /> : <>{children}</>}  
        </>
    )
       
}
export default UserRoute;