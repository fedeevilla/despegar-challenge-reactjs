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
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import { removeDelivery, loadDeliverys } from "./../redux/actions";
import _ from "lodash";
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 22
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

class TableSearch extends Component {
  constructor() {
    super();

    this.state = {
      showing: []
    };
  }

  filterByTerm = value => {
    // console.log(this.props.deliverys);
    const data = this.props.deliverys;
    let newDisplay = _.filter(data, d =>
      d.name.toLowerCase().includes(value.toLowerCase())
    );

    this.setState({
      showing: newDisplay
    });
  };
  componentDidMount() {
    this.props.loadDeliverys();
    this.setState({
      showing: JSON.parse(localStorage.getItem("deliverys")) || []
    });
  }

  renderSearch = () => {
    return (
      <TextField
        id="outlined-search"
        label="Search by Name"
        type="search"
        margin="normal"
        variant="outlined"
        onChange={event => this.filterByTerm(event.target.value)}
      />
    );
  };

  renderHeader = () => {
    return (
      <Row middle="xs">
        <Col xs={6}>{this.renderSearch()}</Col>
        <Col xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.history.push("/create")}
          >
            Create
          </Button>
        </Col>
      </Row>
    );
  };

  renderTable = () => {
    return (
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
                {this.state.showing &&
                  this.state.showing.map(row => {
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
    );
  };

  render() {
    return (
      <Grid>
        {this.renderHeader()} {this.renderTable()}
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
