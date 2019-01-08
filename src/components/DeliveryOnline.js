import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addDelivery, updateDelivery } from "./../redux/actions";
import { withRouter } from "react-router-dom";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from "react-material-ui-form-validator";

class DeliveryOnline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delivery: {},
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

  componentDidMount() {
    this.setState({
      name: this.props.delivery.name || "",
      phone: this.props.delivery.phone || "",
      description: this.props.delivery.description || "",
      specialties: this.props.delivery.specialties || "",
      address: this.props.delivery.address || "",
      open: this.props.delivery.open || "",
      close: this.props.delivery.close || "",
      nameContact: this.props.delivery.nameContact || "",
      lastNameContact: this.props.delivery.lastNameContact || "",
      phoneContact: this.props.delivery.phoneContact || "",
      email: this.props.delivery.email || ""
    });
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  handleSave = () => {
    if (!this.props.id) {
      this.props.addDelivery(this.state);
    } else {
      this.props.updateDelivery(this.props.id, this.state);
    }
    this.props.history.push("/");
  };

  handleBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={() => this.handleSave()}
          // onError={errors => console.log(errors)}
        >
          <Grid>
            <Row>
              <Col md={12}>
                <h2>Administrative Data</h2>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="name"
                  name="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required", "maxStringLength:50"]}
                  errorMessages={["this field is required", " Max = 50"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="phone"
                  name="phone"
                  label="Phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows="4"
                  rowsMax="4"
                  value={this.state.description}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="specialties"
                  name="specialties"
                  label="Specialties"
                  multiline
                  rows="4"
                  rowsMax="4"
                  value={this.state.specialties}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="address"
                  name="address"
                  label="Address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormControl>
                  <InputLabel htmlFor="open">Open</InputLabel>
                  <SelectValidator
                    name="open"
                    value={this.state.open}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "open",
                      id: "open"
                    }}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
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
                  </SelectValidator>
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="close">Close</InputLabel>
                  <SelectValidator
                    name="close"
                    value={this.state.close}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "close",
                      id: "close"
                    }}
                    validators={["required"]}
                    errorMessages={["this field is required"]}
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
                  </SelectValidator>
                </FormControl>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h2>Commercial Contact</h2>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="nameContact"
                  name="nameContact"
                  label="Name"
                  value={this.state.nameContact}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="lastNameContact"
                  name="lastNameContact"
                  label="Last Name"
                  value={this.state.lastNameContact}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="phoneContact"
                  name="phoneContact"
                  label="Phone"
                  value={this.state.phoneContact}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <TextValidator
                  id="email"
                  name="email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  margin="normal"
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.handleBack()}
                >
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  // onClick={() => this.handleSave()}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Grid>
        </ValidatorForm>
      </div>
    );
  }
}

DeliveryOnline.defaultProps = {
  delivery: {}
};

const mapStateToProps = (state, props) => ({
  delivery: state.deliverys.find(d => parseInt(d.id) === parseInt(props.id))
});

const mapDispatchToProps = dispatch => {
  return {
    addDelivery(delivery) {
      dispatch(addDelivery(delivery));
    },
    updateDelivery(id, delivery) {
      dispatch(updateDelivery(id, delivery));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeliveryOnline)
);
