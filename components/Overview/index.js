import { LinkIntext } from '../style/globalComps'
import React from 'react'
class Overview extends React.Component {
    render() {
        return (
            <div className="text-content-title-wrapper" id="overview">
                <h2 data-aos="my-anim"> It&apos;s time to rethink</h2>

                <div className="text-content" data-aos="new-animation">
                    <blockquote>
                        “…customers want sustainable products from sustainable
                        companies. This includes everything from labor practices
                        to the environmental impact of their production.”
                    </blockquote>
                    <p>Nielsen</p>

                    <h3>
                        The challenges that face our planet become more and more
                        critical each and every day. In order to hand future
                        generations a realistic chance of saving this unique and
                        fragile ecosystem, we have an opportunity to stabilise
                        the environment through collective change and shared
                        responsibility – but that opportunity is precious and
                        must not be wasted.
                    </h3>

                    <p>
                        ReThink Hong Kong is a two-day conference and showcase
                        that will explore and encourage meaningful partnerships,
                        inspire organisational change and present solutions for
                        a sustainable environment and circular economy.
                    </p>

                    <LinkIntext>
                        <p className="" data-aos="">
                            <a
                                href="https://forms.gle/cvuvpHGz4jcSyUCy8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Click here to receive full details on ReThink
                                2020
                            </a>
                        </p>
                    </LinkIntext>
                    <p>
                        Going beyond the Rs of Reduce, Reuse and Recycle;
                        sustainability professionals and business owners can
                        access the very latest insight from global visionaries
                        and take away purposeful learnings from real-life
                        enterprise case studies that will stimulate
                        collaboration and drive new strategies through the
                        avoidance of business risk and greater stakeholder
                        engagement.
                    </p>

                    <p>
                        ReThink provides a collaborative platform for
                        businesses, government and not-for-profit organisations
                        to harness the power of collective change, inspiring
                        sustainability stakeholders and bringing the value chain
                        together to create partnerships, foster a circular
                        economy and secure a more sustainable world.
                    </p>
                    <br />
                    <blockquote>
                        &quot; This planet is not terra firma. It is a delicate
                        flower and it must be cared for. It&apos;s lonely.
                        It&apos;s small. It&apos;s isolated, and there is no
                        resupply. And we are mistreating it. Clearly, the
                        highest loyalty we should have is not to our own country
                        or our own religion or our hometown or even to
                        ourselves. It should be to the planet at large. This is
                        our home, and this is all we&apos;ve got.&quot;
                    </blockquote>
                    <p>Scott Carpenter, Mercury 7 astronaut. October 1992.</p>
                </div>
            </div>
        )
    }
}
export default Overview
