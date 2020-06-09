import {useState, useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {login, } from 'shared/reducers/entities/user.reducer.js'


const LoginValForm =(callback, validate) =>{
    const [values, setValues] = useState({});
    const [loginValErrors, setLoginErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const {entity, headers} = useSelector(user=>({entity: user.entity, headers:user.headers}),[])
    const dispatch = useDispatch();
    // const stateUserData = useSelector((state)=>state.user);
    // const logged = stateUserData.UserInfo.logged
    // const customerpk = stateUserData.UserInfo.customerpk;
    // const token = stateUserData.UserInfo.token;
    useEffect(
        (()=> {if(Object.keys(loginValErrors).length === 0 && isSubmitting){ callback() } }), 
        [callback, isSubmitting, loginValErrors]
    );

    const loginhandleSubmit = (event) => {
        // const {userReducer} = userReducer.state;
        console.log('values : ',values)
        if (event) event.preventDefault();
        setLoginErrors(validate(values));

        // console.log("entity",{entity}) //undefined
        // console.log("headers : ",{headers}) // undefined

        // dispatch action(entity)
        dispatch(login(values))
        // console.log("loginvalform loginhandleSubmit dispatch : "+dispatch(login(values))) // [object Promis]
        //login success ? localStroage.setItem : return false
        // if(logged === true){
        //     localStorage.setItem(
        //         "userInfo",
        //         JSON.stringify({
        //             customerpk : customerpk,
        //             token : token
        //         }.then(this.props.history.push('/user/myprofile'))
        //     ))
        // }
        // console.log("data - action.type : "+userReducer) // undefined
        // console.log("data - action.payload.headers : "+action.payload.headers)
        // console.log("dispatch : ", dispatch(login(values))) // Promis:{}
        setIsSubmitting(true)
    };

    const loginhandleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}))

        login(values);
        
    }

    return{
        loginhandleChange,
        loginhandleSubmit,
        values,
        loginValErrors,
    }

}

export default LoginValForm