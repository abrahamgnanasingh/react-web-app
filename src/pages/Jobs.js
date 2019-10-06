import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Pagination from 'react-bootstrap/Pagination';
import Checkbox from '../components/Checkbox';
import JobService from '../services/JobService';

class Jobs extends Component {
    state = {
      showDeleteJobModal: false,
      jobs: JobService.getJobs(),
      selectedJob: null,
      activePage: 1,
      itemsPerPage: 10,
      totalPages: 1,
      isSelectAllJobsChecked: false,
      recordsPerPageOptions: [
        { value: 10, label: "10 Records Per Page" },
        { value: 20, label: "20 Records Per Page" },
        { value: 30, label: "30 Records Per Page" },
        { value: 40, label: "40 Records Per Page" },
        { value: 50, label: "50 Records Per Page" },
        { value: 100, label: "100 Records Per Page" }
      ],
      recordsPerPage: "20"
    }

    componentDidMount() {
      var jobsResponse = {
        meta: { count: 21 },
        list: [
          { id: '1001', name: 'Repair AC', createdOn: 'ipsum', address: '1234 Main St', selected: false },
          { id: '1002', name: 'RO Water Purifier Service', createdOn: 'consectetur', address: '25 Church St', selected: false },
          { id: '1003', name: 'Repair Washing Machine', createdOn: 'nec', address: '77 Eden St', selected: false }
        ]
      };
      JobService.setJobs(jobsResponse);
      this.setState({
        jobs: JobService.getJobs()
      }, () => {
        const { jobs, itemsPerPage } = this.state;
  
        let totalPages = jobs ? Math.ceil(jobs.meta.count/itemsPerPage) : 0;
        this.setState({totalPages});
      });
    }

    handleSearchSubmit(e) {
      e.preventDefault();
    }

    handleSelectAllJobs(e) {
      var checked = e.target.checked;
      var jobs = Object.assign({}, this.state.jobs);
      jobs.list.forEach(j => {
        j.selected = checked;
      });
      this.setState({
        isSelectAllJobsChecked: checked,
        jobs
      });
    }

    handleSelectJob(e, selectedJob) {
      var checked = e.target.checked;
      var jobs = Object.assign({}, this.state.jobs);
      jobs.list.forEach(j => {
        if(j.id === selectedJob.id) {
          j.selected = checked;
        }
      });
      this.setState({
        isSelectAllJobsChecked: jobs.list.filter(j => !j.selected).length ? false : true,
        jobs
      });
    }

    handleRecordsPerPageChange(e) {
      this.setState({ recordsPerPage: e.target.value });
    }

    handlePaginationChange(elem) {
      let { activePage } = this.state;

      let currentPage = activePage;

      switch(elem) {
        // case 'first': currentPage = 1; break;
        case 'prev': currentPage = activePage - 1; break;
        case 'next': currentPage = activePage + 1; break;
        // case 'last': currentPage = totalPages; break;
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
      const { jobs, showDeleteJobModal, selectedJob, activePage, itemsPerPage, totalPages, isSelectAllJobsChecked, recordsPerPageOptions, recordsPerPage } = this.state;

      let noOfJobsSelected = jobs && jobs.list.filter(j => j.selected).length;

      let activeStartRecordCount = (activePage * itemsPerPage) - itemsPerPage + 1;//Math.ceil(activePage / itemsPerPage);
      let activeEndRecordCount = Math.min(activePage * itemsPerPage, jobs && jobs.meta && jobs.meta.count);

      // let paginationItems = [];

      // for(let i = 1; i <= totalPages; i++) {
      //   paginationItems.push(<Pagination.Item active={i === activePage} onClick={() => this.handlePaginationChange(i)}>{i}</Pagination.Item>);
      // }

      return (
        <div className="col-md-12 mt-3">
          <div className="row mb-3">
            <div className="col-md-12">
              <h1 className="h4 d-inline">Jobs</h1>
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

          <div className="mb-2">
            <div className="mb-3">
              <div className="d-inline-block">
                <form className="form-inline" onSubmit={e => this.handleSearchSubmit(e)}>
                  <input placeholder="Search" type="text" className="mr-sm-2 form-control" />
                </form>
              </div>
              <div className="btn-toolbar float-sm-right float-md-right">
                {/* <div className="btn-group mr-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div> */}
                <button className="btn btn-primary" onClick={() => this.handleCreateJob()}>+ Create</button>
              </div>
              <div className="clearfix"></div>
            </div>

            <div className="mb-2">
              {noOfJobsSelected > 0 ?
              <p>
                <span className="font-weight-bold">{ noOfJobsSelected }</span> Jobs selected.
              </p>
              : ""}
            </div>

            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr className="text-center">
                    <th>
                      <div>
                        <Checkbox name="selectAllJobs" onChange={e => this.handleSelectAllJobs(e)} checked={isSelectAllJobsChecked} />
                      </div>
                    </th>
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
                        <td className="align-middle">
                          <div>
                            <Checkbox name="selectJob" onChange={e => this.handleSelectJob(e, j)} checked={j.selected} />
                          </div>
                        </td>
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
          </div>

          <div className="mb-2">
            <div className="d-inline-block">
              <p>Total Count: <span className="font-weight-bold">{jobs && (jobs.meta.count === 0 ? '###' : jobs.meta.count)}</span></p>
            </div>
            <div className="float-md-right">
                <select className="custom-select d-inline-block" name="recordsPerPage" value={recordsPerPage} onChange={e => this.handleRecordsPerPageChange(e)}>
                  {recordsPerPageOptions.map(rpp => {
                    return (
                      <option key={rpp.value} value={rpp.value}>{rpp.label}</option>
                    )
                  })}
                </select>

              {/* <Pagination>
                <Pagination.Prev disabled={activePage === 1} onClick={() => this.handlePaginationChange('prev')} />
                
                { React.Children.toArray(paginationItems) }

                <Pagination.Next disabled={activePage === totalPages} onClick={() => this.handlePaginationChange('next')} />
              </Pagination> */}

              <ul className="list-inline mb-0">
                <li className="list-inline-item h4 mb-0">
                  <button className="btn btn-light" disabled={activePage === 1} onClick={() => this.handlePaginationChange('prev')}><span aria-hidden={activePage === 1 ? "true" : "false"}>&lt;</span></button>
                </li>
                <li className="list-inline-item h6 mb-0">
                  <p>
                    <span>{activeStartRecordCount}</span>
                    <span className="px-2 text-muted">to</span>
                    <span>{activeEndRecordCount}</span>
                  </p>
                </li>
                <li className="list-inline-item h4 mb-0">
                  <button className="btn btn-light" disabled={activePage === totalPages} onClick={() => this.handlePaginationChange('next')}><span aria-hidden={activePage === totalPages ? "true" : "false"}>&gt;</span></button>
                </li>
              </ul>
            </div>
            <div className="clearfix"></div>
          </div>

          <Modal show={showDeleteJobModal} onHide={() => this.handleDeleteJobModalClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Job</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure want to delete the job (<span dangerouslySetInnerHTML={{__html: `<b>${selectedJob && selectedJob.name}</b>`}}></span>)?</Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary" onClick={() => this.handleDeleteJobModalClose()}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={() => this.handleDeleteJob()}>Delete</button>
            </Modal.Footer>
          </Modal>
        </div>
      ); 
    }
}

Jobs = withRouter(Jobs);

export default Jobs;