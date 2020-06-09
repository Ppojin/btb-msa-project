import { makeStyles } from '@material-ui/core';

// export const profile = makeStyles((theme) => ({

//     Category:{
//         color: "rgba(255,255,255,.62)",
//         margin: "0",
//         fontSize: "14px",
//         marginTop:"0",
//         marginBottom: "0"
//     },
    
//     Title: {
//         cole:"#FFFFFF",
//         marginTop: "0px",
//         minHeight: "auto",
//         fontWight: "300",
//         fontFamily:"'Roboto', 'Helvetica','Arial','Sans-serif'",
//         marginBottom: "3px",
//         textDecoration: "none",
//     }

// }));

export const userprofileStyle = makeStyles( () => (
    {
        cardCategoryWhite: {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        cardTitleWhite: {
            color: "#FFFFFF",
            marginTop: "0px",
            minHeight: "auto",
            fontWeight: "300",
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            marginBottom: "3px",
            textDecoration: "none"
        }
}));