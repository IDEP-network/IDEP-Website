import { Component } from 'react'

const socials = [
    { name: 'discord', link: 'https://discord.gg/XyDZ3gbE' },
    { name: 'telegram', link: 'https://t.me/joinchat/fWmaZrRPh_tjNzcx' },
    { name: 'twitter', link: 'https://twitter.com/idepnetwork' },
    // { name: 'reddit', link:  },
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
