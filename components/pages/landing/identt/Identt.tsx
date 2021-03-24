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
                        With digital decentralization and accessibility comes digital ownership of
                        goods, media, and data. An innovative new approach to claiming these goods
                        was created in the form of blockchain based profiles.</p>
                    <p className="f-size-p4 f-weight-l">
                        IDENTT allows an individual or organization to have total control over their
                        assets and identity. Fully integratable and extensible, IDENTT allows you to
                        log in with your on-chain profile into any supported dapp or game to quickly
                        start using your NFT2.0. Remembering keys and seed phrases are a thing of the
                        past with IDENTT’s new recovery feature, allowing for multiple ways of recovering
                        your account.</p>
                </div>
            </section>
        </>
    )
}

export default Identt
