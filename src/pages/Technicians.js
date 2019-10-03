import React, { Component } from 'react';

class Technicians extends Component {
    state = { technicians : [
      { id: '2001', name: 'Abraham', value1: 'ipsum', value2: 'dolor', value3: 'sit' },
      { id: '2002', name: 'Gnanasingh', value1: 'consectetur', value2: 'adipiscing', value3: 'elit' },
      { id: '2003', name: 'Abrew', value1: 'nec', value2: 'odio', value3: 'Praesent' }
    ] }

    handleSearchSubmit(e) {
      e.preventDefault();
    }

    handleAddTechnician() {

    }
  
    render() {
      const { technicians } = this.state;

      return (
        <div className="col-md-12 mt-3">
          <div className="row mb-3">
            <div className="col-md-12">
              <h1 className="h4 d-inline">Technicians</h1>
            </div>
          </div>

          <div>
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
                <button className="btn btn-primary" onClick={() => this.handleAddTechnician()}>Add</button>
              </div>
              <div className="clearfix"></div>
            </div>

            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr className="text-center">
                    <th>#</th>
                    <th>Name</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  {technicians.map(t => {
                    return (
                      <tr className="text-center" key={t.id}>
                        <td className="align-middle">{t.id}</td>
                        <td className="align-middle">{t.name}</td>
                        <td className="align-middle">{t.value1}</td>
                        <td className="align-middle">{t.value2}</td>
                        <td className="align-middle">{t.value3}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ); 
    }
}

export default Technicians;