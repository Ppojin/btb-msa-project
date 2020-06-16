import React,{useState, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
//import examlist component
import GridContainer from 'components/utils/Grid/GridContainer.js'
import GridItem from 'components/utils/Grid/GridItem.js'
import ExamTable from 'components/utils/Table/ExamTable.js'
import Card from 'components/utils/Card/Card.js'
import CardHeader from 'components/utils/Card/CardHeader.js'
import CardBody from 'components/utils/Card/CardBody.js';
//import table component 
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
//import actions
import {getExamList, getQuestions} from 'shared/reducers/reducers/ExamReducer.js'
//css style
import userExamListStyle from 'assets/jss/components/styles/userExamTableStyle.js'
import examTableStyle from 'assets/jss/components/styles/examTableStyle.js'
import { makeStyles } from '@material-ui/core';

export default function UserExamList(){
    const examlist = useSelector(state => state.exam)
    const classes = userExamListStyle();
    const tableStyles = makeStyles(examTableStyle);
    const classesTable = tableStyles();
    const dispatch = useDispatch();
    const groupName='default'
    const token = JSON.parse((localStorage.getItem("userInfo"))).token
    const customerpk = JSON.parse((localStorage.getItem("userInfo"))).customerpk
    const {examlistData,examinfo, qpk} = {
        examlistData :examlist.entities,
        examinfo : examlist.entity,
        qpk: examlist.questionPK
    }
    const tablehead =["Code","title","Level","skilled","Link"]
    // const onChange = dispatch(getExamList(token,groupName));
    const onClick = useCallback(()=>{
        dispatch(getExamList(token,groupName))
        console.log("examlistData : ",examlistData)
    },[])

    const getButtonHandler = (list) =>{
        console.log(list);
        dispatch(getQuestions(token,list.questionPK,customerpk));
    }
    
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <h4 className={classes.cardTitleWhite}>ExamList</h4>
                        <p className={classes.cardCategoryWhite}>
                            test
                        </p>
                    </CardHeader>
                    <button onClick={onClick}>exam list data</button>
                    <CardBody>
                        <div className={classesTable.tableResponsive}>
                            <Table className={classesTable.table}>
                                <TableHead className={classesTable["primaryTableHeader"]}>
                                    <TableRow className={classesTable.tableHeadRow}>
                                        {tablehead.map((tablehead, key)=>{
                                            return(
                                                <TableCell
                                                    className={classesTable.tablecell+" "+classesTable.tableHeadCell}
                                                    key={key}
                                                >{tablehead}</TableCell>
                                            )
                                        })}
                                    </TableRow>
                                </TableHead>
                                {/* {examinfo !== undefined ? ( */}
                                    <TableBody
                                        
                                    >
                                        {examlistData.title}
                                        {/* {examinfo.map((examinfo, questioPK)=>{
                                            return(
                                                <TableRow key={questioPK} className={classesTable.tableBodyRow}>
                                                    {examinfo.map((examinfo,questioPK)=>{
                                                        return(
                                                            <TableCell className={classesTable.tableCell} key={questioPK}>
                                                                {examinfo}
                                                            </TableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            )
                                        })} */}
                                    </TableBody>
                                {/* ):null} */}
                            </Table>
                        </div>
                
                        {/* <button onClick={onClick}>exam list data</button>
                        <hr/>
                        <div>
                            <div>
                                {examlistData.map((examlistData, questionPK)=>{
                                    
                                    return (
                                        <div>
                                            <button 
                                                title={examlistData.title} 
                                                key={examlistData.questionPK} 
                                                onClick={()=>getButtonHandler(examlistData)}
                                                // value={examlistData.title||''}
                                            >
                                                {examlistData.title}
                                            </button>
                                            <hr/>
                                        </div>
                                        
                                    )})}
                            </div>
                        </div> */}
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}