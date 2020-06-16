import React from "react";
// plugin that creates slider
// @material-ui/core components

// @material-ui/icons
import { Chat } from '@material-ui/icons';
// core components
import GridContainer from "components/utils/Grid/GridContainer2.js"
import GridItem from "components/utils/Grid/GridItem2.js"
import CustomTabs from "components/utils/Tabs/CustomTabs.js"
import NavPills from "components/utils/NavPills/NavPills.js";
//style
import { makeStyles } from "@material-ui/core/styles"
import styles from "assets/jss/components/sections/HomeBasics.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
    const classes = useStyles();

    return (
        <div className={classes.sections}>
            <div className={classes.container}>
                <div className={classes.title}>
                    <h2>DailyCheck</h2>
                </div>
                <br />
                <br />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} lg={6}>
                        <NavPills
                            color="rose"
                            horizontal={{
                                tabsGrid: { xs: 12, sm: 4, md: 4 },
                                contentGrid: { xs: 12, sm: 8, md: 8 }
                            }}
                            tabs={[
                                {
                                    tabButton: "DailyQuiz",
                                    tabIcon: Chat,
                                    tabContent: (
                                        <span>
                                            <p>
                                                1문단
                                            </p>
                                            <br/>
                                            <p>
                                                2문단
                                            </p>
                                            <br />
                                            <p>
                                                3문단
                                            </p>
                                        </span>
                                    )
                                },
                                {
                                    tabButton: "Schedule",
                                    tabIcon: Chat,
                                    tabContent: (
                                        <span>
                                            <p>
                                                Efficiently unleash cross-media information without
                                                cross-media value. Quickly maximize timely
                                                deliverables for real-time schemas.
                                            </p>
                                            <br />
                                            <p>
                                                Dramatically maintain clicks-and-mortar solutions
                                                without functional solutions. Dramatically visualize
                                                customer directed convergence without revolutionary
                                                ROI. Collaboratively administrate empowered markets
                                                via plug-and-play networks. Dynamically procrastinate
                                                B2C users after installed base benefits.
                                        </p>
                                        </span>
                                    )
                                }
                            ]}
                        />
                    </GridItem>
                </GridContainer>
                <hr/>
                <br/>
                <br/>
                <div className={classes.title}>
                    <h2>스킬 체크</h2>
                </div>
                <br />
                <br />
                <hr/>
                <br/>
                <br/>
                <div className={classes.title}>
                    <h2>와글와글</h2>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}
