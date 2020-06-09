import React,{useState} from 'react';
//import style
import ExpansionPanel from 'assets/jss/components/styles/ExpansionPanelStyle.js'
import ExpansionPanelSummary from 'assets/jss/components/styles/ExpansionPanelSummaryStyle.js'
import ExpansionPanelDetails from 'assets/jss/components/styles/ExpansionPanelDetailsStyle.js'
//import @material-ui
import { Table } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'; 

function UE_disc_Help (){
    const [expanded, setExpanded] = useState('guideline')
    const panel_handleChange =(panel)=>(e,isExpanded)=>{
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div>
            <ExpansionPanel square expanded={expanded ==='guideline'} onChange={panel_handleChange('guideline')}>
                <ExpansionPanelSummary id="guideline-header">
                    <Typography> 문제 풀이 Guideline </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <div>1. 문제 설명</div>
                        <div>2. 제한 사항</div>
                        <div>3. 입출력 예시</div>
                        <div>4. 입출력 예시 설명</div>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded ==='Help'} onChange={panel_handleChange('Help')}>
                <ExpansionPanelSummary id="Help-header">
                    <Typography>도움말</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <div>도움말 text</div>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel square expanded={expanded ==='compileOption'} onChange={panel_handleChange('compileOption')}>
                <ExpansionPanelSummary id="compileOption-header">
                    <Typography>컴파일 옵션</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <Table>headers</Table>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
        
    )
}

export default UE_disc_Help;