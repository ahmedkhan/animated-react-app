import React from 'react';
import styled from 'styled-components';

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
height:100%;
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
@media screen and (max-width: 499px) {     
    padding:10px;  

}
`;

const H2 = styled.h2`
font-weight: 300;
font-size: 35px;
color: #fff;
@media screen and (max-width: 499px) {     
  font-weight: 150;
  font-size: 16px;  

}
`;

const H1 = styled.h1`
 font-size: 56px;
 font-weight: 600;
 margin: 5px 0 20px;
 word-spacing: 3px;
 color: #fff;
 @media screen and (max-width: 499px) {     
  font-weight: 300;
  font-size: 34px;  
}
`;

const H4 = styled.h4`
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    color: #fff;
@media screen and (max-width: 499px) {     
  font-weight: 150;
  font-size: 12px;  
}
`;
function Carousel() {  
  return (   
  
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
  <div className="carousel-item active" data-interval="5000">
    <Item>
      <Cover>        
          <HeaderContent>
            <Line></Line>
            <H2>Assignment Writing Service to Solve Your Academic Issues</H2>
            <H1>Assignment solutions</H1>
            <H4>Get assistance with your essay in humanities or social sciences</H4>
          </HeaderContent>        
      </Cover>
    </Item>
   </div> 
    <div className="carousel-item" data-interval="5000">
      <Item>
      <Cover>        
          <HeaderContent>
            <Line></Line>
            <H2>Custom Assignment Writing Service from Experts</H2>
            <H1>Assignment solutions</H1>
            <H4>Find help with complex programming, engineering, or mathematics assignment</H4>
          </HeaderContent>        
      </Cover>
    </Item>
    </div>
    <div className="carousel-item" data-interval="5000">
     <Item>
      <Cover>        
          <HeaderContent>
            <Line></Line>
            <H2>Professional Assignment Writing Services on Fair Termsh</H2>
            <H1>Assignment solutions</H1>
            <H4>Custom Assignment Writing Service from Experts</H4>
          </HeaderContent>        
      </Cover>
    </Item>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  )
}

export default Carousel;





