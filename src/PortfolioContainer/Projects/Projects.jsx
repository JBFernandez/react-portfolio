import React from "react";
import Animations from "../../utilities/Animations";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import ecomerce from '../../../src/img/Projects/ecomerce.png';
import porfolio from '../../../src/img/Projects/portfolio.png';
import gifApp from '../../../src/img/Projects/gifApp.png';

import "./projects.css";

export const Projects = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) {
      return;
    }

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscriptions =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="projects-main" id={props.id || ""}>
      <ScreenHeading title="Projects" subHeading="Projects I have developed" />

      <div className="row row-cols-1 row-cols-md-2" style={{padding:"10vh" }} >
        
        <div className="col mb-4">
          <div className="card">
            <h5 className="card-title">E-Comerce Website</h5>
            <img src={ecomerce} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Online ecommerce website for showcasing and selling clothes and decals.
              </p>
              <a href="https://github.com/JBFernandez/Eladoscuro" className="btn btn-primary ">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <h5 className="card-title">Personal Portfolio Website</h5>
            <img src={porfolio} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                A Personal Portfolio website to showcase all my information, details and projects.
              </p>
              <a href="https://github.com/JBFernandez/react-portfolio" className="btn btn-primary ">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <h5 className="card-title">Card title</h5>
            <img src={ecomerce} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                
              </p>
              <a href="#" className="btn btn-primary ">GitHub</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <h5 className="card-title">Gif App wiht React</h5>
            <img src={gifApp} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                A small app, made with React using hooks to fetch and display animated gifs.
              </p>
              <a href="https://github.com/JBFernandez/react-gifapp" className="btn btn-primary ">GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
