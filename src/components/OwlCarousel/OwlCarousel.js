import React from 'react';
import styled from 'styled-components';
import useWebAnimations, { fadeInDown } from "@wellyshen/use-web-animations";
const Item = styled.div`
  height: 80vh;
  position: relative;
  }
`;
const Cover = styled.div`
padding: 75px 0;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;

}
`;
const Line = styled.div`
content: "";
display: inline-block;
width: 100%;
height: 100%;
left: 0;
top: 0;
position: absolute;
border: 9px solid #fff;
-webkit-clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
}
`;

const HeaderContent = styled.div`
position: relative;
padding: 56px;
overflow: hidden;
}
`;

const H2 = styled.h2`
font-weight: 300;
font-size: 35px;
color: #fff;

}
`;

const H1 = styled.h1`
 font-size: 56px;
 font-weight: 600;
 margin: 5px 0 20px;
 word-spacing: 3px;
 color: #fff;
 
}
`;

const H4 = styled.h4`
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    color: #fff;
}
`;
function Carousel() {
  const { keyframes, timing } = fadeInDown;
  const { ref } = useWebAnimations({
  keyframes,
  timing: {
    ...timing,
    delay: 100, // Delay 1s
    duration: timing.duration * 0.75, // Speed up the animation
    
  },
});
  return (   
  
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
  <div class="carousel-item active" data-interval="5000">
    <Item>
      <Cover>        
          <HeaderContent>
            <Line></Line>
            <H2>Teimagine Digital Experience with</H2>
            <H1 ref={ref}>Start-ups and solutions</H1>
            <H4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</H4>
          </HeaderContent>        
      </Cover>
    </Item>
   </div> 
    <div class="carousel-item" data-interval="5000">
      <Item>
      <Cover>        
          <HeaderContent>
            <Line></Line>
            <H2>Teimagine Digital Experience with</H2>
            <H1 ref={ref}>Start-ups and solutions</H1>
            <H4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</H4>
          </HeaderContent>        
      </Cover>
    </Item>
    </div>
    <div class="carousel-item" data-interval="5000">
     <Item>
      <Cover>        
          <HeaderContent>
            <Line></Line>
            <H2>Teimagine Digital Experience with</H2>
            <H1 ref={ref}>Start-ups and solutions</H1>
            <H4>We help entrepreneurs, start-ups and enterprises shape their ideas into products</H4>
          </HeaderContent>        
      </Cover>
    </Item>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

  )
}

export default Carousel;





