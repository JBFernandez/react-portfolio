import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './profile.css';
import resumePDF from '../../../assets/Resume/joseCV.pdf';



export const Profile = () => {
  return (

    <div className='profile-container' >
        <div className='profile-parent' >
            <div className='profile-details' >
                <div className='colz' >
                    <div className='colz-icon' >
                        
                        <a href="https://github.com/JBFernandez">
                            <i className='fa fa-github-square' ></i>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/jose-bernardo-fernandez-sanjurjo/">
                            <i className='fa fa-linkedin-square' ></i>
                        </a>

                        <a href="https://twitter.com/JBernardoFernn1">
                            <i className='fa fa-twitter' ></i>
                        </a>

                    </div>
                </div>            

            <div className='profile-details-name' >
                <span className='primary-text' >
                    { "" }
                    HELLO, I'M <span className='highlighted-text' > JOSE </span>
                </span>
            </div>
                <div className='profile-details-role' >
                    <span className='primary-yext' >
                        { "" }
                        <h1>
                            {" "}
                            <Typical
                            loop={ Infinity }
                            steps={[
                                "Passionate Developer ❤️ ",
                                1000,
                                "Full Stack Developer 💻 ",
                                1000,
                                "Problem Solver 🧠 ",
                                1000,
                                "JS, React, Java Developer 😎 ",
                                1000,
                                "Crypto Enthusiast 🌐 ",
                                1000,
                            ]}                            
                            />
                        </h1>
                        <span className='profile-role-tagline' >
                            Knack of building applications with front and back-end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options' >
                    <button 
                        className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href={ resumePDF } download="Jose Fernandez - CV.pdf" >
                        <button className='btn highlighted-btn' > Get Resume </button>
                    </a>
                </div>
            </div>
            <div className='profile-picture' >
                <div className='profile-picture-background' >

                </div>
            </div>
        </div>
    </div>
  );
}
