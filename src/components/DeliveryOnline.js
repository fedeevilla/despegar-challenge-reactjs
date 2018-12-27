import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

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
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs>
              <h2>Administrative Data</h2>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange("name")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="phone"
                label="Phone"
                value={this.state.phone}
                onChange={this.handleChange("phone")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="description"
                label="Description"
                multiline
                rows="4"
                rowsMax="4"
                value={this.state.description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="specialties"
                label="Specialties"
                multiline
                rows="4"
                rowsMax="4"
                value={this.state.specialties}
                onChange={this.handleChange("specialties")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="address"
                label="Address"
                value={this.state.address}
                onChange={this.handleChange("address")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
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
            </Col>
            <Col xs>
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
            <Col xs>
              <h2>Commercial Contact</h2>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="nameContact"
                label="Name"
                value={this.state.nameContact}
                onChange={this.handleChange("nameContact")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="lastNameContact"
                label="Last Name"
                value={this.state.lastNameContact}
                onChange={this.handleChange("lastNameContact")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="phoneContact"
                label="Phone"
                value={this.state.phoneContact}
                onChange={this.handleChange("phoneContact")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <TextField
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange("email")}
                margin="normal"
              />
            </Col>
          </Row>
          <Row>
            <Col xs>
              <Button variant="contained" color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" disabled>
                Save
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default DeliveryOnline;
