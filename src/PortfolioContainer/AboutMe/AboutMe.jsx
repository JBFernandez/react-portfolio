import React, { useEffect } from 'react';
import Animations from '../../utilities/animations';
import { ScreenHeading } from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/scrollService';



export const AboutMe = ( props ) => {


  return (

    <div className='about-me-container screen-container' >
      <div className='about-me-parent' >
        
        <ScreenHeading
            title={ 'About Me' }
            subHeading={ 'Why Choose Me?' }
        />
        
      </div>
    </div>
  )
}
