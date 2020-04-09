import React, { Component } from 'react';
import { connect } from 'react-redux'

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    const props = this.props;

    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
