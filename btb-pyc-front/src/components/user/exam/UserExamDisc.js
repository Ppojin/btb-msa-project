import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
//core compoennt
import UE_disc_Help from './UE_disc_Help';
import UE_disc_exinfo from './UE_disc_exinfo.js'
import GridContainer from 'components/utils/Grid/GridContainer.js'
import GridItem from 'components/utils/Grid/GridItem.js'

import UserExamTabs from 'components/utils/Tabs/UserExamTabs';
//import @material-ui/icons

import ListAlt from '@material-ui/icons/ListAlt'

export default function UserExamDisc(){

    
    const {test} = useSelector(state=>({
        test : state.questionList
    }))
    const dispatch = useDispatch();
    return(
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <UserExamTabs
                    title="Exam info : "
                    headerColor="primary"
                    tabs={[
                        {
                            tabName: "Help",
                            tabIcon: ListAlt,
                            tabContent: <UE_disc_Help/>
                        },
                        
                        {
                            tabName: "Exam discription",
                            tabIcon: ListAlt,
                            tabContent: <UE_disc_exinfo/>
                        },

                    ]}
                />
            </GridItem>
        </GridContainer>
    )
}