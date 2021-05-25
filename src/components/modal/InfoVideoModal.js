import './InfoVideoModal.css';

const VideoModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main-video">
      <div className="modal-video">
    <p>Crisis Mapper</p>
    <p>The Global Crisis Mapper plots significant natural disasters and events on the globe. Choose from the drop down to the left to pick the type of event you want to see.</p>
    <p>Events are plotted as red spikes on the earth's surface. The height of the spike refers to the magnitude of the event. Click on a spike for more information in the bottom right have corner.</p>
    <p>Magnitude refers to Volcanic Explosivity Index (VEI) and Richter Scale score for Volcanoes and Earthquakes respectively.</p>
    <p>In the current App, the Volcanoes plotted are the 250 most significant volcanic events. See more information to find out the event year. Earthquakes on the other hand are more frequent and the App plots the 100 most recent seismic events. The exact time of detection can be accessed by clicking on the individual points.</p>
      </div>
      <br></br>
        <button className="btn btn-outline-light" type="button" onClick={handleClose}>
          Close
        </button>
        <br></br>
        <p>  </p>
      </section>
    </div>
  );
};

export default VideoModal;