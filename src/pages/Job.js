import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import JobService from '../services/JobService';

class Job extends Component {
  state = {
    isSubmitted: false,
    isLoading: false,
    defaultValues: {
      typeOfJob: '',
      customerName: '',
      customerUniqueId: '',
      address: '',
      address2: '',
      parish: '',
      technician: ''
    }
  };

  componentDidMount() {
    const { match: { params } } = this.props;

    const { defaultValues } = this.state;

    if(params.status === 'edit') {
      let jobs = JobService.getJobs();
      if(jobs) {
        var selectedJob = jobs.list.filter(j => j.id === params.id)[0];
        this.setState({
          defaultValues: Object.assign({}, defaultValues, selectedJob)
        });
      }
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const defaultValues = Object.assign({}, this.state.defaultValues);
    defaultValues[name] = value;

    this.setState({
      defaultValues
    });
  }

  handleJobSubmit(e) {
    e.preventDefault();

    this.setState({isSubmitted: true, isLoading: true});

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  }

  getStatusButtonText() {
    const { match } = this.props;

    const { isLoading } = this.state;

    if(isLoading) { return 'Loading...'; }

    var status = match.params.status;
    if(status === 'create') { return 'Create'; }
    else if(status === 'edit') { return 'Update'; }
    return null;
  }

  render() {
    const { history } = this.props;

    const { isSubmitted, isLoading, defaultValues } = this.state;

    return (
      <div className="col-md-5 order-md-1 mt-3 mx-auto">
        <h4 className="mb-3">Job</h4>

        <form className={isSubmitted ? "was-validated": ""} onSubmit={e => this.handleJobSubmit(e)} noValidate>
          <div className="mb-3">
            <label htmlFor="typeOfJob">Type of Job</label>
            <select className="custom-select d-block w-100" name="typeOfJob" id="typeOfJob" required value={defaultValues.typeOfJob} onChange={e => this.handleInputChange(e)}>
              <option value="">Choose...</option>
              <option>Technical</option>
            </select>
            <div className="invalid-feedback">
              Please choose the job type.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" className="form-control" name="customerName" id="customerName" placeholder="" required value={defaultValues.customerName} onChange={e => this.handleInputChange(e)} />
            <div className="invalid-feedback">
              Please enter a valid customer name.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="customerUniqueId">Customer Unique ID</label>
            <input type="text" className="form-control" name="customerUniqueId" id="customerUniqueId" placeholder="" required value={defaultValues.customerUniqueId} onChange={e => this.handleInputChange(e)} />
            <div className="invalid-feedback">
              Please enter a valid customer unique id.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" required value={defaultValues.address} onChange={e => this.handleInputChange(e)} />
            <div className="invalid-feedback">
              Please enter your address.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" name="address2" id="address2" placeholder="Apartment or suite" value={defaultValues.address2} onChange={e => this.handleInputChange(e)} />
          </div>

          <div className="mb-3">
            <label htmlFor="parish">Parish/District</label>
            <input type="text" className="form-control" name="parish" id="parish" placeholder="" required value={defaultValues.parish} onChange={e => this.handleInputChange(e)} />
            <div className="invalid-feedback">
              Please enter your parish.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="technician">Select Technician</label>
            <select className="custom-select d-block w-100" name="technician" id="technician" required value={defaultValues.technician} onChange={e => this.handleInputChange(e)}>
              <option value="">Choose...</option>
              <option>Abraham</option>
            </select>
            <div className="invalid-feedback">
              Please choose a technician.
            </div>
          </div>

          <div className="text-center mb-3">
            <button className="btn btn-secondary mr-2" type="button" onClick={() => history.push('/jobs/list')}>Cancel</button>
            <button className="btn btn-primary" type="submit" disabled={isLoading}>{this.getStatusButtonText()}</button>
          </div>
        </form>
      </div>
    );
  }
}

Job = withRouter(Job);

export default Job;