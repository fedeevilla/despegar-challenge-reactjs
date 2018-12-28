import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Row, Col } from "react-flexbox-grid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";
import { removeDelivery } from "./../redux/actions";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function TableSearch(props) {
  const { classes } = props;

  return (
    <Grid>
      <Row>
        <Col xs>
          <Link to="/create">
            <Button variant="contained" color="primary">
              Create
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col xs>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Name</CustomTableCell>
                  <CustomTableCell align="right">Address</CustomTableCell>
                  <CustomTableCell align="right">Phone</CustomTableCell>
                  <CustomTableCell align="right">Actions</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.deliverys &&
                  props.deliverys.map(row => {
                    return (
                      <TableRow className={classes.row} key={row.id}>
                        <CustomTableCell component="th" scope="row">
                          {row.name}
                        </CustomTableCell>
                        <CustomTableCell align="right">
                          {row.address}
                        </CustomTableCell>
                        <CustomTableCell align="right">
                          {row.phone}
                        </CustomTableCell>
                        <CustomTableCell align="right">
                          <Button onClick={() => props.removeDelivery(row.id)}>
                            <DeleteOutlinedIcon color="primary" />
                          </Button>
                          <Button>
                            <Link to={`/update/${row.id}`}>
                              <EditIcon color="primary" />
                            </Link>
                          </Button>
                        </CustomTableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

TableSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    deliverys: state.deliverys
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // addDelivery(delivery) {
    //   dispatch(addDelivery(delivery));
    // }
    removeDelivery(id) {
      dispatch(removeDelivery(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TableSearch));
