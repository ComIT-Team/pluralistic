
import { Carousel } from 'react-responsive-carousel';
import { banner1, banner2, banner3 } from "../Images";

const Banner = () => { 
    // const[doActive, setDoActive] = useState(0);
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
     
    //     beforeChange:(prev, next)=>{
    //         setDoActive(next);
    //     },
    //     appendDots: dots => (
    //         <div
    //           style={{
    //             position: "absolute",
    //             top:"100%",
    //             left:"0",
    //             right:"0",
    //             margin:"0 auto",
    //             transform:"translate(-50% -50%",
    //             width:"210px",
              
    //           }}
    //         >
    //           <ul style={{ width:"100%", display:"flex",
    //           alignItems:"center",
    //           justifyContent:"space-between"
    //           }}> {dots} </ul>
    //         </div>
    //       ),
    //       customPaging: i => (
    //         <div
    //           style={
    //             i=== doActive ?{
    //             width: "30px",
    //             height: "30px",
    //             borderRadius:"50%",
    //             display:"flex",
    //             alignItems:"center",
    //             justifyContent:"center",
    //             background:"#131921",
    //             padding:"8px 0",
                
    //             color: "white",
    //             cursor:"pointer",
    //             border: "1px solid #f3a847",
    //           }
    //           : {
    //             width: "30px",
    //             height: "30px",
    //             borderRadius:"50%",
    //             display:"flex",
    //             alignItems:"center",
    //             justifyContent:"center",
    //             background:"#1232F3E",
    //             padding:"8px 0",
    //             color: "white",
    //             cursor:"pointer",
    //             border: "1px solid white",
    //           }}
    //         >
    //           {i + 1}
    //         </div>
    //       ),
    //       responsive:[
    //         {
    //           breakpoint:576,
    //           settings:{
    //             dots: true,
    //             appendDots:(dots)=>(
    //               <div
    //               style={{
    //                 position:"absolute",
    //                 top:"100%",
    //                 left:"0",
    //                 right:"0",
    //                 margin:"0 auto",
    //                 transform:"translate(-50% -50%)",
    //                 width:"150px",
    //               }}>
    //                 <ul style={{ width:"100%", display:"flex",
    //           alignItems:"center",
    //           justifyContent:"space-between",
              
    //           }}> {dots} </ul>
    //               </div>
    //             )
    //           }
    //         }
    //       ]
      //};
  return (
   
        
        <div className="w-full relative  mx-auto">
        <Carousel autoPlay infiniteLoop showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}>
                <div>
                    <img src={banner1} alt="banner1" />
                    
                </div>
                <div>
                    <img src={banner2} alt="banner2"/>
                    
                </div>
                <div>
                    <img src={banner3} alt="banner3" />
                    
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hero" />
                    
                </div>
            </Carousel>
            <div className='w-full h-60 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 '>
             <div className="object-contain"> </div>
            </div>
        </div>
     
  )
}

export default Banner