import React from 'react';
// import core components 
import Card from 'components/utils/Card/Card.js';
import CardBody from 'components/utils/Card/CardBody.js';
import CardHeader from 'components/utils/Card/CardHeader.js'
// import nodejs library
import classNames from 'classnames';
// import material-uil components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import css styles
import UserExamTabsSytle from 'assets/jss/components/styles/UserExamResultTabsStyle.js'

export default function UserExamTabs(props){
    const [value, setValue] =React.useState(0);
    const handleChange =(e,value)=>{
        setValue(value);
    }
    const classes = UserExamTabsSytle();
    const {headerColor, plainTabs, tabs, title} = props;

    const cardTitle = classNames({
        [classes.cardTitle]:true,
    })
    return(
        <Card plain={plainTabs}>
            <CardHeader color={headerColor} plain={plainTabs}>
                {title !== undefined ? <div className={cardTitle}>{title}</div> : null}
                <Tabs
                    value={value}
                    onChange={handleChange}
                    classes={{
                        root: classes.tabsRoot,
                        indicator: classes.displayNone,
                        scrollButtons: classes.displayNone
                    }}
                    variant="scrollabe"
                    scrollButtons="auto"
                >
                    {tabs.map((prop, key)=>{
                        var icon={};
                        if(prop.tabIcon){
                            icon={
                                icon:<prop.tabIcon/>
                            }
                        }
                        return(
                            <Tab
                                classes={{
                                    root: classes.tabRootButton,
                                    selected: classes.tabSelected,
                                    wrapper: classes.tabWrapper
                                }}
                                key={key}
                                label={prop.tabName}
                            />
                        );
                    })}
                </Tabs>
            </CardHeader>
            <CardBody>
                {tabs.map((prop,key)=>{
                    if(key===value){
                        return <div key={key}>{prop.tabContent}</div>
                    }
                    return null;
                })}
            </CardBody>
        </Card>
    )
}

