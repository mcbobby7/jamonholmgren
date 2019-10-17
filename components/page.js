import React, { Component } from 'react';
import Header from "./header";
import Meta from "./meta";
import Footer from "./footer";
import Toolbar from './Toolbar/toolBar';
import SideDrawer from './Toolbar/sideDrawer';
import Backdrop from './Toolbar/backdrop';

class Page extends Component {
  state = {
      sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
      this.setState(prevState => {
          return { sideDrawerOpen: !prevState.sideDrawerOpen };
      });
  };

  backdropClickHandler = () => {
      this.setState({ sideDrawerOpen: false });
  };

  render() {
      const { children } = this.props;
      let backdrop;

      if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
      }
      return (
    <div className="page">
      <Meta title={this.props.title} description={this.props.description} />

      <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}      
      <Header />

      <main role='main' className="main">{children}</main>

      <Footer />

      <style jsx>{`
        .page {
          margin: auto;
          max-width: 950px;
        }

        .main {
          color: #000;
          padding: 3px 0px;
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
  }
};

export default Page
