import {useState, useEffect} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {login, } from 'shared/reducers/reducers/UserReducer.js'
import {fetchData} from 'shared/reducers/reducers/MyprofileReducer.js'

const LoginValForm =(validate) =>{
    const [values, setValues] = useState({});
    const [loginValErrors, setLoginErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const pk = localStorage.getItem("userInfo")
    const pk_customerpk = JSON.parse(pk).customerpk
    const pk_token = JSON.parse(pk).token
    const dispatch = useDispatch();
    const {isLogged, token, customerpk} = useSelector(state=> ({
        isLogged : state.user.isLogged,
        token : state.user.UserInfo.token,
        customerpk : state.user.UserInfo.customerpk,
    }))
        
    useEffect(
        (()=> {if(Object.keys(loginValErrors).length === 0 && isSubmitting){} }), 
        [isSubmitting, loginValErrors]
    );

    const loginhandleSubmit = (event) => {
        // const {userReducer} = userReducer.state;
        console.log('values : ',values)
        if (event) event.preventDefault();
        setLoginErrors(validate(values));

        // console.log("entity",{entity}) //undefined
        // console.log("headers : ",{headers}) // undefined

        // dispatch action(entity)
        dispatch(login(values)).then(
            ()=> {if(isLogged ===true){
                localStorage.setItem(
                    "userInfo",
                    JSON.stringify({
                        customerpk: customerpk,
                        token: token,
                    })
                )
            }}
        ).then(
            ()=> {
                return(
                    console.log("fetchdata : ", JSON.parse(localStorage.getItem("userInfo")))
                )
            }
        )

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