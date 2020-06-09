import {makeStyles} from '@material-ui/core/styles';

const panel_ca_Style = makeStyles((e)=>({
    root:{
        width: '100%',
    },
    heading: {
        fontSize: e.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrinks: 0,
    },
    secondaryHeading: {
        fontSize: e.typography.pxToRem(15),
        color:e.palette.text.secondary,
    },
}));

export default panel_ca_Style 