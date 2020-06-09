import React,{useState} from 'react';
//import style
import ExpansionPanel from 'assets/jss/components/styles/ExpansionPanelStyle.js'
import ExpansionPanelSummary from 'assets/jss/components/styles/ExpansionPanelSummaryStyle.js'
import ExpansionPanelDetails from 'assets/jss/components/styles/ExpansionPanelDetailsStyle.js'
//import @material-ui
import Typography from '@material-ui/core/Typography'; 

function UE_disc_exinfo (){
    const [expanded, setExpanded] = useState()
    const panel_handleChange =(panel)=>(e,isExpanded)=>{
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div>
            <ExpansionPanel square expanded={expanded ==='examdisc1'} onChange={panel_handleChange('examdisc1')}>
                <ExpansionPanelSummary id="examdisc1-header">
                    <Typography>{'문제 제목'}의 {'#no'}번째 문제 </Typography>
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
            <ExpansionPanel square expanded={expanded ==='examdisc2'} onChange={panel_handleChange('examdisc2')}>
                <ExpansionPanelSummary id="examdisc2-header">
                    <Typography>{'문제 제목'}의 {'#no'}번째 문제 </Typography>
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

        </div>
        
    )
}

export default UE_disc_exinfo;