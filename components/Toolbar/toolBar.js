import React, { Component } from 'react';
import Header from '../header';
import Link from "next/link";
import DrawerToggleButton from './drawerToggleButton';

class Toolbar extends Component {
    
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className="toolbar__logo">
                        <Link href="/beginnings">
                            <a className="title" role="link">
                            Jamon Holmgren
                            </a>
                    </Link>
                    </div>
                    <div className="spacer" />
                    <div className="toolbar_navigation-items">
                        <Header />
                    </div>
                </nav>
                <style jsx>{`
                    .toolbar {
                        position: fixed;
                        width: 100%;
                        background: #001529;
                        height: 80px;
                        top: 0;
                        left: 0;
                        z-index: 99;
                    }
                    .toolbar__navigation {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    padding: 0 1rem;
                    }
                    .toolbar__logo a:hover {
                        color: #1890FF; 
                    }
                    .toolbar__logo a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.5rem;
                    }
                    .toolbar_navigation-items a {
                    color: white;
                    text-decoration: none;
                    }
                    .toolbar_navigation-items li {
                    padding: 0 0.5rem;
                    }
                    .toolbar_navigation-items ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    }
                    .toolbar_navigation-items a:hover,
                    .toolbar_navigation-items a:active
                    .link 
                    {
                    color: #1890FF;
                    }
                    .spacer {
                    flex: 1;
                    }
                    .toolbar__logo {
                    margin-left: 0.5rem
                    }
                    @media (max-width: 760px) {
                        .toolbar_navigation-items {
                          display: none;
                        }
                    }
                    @media (min-width: 769px) {
                        .toolbar__toggle-button {
                          display: none;
                        }
                    }
                `}</style>
            </header>
        );
    }
}

export default Toolbar;
