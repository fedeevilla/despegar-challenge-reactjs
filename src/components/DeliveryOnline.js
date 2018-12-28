import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addDelivery, loadDelivery } from "./../redux/actions";
import { Link } from "react-router-dom";

class DeliveryOnline extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      phone: "",
      description: "",
      specialties: "",
      address: "",
      open: "",
      close: "",
      nameContact: "",
      lastNameContact: "",
      phoneContact: "",
      email: ""
    };
  }

  handleChange = event => {
    const name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  };

  handleSave = () => {
    this.props.addDelivery(this.state);
  };

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.props.loadDelivery(this.props.match.params.id);
      debugger;
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col md>
              <h2>Administrative Data</h2>
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="name"
                name="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                value={this.state.phone}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="description"
                name="description"
                label="Description"
                multiline
                rows="4"
                rowsMax="4"
                value={this.state.description}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="specialties"
                name="specialties"
                label="Specialties"
                multiline
                rows="4"
                rowsMax="4"
                value={this.state.specialties}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="address"
                name="address"
                label="Address"
                value={this.state.address}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <FormControl>
                <InputLabel htmlFor="open">Open</InputLabel>
                <Select
                  value={this.state.open}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "open",
                    id: "open"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10hs</MenuItem>
                  <MenuItem value={11}>11hs</MenuItem>
                  <MenuItem value={12}>13hs</MenuItem>
                  <MenuItem value={13}>14hs</MenuItem>
                  <MenuItem value={14}>15hs</MenuItem>
                  <MenuItem value={16}>16hs</MenuItem>
                  <MenuItem value={17}>17hs</MenuItem>
                  <MenuItem value={18}>18hs</MenuItem>
                  <MenuItem value={19}>19hs</MenuItem>
                  <MenuItem value={20}>20hs</MenuItem>
                  <MenuItem value={21}>21hs</MenuItem>
                  <MenuItem value={22}>22hs</MenuItem>
                  <MenuItem value={23}>23hs</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="close">Close</InputLabel>
                <Select
                  value={this.state.close}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "close",
                    id: "close"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>10hs</MenuItem>
                  <MenuItem value={11}>11hs</MenuItem>
                  <MenuItem value={12}>13hs</MenuItem>
                  <MenuItem value={13}>14hs</MenuItem>
                  <MenuItem value={14}>15hs</MenuItem>
                  <MenuItem value={16}>16hs</MenuItem>
                  <MenuItem value={17}>17hs</MenuItem>
                  <MenuItem value={18}>18hs</MenuItem>
                  <MenuItem value={19}>19hs</MenuItem>
                  <MenuItem value={20}>20hs</MenuItem>
                  <MenuItem value={21}>21hs</MenuItem>
                  <MenuItem value={22}>22hs</MenuItem>
                  <MenuItem value={23}>23hs</MenuItem>
                </Select>
              </FormControl>
            </Col>
          </Row>
          <Row>
            <Col md>
              <h2>Commercial Contact</h2>
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="nameContact"
                name="nameContact"
                label="Name"
                value={this.state.nameContact}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="lastNameContact"
                name="lastNameContact"
                label="Last Name"
                value={this.state.lastNameContact}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="phoneContact"
                name="phoneContact"
                label="Phone"
                value={this.state.phoneContact}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <TextField
                id="email"
                name="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col md>
              <Link to="/">
                <Button variant="contained" color="primary">
                  Cancel
                </Button>
              </Link>

              <Button
                variant="contained"
                color="primary"
                onClick={() => this.handleSave()}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   delivery: _.find(state, "id", this.props.match.params.idd)
// });

const mapDispatchToProps = dispatch => {
  return {
    addDelivery(delivery) {
      dispatch(addDelivery(delivery));
    },
    loadDelivery(id) {
      dispatch(loadDelivery(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeliveryOnline);
