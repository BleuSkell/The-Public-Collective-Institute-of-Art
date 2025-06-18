import "../css/HomePage.css";

function HomePage() {
    return (
        <>
            <header>
                <div className="banner-img">
                    <div className="banner-text">
                        <h1>Welcome to the Public Collective Institute of Art</h1>
                    </div>
                </div>
            </header>

            <main>
                <div className="intro-container">
                    <div className="intro-text">
                        <h2 className="intro-text-h2">
                            Welcome to the Public Collective Institute of Art, or PCIOA for short. 
                            A small project of mine that I made for a react assignment. 
                            We were allowed total freedom on what and a little on how we would make our projects, and so after much thought I have decided on this. 
                            I might update and expand on this project in the future, but for now I just have to pass.
                        </h2>
                    </div>
                </div>

                <div className="news-container-home">
                    <img src="../../public/img/news-img.png" alt="news-img" className="news-img"/>

                    <div className="news-updates">
                        <p className="news">News</p>

                        <h3 className="news-subject">Website prototype is finished</h3>

                        <p className="news-content">
                            After a long time of programming the website's prototype has finally been finished. 
                            I'm personally proud of how it looks right now, but improvements are always nice.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
export default HomePage;