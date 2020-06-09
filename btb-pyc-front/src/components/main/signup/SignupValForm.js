import {useState, useEffect} from 'react';
import {signup} from 'shared/reducers/entities/user.reducer.js'
import { useDispatch } from 'react-redux';

const SignupValForm =(callback, validate) =>{
    const [values, setValues] = useState({});
    const [signupValErrors, setSignupErrors] = useState({});
    const [isValChecking, setIsValChecking] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=> {
        if(Object.keys(signupValErrors).length === 0 && isValChecking){
            callback()
        }
    }, [callback, isValChecking, signupValErrors]);

    const signuphandleCheck = (event) => {
        if (event) event.preventDefault();
        setSignupErrors(validate(values));
        console.log("signup values : ", values)
        dispatch(signup(values))
        setIsValChecking(true);
    };

    const signuphandleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}))
    }

    return{
        signuphandleChange,
        signuphandleCheck,
        values,
        signupValErrors,
    }
}

export default SignupValForm