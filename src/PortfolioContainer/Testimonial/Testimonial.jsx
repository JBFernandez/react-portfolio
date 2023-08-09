import React from "react";
import OwlCarousel from "react-owl-carousel"; // ReactOwl
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./testimonial.css";
import shape from "../../../src/img/Testimonial/shape-bg.png"
import lady from "../../../src/img/Testimonial/lady.png"
import man from "../../../src/img/Testimonial/man.png"
import mike from "../../../src/img/Testimonial/mike.png"
import daisy from "../../../src/img/Testimonial/daisy.jpg"
import mercedes from "../../../src/img/Testimonial/mercedes.png"

export const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) {
      return;
    }

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscriptions =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    // const options = {
    //   loop: true,
    //   margin: 0,
    //   nav: true,
    //   animateIn: "bounceInRight",
    //   animateOut: "bounceOutRight",
    //   dots: true,
    //   autoplay: true,
    //   smartSpeed: 1000,
    //   responsive:{
    //     0: {
    //       items:1,
    //     },
    //     768: {
    //       items:1,
    //     },
    //     1000: {
    //       items:3,
    //     }
    //   }
    // }

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What People Say About Me"}
      />
      <section className="testimonial-section screen-container fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            {/* <div className="owl-carousel" id="testimonial-carousel" { ...options } > */}
              
              <div className="col-lg-4"> {/* debe ir 12 para owl-carousel */}
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                        {/* Cambiar estos testimonials */}
                        <i className="fa fa-quote-left" />
                        Jose was among our most outstanding students. During the training he showed a clear commitment to the program and a high level of performance in his evaluations, which positioned him as a student of excellence among his peers, teacher and mentor.
                        <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled" >
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                        <li>
                            <i className="fa fa-star-half-alt" />
                        </li>
                        <li>
                            <i className="fa fa-star" />
                        </li>
                    </ul>
                  </div>
                  <div className="client-info" >
                    <img src={mercedes} alt="no internet connection" />
                    <h5> Mercedes de la Maza </h5>
                    <p>Generation Mexico CEO</p>
                  </div>
                </div>
              </div>

            {/* </div> */}
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
};
