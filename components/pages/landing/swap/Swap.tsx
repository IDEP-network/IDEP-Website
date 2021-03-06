import { useEffect, useState } from 'react';
import { scrollLottie } from "components/utils/animations/scrollLottie";
import { content } from './swap.content';

const Swap = () => {
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        setIsMobile(window.innerWidth < 1000)
        init()
    }, [])


    const init = () => {
        window.innerWidth < 1000 ?
            // staticScrollLottie({
            //     target: '#swap_canvas',
            //     path: 'https://oxeni-sfs.vercel.app/idep/animation/data2.json',
            //     duration: 0.2,
            //     speed: 'slow'
            // })
            console.log('idep 🌌')

            :
            scrollLottie({
                target: '#swap_canvas',
                path: 'https://oxeni-sfs.vercel.app/idep/animation/data2.json',
                duration: 0.2,
                speed: 'slow'
            })
    }

    return (
        <>
            <div className="swap_main">
                <div className={`swap_container ${isMobile && "swap_container__mobile"}`}>
                    <div className="animation" id="swap_canvas" />
                </div>

                {!isMobile && <div className='swap_spacer' />}


                <div className="content_container" style={{ margin: `${isMobile && "17vh auto 0 auto"}` }}>
                    <div className="blob_purple" />
                    <div className="blob_orange" />
                    <h1 className="f-size-h1 f-weight-bl">IDEP SWAP</h1>
                    <p className='main_description f-size-p2 f-weight-l'>
                        <b>Defi for digital assets. And beyond.</b> {" "}
                        With the fusion of traditional digital content and blockchain
                        technology, the need has arisen for trustless exchange of assets.
                        IDEP SWAP allows anyone to launch their own decentralized marketplace
                        with a click of a button. Integrate easily into any application and
                        create your own branded swap, all fully powered by IDEP.
                    </p>
                    <div className="features">
                        {content.map((feature, i) => (
                            <div key={i} className="feature">
                                <div className="image_container" style={{
                                    backgroundImage: `url("./images/swap_icon/${feature.imageUrl}")`,
                                    backgroundSize: ` ${i == 0 || i == 3 ? '100%' : '55%'}`
                                }} />
                                <div className="content">
                                    <h2 className="f-size-h4 f-weight-bo feature_title">{feature.title}</h2>
                                    <p className="f-size-p2 f-weight-m feature_description">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Swap
