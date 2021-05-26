import './InfoVideoModal.css';
import Carousel from 'react-bootstrap/Carousel'


const VideoModal = ({ handleVideoClose, show, children }) => {
  const showHideVideoClassName = show ? "modal display-block" : "modal display-none";

//  const endVideo = modal.on('hidden.bs.modal', function (e) {
//     "#modal iframe".attr("src", ("#modal iframe").attr("src"));
// });

  return (
    <div>
   <Carousel>
           <Carousel.item>
             
             <div>
                <iframe
                  id="wildfire-video"
                  class="d-block w-100"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/5hghT1W33cY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                  </iframe>
                  </div>
                
                 
                 
              </Carousel.Item>
              <Carousel.item>
              <div class="carousel-item">
                <iframe
                  id="earthquake-video"
                  class="d-block w-100"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/e7ho6z32yyo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                >
                </iframe>
              </div>
              </Carousel.item>
              <Carousel.item>
              <div class="carousel-item">
                <iframe
                  id="earthquake-video"
                  class="d-block w-100"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/e7ho6z32yyo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            
                >
                </iframe>
                </div>
                </Carousel.item>
                </Carousel>
                </div>
            
         


        <br></br>
        <button className="btn btn-outline-light" type="button" onClick={handleVideoClose}>
          Close
        </button>
        <br></br>
        <p>  </p>
       

  );
};

export default VideoModal;