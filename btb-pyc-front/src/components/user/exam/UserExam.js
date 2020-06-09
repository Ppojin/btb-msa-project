import React from 'react';
//core css
import UserExamList from './UserExamList.js'
import UserExamDisc from './UserExamDisc.js'
export default function UserExam(){
    return(
        <div>
            <UserExamList/>
            <hr/>
            <UserExamDisc/>
        </div>

    )
}