import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

class Jobs extends Component {
    state = {
      showDeleteJobModal: false,
      jobs : [
        { id: '1001', name: 'Repair AC', value1: 'ipsum', value2: 'dolor' },
        { id: '1002', name: 'RO Water Purifier Service', value1: 'consectetur', value2: 'adipiscing' },
        { id: '1003', name: 'Repair Washing Machine', value1: 'nec', value2: 'odio' }
      ],
      selectedJob: null
    }

    handleDeleteJobModalClose() {
      this.setState({ showDeleteJobModal: false, selectedJob: null });
    }

    handleDeleteJob(job) {
      //delete api
    }

    handleDeleteJobConfirm(job) {
      this.setState({ showDeleteJobModal: true, selectedJob: job });
    }

    handleCreateJob() {
      this.props.history.push('/jobs/create');
    }
  
    render() {
      const { jobs, showDeleteJobModal, selectedJob } = this.state;

      return (
        <div className="col-md-12 mt-3">
          <div className="row mb-2">
            <div className="col-md-12">
              <h1 className="h4 d-inline">Jobs</h1>
              <div className="btn-toolbar float-sm-right float-md-right">
                {/* <div className="btn-group mr-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div> */}
                <button className="btn btn-primary" onClick={() => this.handleCreateJob()}>Create</button>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Name</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(j => {
                  return (
                    <tr className="text-center" key={j.id}>
                      <td className="align-middle">{j.id}</td>
                      <td className="align-middle">{j.name}</td>
                      <td className="align-middle">{j.value1}</td>
                      <td className="align-middle">{j.value2}</td>
                      <td className="align-middle">
                        <Link to={`/jobs/${j.id}`} className="btn btn-link py-0">Edit</Link>
                        <button className="btn btn-link py-0" onClick={() => this.handleDeleteJobConfirm(j)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <Modal show={showDeleteJobModal} onHide={() => this.handleDeleteJobModalClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete the job (<span dangerouslySetInnerHTML={{__html: `<b>${selectedJob && selectedJob.name}</b>`}}></span>)?</Modal.Body>
            <Modal.Footer>
              <button type="button" class="btn btn-secondary" onClick={() => this.handleDeleteJobModalClose()}>Close</button>
              <button type="button" class="btn btn-danger" onClick={() => this.handleDeleteJob()}>Delete</button>
            </Modal.Footer>
          </Modal>
        </div>
      ); 
    }
}

Jobs = withRouter(Jobs);

export default Jobs;