import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Jobs extends Component {
    state = { jobs : [
      { id: '1,001', name: 'Repair AC', value1: 'ipsum', value2: 'dolor' },
      { id: '1,002', name: 'RO Water Purifier Service', value1: 'consectetur', value2: 'adipiscing' },
      { id: '1,003', name: 'Repair Washing Machine', value1: 'nec', value2: 'odio' }
    ] }

    handleDeleteJob() {

      
    }

    handleCreateJob() {
      this.props.history.push('/jobs/create');
    }
  
    render() {
      const { jobs } = this.state;

      return (
        <div className="col-md-12 mt-3">
          <h1 className="h4">Jobs</h1>

          <button className="btn btn-primary" onClick={() => this.handleCreateJob()}>Create</button>

          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
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
                    <tr key={j.id}>
                      <td>{j.id}</td>
                      <td>{j.name}</td>
                      <td>{j.value1}</td>
                      <td>{j.value2}</td>
                      <td>
                        <Link to={`/jobs/${j.id}`} className="btn btn-link">Edit</Link>
                        <button className="btn btn-link" onClick={() => this.handleDeleteJob()}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      ); 
    }
}

Jobs = withRouter(Jobs);

export default Jobs;