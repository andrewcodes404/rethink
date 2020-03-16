import React from 'react'
import PropTypes from 'prop-types'
import { StyledProfileBar } from './profileBarStyle'

class ProfileBar extends React.Component {
    render() {
        const link = 'https://forms.gle/2a96ETPE7vMDMioA7'

        return (
            <StyledProfileBar>
                {this.props.profileData.map((el, index) => {
                    return (
                        <div className="profile-wrapper profile-visitor" key={index}>
                            <div className="profile-bkg-img">
                                <img
                                    src={`./static/photos/profile-${el.bkgImg}-lrg.jpg`}
                                    alt=""
                                    srcSet={`./static/photos/profile-${el.bkgImg}-sml.jpg 700w,
                                            ./static/photos/profile-${el.bkgImg}-med.jpg 1000w,
                                            ./static/photos/profile-${el.bkgImg}-lrg.jpg 1800w,
                                            `}
                                />
                            </div>

                            <div className="profile-card">
                                <div className="profile-info" data-aos="fade-in">
                                    <div className="profile-img">
                                        <img src={`./static/icons/${el.icon}-white.svg`} alt="" />
                                    </div>
                                    <div className="profile-text">
                                        {el.list.map((el, index) => (
                                            <p className="list-item white" key={index}>
                                                {el}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="profile-message">
                                    <a href={link} target="_blank" rel="noopener noreferrer">
                                        &gt; Click here to become a {this.props.profileMessage} &lt;
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </StyledProfileBar>
        )
    }
}
ProfileBar.propTypes = {
    profileData: PropTypes.array,
    profileMessage: PropTypes.string,
}

export default ProfileBar
