import './InfoVideoModal.css';
import { Carousel } from 'react-bootstrap';

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
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/5hghT1W33cY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                  </iframe>
              <Carousel.Caption>
                <h3>Learn about something!</h3>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/e7ho6z32yyo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  >
                  </iframe>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/e7ho6z32yyo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    show
                    handleVideoClose
                  >
                  </iframe>

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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