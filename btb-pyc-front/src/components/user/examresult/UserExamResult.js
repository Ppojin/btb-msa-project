import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//core component
import UserExamReslutList from './UserExamResultList.js'
export default function UserExamResult(){
    const examReusltData =  useSelector(state=>({
        examResultData:state.examResult.entities
    }))
    const dispatch = useDispatch()
    return(
        <div>
            <UserExamReslutList/>
        </div>
    )
}