import React, { Component } from "react";
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
import { removeDelivery, loadDeliverys } from "./../redux/actions";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

class TableSearch extends Component {
  componentDidMount() {
    this.props.loadDeliverys();
  }

  render() {
    return (
      <Grid>
        <Row middle="xs">
          <Col xs={6}>
            <h1>Filters here!</h1>
          </Col>
          <Col xs={6}>
            <Link to="/create">
              <Button variant="contained" color="primary">
                Create
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell align="right">Address</CustomTableCell>
                    <CustomTableCell align="right">Phone</CustomTableCell>
                    <CustomTableCell align="right">Actions</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.props.deliverys &&
                    this.props.deliverys.map(row => {
                      return (
                        <TableRow key={row.id}>
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
                            <Button>
                              <Link to={`/update/${row.id}`}>
                                <EditIcon color="primary" />
                              </Link>
                            </Button>
                            <Button
                              onClick={() => this.props.removeDelivery(row.id)}
                            >
                              <DeleteOutlinedIcon color="primary" />
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
}
const mapStateToProps = state => {
  return {
    deliverys: state.deliverys
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeDelivery(id) {
      dispatch(removeDelivery(id));
    },
    loadDeliverys() {
      dispatch(loadDeliverys());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableSearch);
