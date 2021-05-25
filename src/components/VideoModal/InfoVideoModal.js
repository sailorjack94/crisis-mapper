import './InfoVideoModal.css';

const VideoModal = ({ handleVideoClose, show, children }) => {
  const showHideVideoClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideVideoClassName}>
      <section className="modal-main-video">
      <div className="modal-video">
    <h2>Videos</h2>
    <h4>Learn more about each of the natural disasters by watching the videos below!</h4>

    <iframe 
    id = "earthquake-video"
    class = "video"
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/e7ho6z32yyo" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

    <iframe 
    id = "volcano-video"
    class = "video"
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/VNGUdObDoLk" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

    <iframe
    id = "wildfire-video"
    class = "video"
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/5hghT1W33cY" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
    </iframe>

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