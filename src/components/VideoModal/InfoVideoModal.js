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

          <div id="media-carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#media-carousel" data-slide-to="0" class="active"></li>
              <li data-target="#media-carousel" data-slide-to="1"></li>
              <li data-target="#media-carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">


              <div class="carousel-item active">
                <div class="wrapper">
                  <iframe
                    width="315"
                    height="315"
                    src="https://www.youtube.com/embed/5hghT1W33cY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                  </iframe>
                </div>
              </div>


              <div class="carousel-item">
                <div class="wrapper">
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
                </div>
              </div>


              <div class="carousel-item">
                <div class="wrapper">
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
                </div>
              </div>
            </div>


            <a class="carousel-control-prev" href="#media-carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#media-carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
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