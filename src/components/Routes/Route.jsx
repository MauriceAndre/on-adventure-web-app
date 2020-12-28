import React from "react";
import { Route as RRDRoute } from "react-router-dom";
import { compact } from "../../utils/arrayUtils";
import MainNavbar from './../common/MainNavbar';
import Sidebar from './../common/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';

function Route({
  showNavbar = true,
  showSidebar = true,
  render,
  component: Component,
  ...rest
}) {
  if (showNavbar || showSidebar) {
    rest.render = (props) => {
      const NavbarComp = showNavbar && (
        <div className="section-wrapper section-fill">
          <MainNavbar />
        </div>
      );
      Component = render ? render(props) : <Component {...props} />;
      const SidebarComp = showSidebar && (
        <Col className="section-wrapper" style={{maxWidth: "var(--sidebar-w)"}}>
          <Sidebar />
        </Col>
      );

      const components = compact([
        NavbarComp,
        <div className="section-wrapper">
          <Container fluid className="section-content">
            <Row className="section">
              {showSidebar && SidebarComp}
              <Col className="section-wrapper">
                {Component}
              </Col>
            </Row>
          </Container>
        </div>
      ]);
      return (
        <React.Fragment>
          <div className="section section-column">{components}</div>
        </React.Fragment>
      );
    };
  } else if (Component || render) {
    rest.component = Component;
    rest.render = render;
  }

  return <RRDRoute {...rest} />;
}

export default Route;
