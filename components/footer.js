/*
 * Footer with social nav and copyright.
 */
export default () => {  
    return (
        <footer role='contentinfo'>
            <div className="social-icons">
                <a href="https://twitter.com/jamonholmgren">
                    <img src="/static/twitter.png" alt="Jamon Holmgren on twitter"/>
                </a>
                <a href="https://github.com/jamonholmgren">
                    <img src="/static/github.png" alt="Jamon Holmgren on github"/>
                </a>
                <a href="https://facebook.com/jamon.holmgren">
                    <img src="/static/facebook.png" alt="Jamon Holmgren on facebook"/>
                </a>
            </div>

            <div className="copyright">
                &copy; {new Date().getFullYear()} Jamon Holmgren
            </div>

            <style jsx>{`
                footer {
                   margin-top: 1em; 
                }
                .social-icons {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .social-icons img {
                    flex: 1;
                }

                .copyright {
                    text-align: center;
                }
            `}</style>
        </footer>
    );
}
