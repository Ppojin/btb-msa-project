import React from 'react';
//core compoennt
import UE_disc_Help from './UE_disc_Help';
import UE_disc_exinfo from './UE_disc_exinfo.js'
import GridContainer from 'components/utils/Grid/GridContainer.js'
import GridItem from 'components/utils/Grid/GridItem.js'
import ExamTable from 'components/utils/Table/ExamTable.js'
import Card from 'components/utils/Card/Card.js'
import CardHeader from 'components/utils/Card/CardHeader.js'
import CardBody from 'components/utils/Card/CardBody.js';
import UserExamTabs from 'components/utils/Tabs/UserExamTabs';
//import @material-ui/icons

import Info from '@material-ui/icons/Info.js'
import Help from '@material-ui/icons/Help.js'
import ListAlt from '@material-ui/icons/ListAlt'

export default function UserExamDisc(){
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