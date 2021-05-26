import './InfoVideoModal.css';
import Carousel from 'react-bootstrap/Carousel'


const VideoModal = ({ handleVideoClose, show, children }) => {
  const showHideVideoClassName = show ? "modal display-block" : "modal display-none";

//  const endVideo = modal.on('hidden.bs.modal', function (e) {
//     "#modal iframe".attr("src", ("#modal iframe").attr("src"));
// });

  return (
    <div className={showHideVideoClassName}>
    <section className="modal-main-video">
      <div className="modal-video">
        <h2>Videos</h2>
        <h4>Learn more about each of the natural disasters by watching the videos below!</h4>

        <Carousel>
          <Carousel.Item>
          <iframe
                  id = "wildfires1"
                  class = "video"
                  width="315"
                  height="315"
                  src="https://www.youtube.com/embed/5hghT1W33cY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            <Carousel.Caption class = "caption">
              <h3>Learn more about wildfires!</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <iframe
                  class = "video"
                  id = "wildfire-360"
                  width="315"
                  height="315"
                  src="https://www.youtube.com/embed/kjx7z1F3pzE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
               
                >
                </iframe>

            <Carousel.Caption class = "caption">
              <h3> Watch a 360&#176; video of a wildfire!</h3>
            </Carousel.Caption>

          </Carousel.Item>


          <Carousel.Item>
          <iframe 
                  id = "earthquakes1"
                  class = "video"
                  width="315"
                  height="315"
                  src="https://www.youtube.com/embed/e7ho6z32yyo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                >
                </iframe>
            <Carousel.Caption class = "caption">
              <h3>Learn more about Earthquakes</h3>
            </Carousel.Caption>
          </Carousel.Item>


          <Carousel.Item>
          <iframe
                  class = "video"
                  id = "volcanoes1"
                  width="315"
                  height="315"
                  src="https://www.youtube.com/embed/VNGUdObDoLk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
               
                >
                </iframe>

            <Carousel.Caption class = "caption">
              <h3> Learn more about volcanoes</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <iframe 
          id = "volcanic-eruption"
          class = "video"
          width="315" 
          height="315" 
          src="https://www.youtube.com/embed/0-shWVW1UBc" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
          </iframe>

            <Carousel.Caption class = "caption">
              <h3> Watch a volcanic eruption!</h3>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>



      <br></br>
      <button className="btn btn-outline-light" type="button" onClick={handleVideoClose}>
        Close
      </button>
      <br></br>
      <p>  </p>
      </div>
    </section>
  </div>
);
};



export default VideoModal;