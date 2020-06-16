import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//core css
import UserExamList from './UserExamList.js'
import UserExamDisc from './UserExamDisc.js'
//core component
import { getExamList, ExamFinish } from 'shared/reducers/reducers/ExamReducer';

// export const userData = useSelector(state=>state.user)

export default function UserExam(){
    return(
        <div>
            <UserExamList/>
            <hr/>
            <UserExamDisc/>
            <hr/>
        </div>

    )
}