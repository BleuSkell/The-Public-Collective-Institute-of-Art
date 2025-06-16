import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className='footer-container'>
                <div className="copyright">
                    <h3>
                        © 2025 The Public Collective Insitute of Art
                    </h3>

                    <p>
                        This project was created for educational purposes.
                    </p>

                    <p>
                        All rights reserved.
                    </p>
                </div>

                <div className="about-us">
                    <h3>
                        About us
                    </h3>

                    <a href="">
                        News
                    </a>

                    <a href="https://www.instagram.com/seervska/">
                        Instagram
                    </a>

                    <a href="https://github.com/BleuSkell">
                        Github
                    </a>

                    <a href="https://www.linkedin.com/in/kyano-sowirono-154789329/">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;