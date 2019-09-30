import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';

class Jobs extends Component {
    state = {
      showDeleteJobModal: false,
      jobs: {
        meta: { count: 21 },
        list: [
          { id: '1001', name: 'Repair AC', createdOn: 'ipsum', address: '1234 Main St' },
          { id: '1002', name: 'RO Water Purifier Service', createdOn: 'consectetur', address: '25 Church St' },
          { id: '1003', name: 'Repair Washing Machine', createdOn: 'nec', address: '77 Eden St' }
        ]
      },
      selectedJob: null,
      activePage: 1,
      itemsPerPage: 10,
      totalPages: 1
    }

    componentDidMount() {
      const { jobs, itemsPerPage } = this.state;

      let totalPages = jobs ? Math.ceil(jobs.meta.count/itemsPerPage) : 0;
      this.setState({totalPages});
    }

    handlePaginationChange(elem) {
      let { activePage, totalPages } = this.state;

      let currentPage = activePage;

      switch(elem) {
        case 'first': currentPage = 1; break;
        case 'prev': currentPage = activePage - 1; break;
        case 'next': currentPage = activePage + 1; break;
        case 'last': currentPage = totalPages; break;
        default: currentPage = elem; break;
      }

      this.setState({activePage: currentPage});
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
      const { jobs, showDeleteJobModal, selectedJob, activePage, itemsPerPage, totalPages } = this.state;

      let paginationItems = [];

      for(let i = 1; i <= totalPages; i++) {
        paginationItems.push(<Pagination.Item active={i === activePage} onClick={() => this.handlePaginationChange(i)}>{i}</Pagination.Item>);
      }

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

          {/* <div className="row mb-2">
            <div className="col-md-5">
              <div className="list-group">
              {jobs && jobs.list.map((j, index) => {
                return (
                  <Link key={j.id} to={`/jobs/details/${j.id}`} className={`list-group-item list-group-item-action ${index === 0 ? 'active' : ''}`}>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{j.name}</h5>
                      <small className={`${index !== 0 ? 'text-muted' : ''}`}>3 days ago</small>
                    </div>
                    <p className="mb-1">{j.address}</p>
                    <small className={`${index !== 0 ? 'text-muted' : ''}`}>Donec id elit non mi porta.</small>
                  </Link>
                )
              })}
              </div>
            </div>
          </div> */}

          <div className="table-responsive mb-2">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Created On</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs && jobs.list.map(j => {
                  return (
                    <tr className="text-center" key={j.id}>
                      <td className="align-middle">{j.id}</td>
                      <td className="align-middle">{j.name}</td>
                      <td className="align-middle">{j.address}</td>
                      <td className="align-middle">{j.createdOn}</td>
                      <td className="align-middle">
                        <Link to={`/jobs/edit/${j.id}`} className="btn btn-link py-0">Edit</Link>
                        <button className="btn btn-link py-0" onClick={() => this.handleDeleteJobConfirm(j)}>Delete</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="mb-2">
            <div className="d-inline-block">
              <p><span className="font-weight-bold">Total Count:</span> {jobs && (jobs.meta.count === 0 ? '###' : jobs.meta.count)}</p>
            </div>
            <div className="float-md-right">
              <Pagination>
                <Pagination.First disabled={activePage === 1} onClick={() => this.handlePaginationChange('first')} />
                <Pagination.Prev disabled={activePage === 1} onClick={() => this.handlePaginationChange('prev')} />
                {/* <Pagination.Item onClick={() => this.handlePaginationChange(1)}>{1}</Pagination.Item>
                <Pagination.Ellipsis /> */}
                
                { React.Children.toArray(paginationItems) }

                <Pagination.Next disabled={activePage === totalPages} onClick={() => this.handlePaginationChange('next')} />
                <Pagination.Last disabled={activePage === totalPages} onClick={() => this.handlePaginationChange('last')} />
              </Pagination>
            </div>
            <div className="clearfix"></div>
          </div>

          <Modal show={showDeleteJobModal} onHide={() => this.handleDeleteJobModalClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete the job (<span dangerouslySetInnerHTML={{__html: `<b>${selectedJob && selectedJob.name}</b>`}}></span>)?</Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary" onClick={() => this.handleDeleteJobModalClose()}>Close</button>
              <button type="button" className="btn btn-danger" onClick={() => this.handleDeleteJob()}>Delete</button>
            </Modal.Footer>
          </Modal>
        </div>
      ); 
    }
}

Jobs = withRouter(Jobs);

export default Jobs;