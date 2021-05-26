import './InfoVideoModal.css';

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

          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>


            <div class="carousel-inner">
              <div class="carousel-item active">
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
                  show
                  handleVideoClose
                >
                </iframe>
              </div>
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
                  show
                  handleVideoClose
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>


        <br></br>
        <button className="btn btn-outline-light" type="button" onClick={handleVideoClose}>
          Close
        </button>
        <br></br>
        <p>  </p>
      </section>
    </div>
  );
};

export default VideoModal;