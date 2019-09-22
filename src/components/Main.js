import React from 'react';
import Container from 'react-bootstrap/Container';
import TopNavbar from './TopNavbar';
import LeftSideNavbar from './LeftSideNavbar';

function Main(props) {
    return (
      <>
        <TopNavbar />
  
        <Container fluid>
          <div className="row">
            <LeftSideNavbar />
  
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
              {props.children}
            </main>
          </div> 
        </Container>
      </>
    );
}

export default Main;