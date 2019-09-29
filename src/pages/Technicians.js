import React, { Component } from 'react';

class Technicians extends Component {
    state = { technicians : [
      { id: '1,001', name: 'Abraham', value1: 'ipsum', value2: 'dolor', value3: 'sit' },
      { id: '1,002', name: 'Gnanasingh', value1: 'consectetur', value2: 'adipiscing', value3: 'elit' },
      { id: '1,003', name: 'Abrew', value1: 'nec', value2: 'odio', value3: 'Praesent' }
    ] }
  
    render() {
      const { technicians } = this.state;

      return (
        <div className="mt-3">
          <h1 className="h4">Technicians</h1>

          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
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
                    <tr key={t.id}>
                      <td>{t.id}</td>
                      <td>{t.name}</td>
                      <td>{t.value1}</td>
                      <td>{t.value2}</td>
                      <td>{t.value3}</td>
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

export default Technicians;