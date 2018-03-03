import React from 'react';
//import * as axios from 'axios';
const axios = require("axios");

export default class Getdata extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        posts: []
      };
    }
  componentDidMount() {
    axios.get(`./../public/Library.json`)
      .then(res => {
        const Letters = res.data;
        this.setState({ Letters });
      })
  }

  render() {
    return (
      <ul>
        { this.state.Letters.map(Letters => <li>{Letters.name}</li>)}
      </ul>
    )
  }
}