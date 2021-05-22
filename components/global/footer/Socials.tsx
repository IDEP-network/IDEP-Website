import { Component } from 'react'

const socials = [
    { name: 'discord', link: 'https://discord.gg/Jrarctk4hG' },
    { name: 'telegram', link: 'https://t.me/IDEPNetwork' },
    { name: 'twitter', link: 'https://twitter.com/idepnetwork' },
    { name: 'medium', link: 'https://medium.com/idep-network' },
]

export default class Socials extends Component {
    render() {
        return (
            <>
                <div className="socials_main">
                    <div className="socials__icons">
                        {socials.map((social, i) => (
                            <a key={i} href={social.link} target='_blanck'>
                                <div className="icon"
                                    title={social.name}
                                    style={{
                                        backgroundImage: `url("images/social_icons/${social.name}.png")`
                                    }} />
                            </a>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}
