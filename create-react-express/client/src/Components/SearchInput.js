import React, { Component } from 'react';
import {  Container, Row, Col } from '../Components/Grid';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChange(e) {
    this.setState({value: e.target.value});
    this.props.onChange(this.state.value);
  }

  render() {
    return (
      <Container fludid>
        <Row>
          <Col size="md-12">
          type="text"
          value={this.state.value}
          placeholder="Search Books..."
          onChange={this.onChange.bind(this)}
        </Col>
      </Row>
    </Container>  
    );
  }
}

export default SearchInput