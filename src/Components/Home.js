import AnimatedPage from "./AnimatedPage"

function Home() {

    return (
        <div className='home'>
            <AnimatedPage>
                <div className="infos">
                    <h1>GET YOUR MOVIE DATA</h1>
                    <h3>With a simple <span>SEARCH</span> all the information will be shown.</h3>
                    <h3>Don't know which movie you want? Select the <span>POPULAR</span> or the <span>TOP RATED</span> category.</h3>
                    <h3>For non-released movies, just select the <span>COMING SOON</span>.</h3>
                </div>
            </AnimatedPage>
        </div>
    )
}

export default Home