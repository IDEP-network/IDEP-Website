import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { fixScrollToTop } from 'components/utils/animations/gsap.animations';
import { fadeOutFadeIn } from '../../pages/landing/hero/utils/animations/hero.animations';
import { facts } from './loading.content';
const tl = gsap.timeline()




const Loading = ({ isLoading }: { isLoading: boolean }) => {
    const [fact, setFact] = useState('')




    
    useEffect(() => {
        setFact(facts[~~(Math.random() * facts.length)])
        init()
    }, [])


    useEffect(() => {
        if (!isLoading) {
            removeLoadingScreen()
            fadeOutFadeIn('.intro_video', ['.hero_title', '.scroll-down'])
        } 
    }, [isLoading])

    const init = () => {
        fixScrollToTop(7)
        tl.fromTo(".loading_main .fact", {
            yPercent: 100,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
        }, {
            yPercent: 0,
            delay: 1.5,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.2,
        })

        Array.from(document.querySelectorAll('.sphere')).map((sphere, i) => {
            tl.fromTo(sphere, {
                yPercent: 50,
                opacity: 0
            }, {
                yPercent: 0,
                opacity: 1,
                delay: i * .15,
                ease: "Bounce,easeOut",
            })
        })
    }

    const removeLoadingScreen = () => {
        tl.fromTo('.loading_main', {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'
        }, {
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%'
        })
        tl.to('.hero_title', {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "Expo.easeOut",
        })
    }



    return (
        <>
            <section className="loading_main">
                <div className="container">
                    <div className="content">
                        <div className="logo" />
                        <p className="fact f-size-h4 f-weight-bl">
                            {fact}
                        </p>
                        <div className="sphere_container">
                            <div className="sphere"><div className="gradient purple" /></div>
                            <div className="sphere"><div className="gradient green" /></div>
                            <div className="sphere"><div className="gradient red" /></div>
                            <div className="sphere"><div className="gradient black" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loading
