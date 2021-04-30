import React, { Component } from "react";
import MyComponent from "./MyComponent";
import AnotherComponent from './AnotherComponent';
import axios from 'axios';

class App extends Component {
  state = {
    data: null
  };
  getPost = async () => {
    try {
      const response = await axios.get('/posts/1');
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.getPost();
  }
  render() {
    if (!this.state.data) {
      return <div>로딩중...</div>;
    }
    const { title, body } = this.state.data;

    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
        <MyComponent />
        <AnotherComponent />
      </div>
    );
  }
}

export default App;
