import React from 'react';
// creates abort controller for stopping fetch during autocomplete
import apiSearch from "../utils/api";
const axios = require('axios').default;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    try {
      return axios.get("http://localhost:3001/api/url/"+encodeURIComponent(this.state.value))
    } catch (err) {
      console.log(err)
    }
    // apiSearch(this.state.value)
  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Url:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
