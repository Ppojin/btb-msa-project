import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/components/styles/examTableStyle.js";

const useStyles = makeStyles(styles);

export default function ExamTable(props) {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor } = props;
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
                        <TableRow className={classes.tableHeadRow}>
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, {pk}) => {
                        return (
                            <TableRow key={pk} className={classes.tableBodyRow}>
                                {prop.map((prop, key) => {
                                    return (
                                        <TableCell className={classes.tableCell} key={pk}>
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

ExamTable.defaultProps = {
    tableHeaderColor: "gray"
};

ExamTable.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray"
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
