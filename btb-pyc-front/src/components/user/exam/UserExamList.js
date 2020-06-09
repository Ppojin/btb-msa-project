import React from 'react';

//core component
import GridContainer from 'components/utils/Grid/GridContainer.js'
import GridItem from 'components/utils/Grid/GridItem.js'
import ExamTable from 'components/utils/Table/ExamTable.js'
import Card from 'components/utils/Card/Card.js'
import CardHeader from 'components/utils/Card/CardHeader.js'
import CardBody from 'components/utils/Card/CardBody.js';
//css style
import userExamListStyle from 'assets/jss/components/styles/userExamTableStyle.js'

export default function userExamList (){
    const classes = userExamListStyle();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>ExamList</h4>
                        <p className={classes.cardCategoryWhite}>
                            {'name'}님
                        </p>
                    </CardHeader>
                    <CardBody>
                        <ExamTable
                            tableHeaderColor="primary"
                            tableHead={["Code", "No", "Name", "Discription"]}
                            tableData={[
                                ["s123456", "1","springboot", "springboot framework function"]
                            ]}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}