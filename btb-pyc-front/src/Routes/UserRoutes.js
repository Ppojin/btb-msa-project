//component import 
import React, {useReducer} from 'react';
import UserProfile from '../components/user/profile/UserProfile.js'
import UserExam from '../components/user/exam/UserExam.js';
import UserExamResult from '../components/user/examresult/UserExamResult.js'
//css icon import 

import { BarChart } from '@material-ui/icons';
import { LibraryBooks } from '@material-ui/icons';
import { Dashboard } from '@material-ui/icons';
// import handleMyprofile from './event/handleMyprofile'
import { useSelector } from 'react-redux';
import { userReducer } from 'shared/reducers/reducers/UserReducer.js';

const dashboardRoutes = [
    {
        path: "/profile",
        name : "MyProfile",
        icon: Dashboard,
        component : UserProfile,
        layout:"/user",
    },
    {
        path: "/exam",
        name : "Exam",
        icon: LibraryBooks,
        component : UserExam,
        layout:"/user"
    },
    {
        path: "/examresult",
        name : "Exam result",
        icon: BarChart,
        component : UserExamResult,
        layout:"/user"
    },
]

export default dashboardRoutes