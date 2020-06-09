import React from 'react';
import { outlinedCard } from '../../../assets/jss/components/main/outlinedCard.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function OutlinedCard() {
    const classes = outlinedCard();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.root}  >
                <CardContent align="center">
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Be With US
                    </Typography>
                    <Typography variant="h5" component="h2" >
                        Be{bull}The{bull}Best
                    </Typography>
                    <Typography variant="body2" component="p">
                        <br />
                    Team Member : 
                        {'    "황효진 / 박예찬"'}
                    </Typography>
                    <br/>
                    <Button size="small" href="/main/login" className={classes.title}>Start BTB</Button>
                </CardContent>
            </Card>
            

        </div>

    );
}
