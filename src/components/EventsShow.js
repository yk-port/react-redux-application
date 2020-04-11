import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions';

class EventsShow extends Component {
  constructor(props) {
    console.log('aa')
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input
          {...input}
          placeholder={label}
          type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    // await this.props.postEvent(values);
    this.props.history.push('/');
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" component={this.renderField} type="text" />
        </div>
        <div>
          <Field label="Body" name="body" component={this.renderField} type="text" />
        </div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}


const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Please enter a Title."
  if (!values.body) errors.body = "Please enter a Body."

  return errors
}

// const mapDispatchToProps = ({ postEvent });

export default connect(null, null)(
  reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
);
