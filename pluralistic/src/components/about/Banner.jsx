
import Slider from "react-slick";
import { banner1, banner2, banner3 } from "../Images";
import { useState } from "react";
const Banner = () => {
    const[doActive, setDoActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
     
        beforeChange:(prev, next)=>{
            setDoActive(next);
        },
        appendDots: dots => (
            <div
              style={{
                position: "absolute",
                top:"100%",
                left:"0",
                right:"0",
                margin:"0 auto",
                transform:"translate(-50% -50%",
                width:"210px",
              
              }}
            >
              <ul style={{ width:"100%", display:"flex",
              alignItems:"center",
              justifyContent:"space-between"
              }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i=== doActive ?{
                width: "30px",
                height: "30px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                background:"#131921",
                padding:"8px 0",
                
                color: "white",
                cursor:"pointer",
                border: "1px solid #f3a847",
              }
              : {
                width: "30px",
                height: "30px",
                borderRadius:"50%",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                background:"#1232F3E",
                padding:"8px 0",
                color: "white",
                cursor:"pointer",
                border: "1px solid white",
              }}
            >
              {i + 1}
            </div>
          ),
          responsive:[
            {
              breakpoint:576,
              settings:{
                dots: true,
                appendDots:(dots)=>(
                  <div
                  style={{
                    position:"absolute",
                    top:"100%",
                    left:"0",
                    right:"0",
                    margin:"0 auto",
                    transform:"translate(-50% -50%)",
                    width:"150px",
                  }}>
                    <ul style={{ width:"100%", display:"flex",
              alignItems:"center",
              justifyContent:"space-between",
              
              }}> {dots} </ul>
                  </div>
                )
              }
            }
          ]
      };
  return (
    <div className="w-full">
        
        <div className="w-full h-full relative  mx-auto">
        <Slider {...settings}>
          <div className="mx-auto ">
            <img className="object-fill h-80 w-full" src={banner1} alt="img1" />
          </div>
          <div>
            <img className="object-fill h-80 w-full" src={banner2} alt="img2" />
          </div>

          <div>
            <img className="object-fill h-80 w-full" src={banner3} alt="img3" />
          </div>
          {/* <div>
            <img src={banner4} alt="img4" />
          </div>
          <div>
            <img src={banner5} alt="img5" />
          </div> */}
        </Slider>
        </div>
      </div>
  )
}

export default Banner