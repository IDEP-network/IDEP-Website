const Identt = () => {
    return (
        <>
            <section className="identt_main">
                <video muted autoPlay playsInline loop src="./videos/identt/identt.mp4" className="identt_video"></video>
                <div className="container">
                    <div className="image" />
                    <h1 className="content f-size-h3 f-weight-bl">
                        <span className='gradient_text'>One Identity.</span> {" "}
                        Galactic number of possibilities.

                    </h1>
                </div>
                <div className="identt_content">
                    <p className="f-size-p4 f-weight-l">
                        With digital decentralization and accessibility comes digital
                        ownership of goods, media and data. An innovative new approach
                        to claiming these goods was created in the form of blockchain
                        based profiles. IDENTT allows organizations and individuals
                        to have total control over their assets and identity.
                    </p>


                    <div className="features_container">
                        <div className="feature f-size-h6 f-weight-bo">
                            <div className="icon" />
                            <p>Multi wallet support.</p>
                        </div>
                        <div className="feature f-size-h6 f-weight-bo">
                            <div className="icon" />
                            <p>Customizable on chain identity.</p>
                        </div>
                        <div className="feature f-size-h6 f-weight-bo">
                            <div className="icon" />
                            <p> Universal login to any supported dapp or game.</p>
                        </div>
                        <div className="feature f-size-h6 f-weight-bo">
                            <div className="icon" />
                            <p>Secure profile recovery.</p>
                        </div>
                        <div className="feature f-size-h6 f-weight-bo">
                            <div className="icon" />
                            <p>No user facing keys or seed phrases.</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Identt
