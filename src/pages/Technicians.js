import React, { Component } from 'react';

class Technicians extends Component {
    state = { technicians : [
      { id: '1001', name: 'Abraham', value1: 'ipsum', value2: 'dolor', value3: 'sit' },
      { id: '1002', name: 'Gnanasingh', value1: 'consectetur', value2: 'adipiscing', value3: 'elit' },
      { id: '1003', name: 'Abrew', value1: 'nec', value2: 'odio', value3: 'Praesent' }
    ] }
  
    render() {
      const { technicians } = this.state;

      return (
        <div className="mt-3">
          <h1 className="h4">Technicians</h1>

          <div className="table-responsive">
            <table className="table table-striped table-bordered">
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
      ); 
    }
}

export default Technicians;