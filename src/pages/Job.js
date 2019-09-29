import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Job extends Component {
  state = { isSubmitted: false };

  handleJobSubmit(e) {
    e.preventDefault();

    this.setState({isSubmitted: true});


  }

  render() {
    const { match, history } = this.props;

    const { isSubmitted } = this.state;

    return (
      <div className="col-md-7 order-md-1 mt-3 mx-auto">
        <h4 className="mb-3">Job</h4>

        <form className={isSubmitted ? "was-validated": ""} onSubmit={e => this.handleJobSubmit(e)} noValidate>
          <div className="mb-3">
            <label htmlFor="typeOfJob">Type of Job</label>
            <select className="custom-select d-block w-100" id="typeOfJob" required>
              <option value="">Choose...</option>
              <option>Technical</option>
            </select>
            <div className="invalid-feedback">
              Please choose the job type.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" className="form-control" id="customerName" placeholder="" required />
            <div className="invalid-feedback">
              Please enter a valid customer name.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="customerUniqueId">Customer Unique ID</label>
            <input type="text" className="form-control" id="customerUniqueId" placeholder="" required />
            <div className="invalid-feedback">
              Please enter a valid customer unique id.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
            <div className="invalid-feedback">
              Please enter your address.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
          </div>

          <div className="mb-3">
            <label htmlFor="parish">Parish/District</label>
            <input type="text" className="form-control" id="parish" placeholder="" required />
            <div className="invalid-feedback">
              Please enter your parish.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="technician">Select Technician</label>
            <select className="custom-select d-block w-100" id="technician" required>
              <option value="">Choose...</option>
              <option>Abraham</option>
            </select>
            <div className="invalid-feedback">
              Please choose a technician.
            </div>
          </div>

          <div className="text-center mb-3">
            <button className="btn btn-secondary mr-2" type="button" onClick={() => history.push('/jobs/list')}>Cancel</button>
            <button className="btn btn-primary" type="submit">{match.params.status === 'create' ? 'Create' : 'Update'}</button>
          </div>
        </form>
      </div>
    );
  }
}

Job = withRouter(Job);

export default Job;