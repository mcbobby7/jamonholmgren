import React, { Component } from 'react';
import Link from "next/link";

class sideDrawer extends Component {
    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }
        return (
            <nav className={drawerClasses}>
                <ul>
                        <li>
                            <Link href="/beginnings">
                                <a className="link">beginnings</a>
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link href="/now">
                                <a className="link">now</a>
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link href="/tech">
                                <a className="link">tech</a>
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link href="/talks">
                                <a className="link">talks</a>
                            </Link>
                            <hr style={{ marginRight: '40px' }} />
                        </li>
                        <li>
                            <Link href="/connect">
                                <a className="link">connect</a>
                            </Link>
                            <hr className="hr" style={{ marginRight: '40px' }} />
                        </li>
                </ul>
                <style jsx>{`
                   .side-drawer {
                    height: 100%;
                    background: #001529;
                    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 70%;
                    max-width: 400px;
                    z-index: 200;
                    transform: translateX(-100%);
                    transition: transform 0.3s ease-out;
                  }

                  .hr {
                    color: #1890FF
                  }
                  
                  .side-drawer.open {
                    transform: translateX(0);
                  }
                  .side-drawer ul {
                    height: 100%;
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                  }
                  .side-drawer li {
                    margin: 0.5rem 0;
                  }
                  .link {
                      color: white;
                  }
                  .side-drawer a {
                    text-decoration: none;
                    font-size: 1.2rem;
                  }
                  .side-drawer a:hover,
                  .side-drawer a:active
                  .link 
                  {
                    color: #1890FF;
                  }
                  @media (min-width: 769px) {
                    .side-drawer {
                      display: none;
                    }
                  }
                `}</style>
            </nav>
        );
    }
}

export default sideDrawer;
