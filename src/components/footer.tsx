import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className="copyright">
                    <h3>
                        © 2025 The Public Collective Insitute of Art
                    </h3>

                    <p className='copyright-text'>
                        This project was created for educational purposes.
                    </p>

                    <p className='copyright-text'>
                        All rights reserved.
                    </p>
                </div>

                <div className="about-us">
                    <h3>
                        About us
                    </h3>

                    <a href="" className='footer-link'>
                        News
                    </a>

                    <a href="https://www.instagram.com/seervska/" className='footer-link'>
                        Instagram
                    </a>

                    <a href="https://github.com/BleuSkell" className='footer-link'>
                        Github
                    </a>

                    <a href="https://www.linkedin.com/in/kyano-sowirono-154789329/" className='footer-link'>
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;