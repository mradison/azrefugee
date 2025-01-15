import OldroomJPG from "../assets/oldroom.jpg";
import HalfwayroomJPG from "../assets/halfway.jpg";
import NewroomJPG from "../assets/newroom.jpg";

function Missionpage({ TasksValue }) {
  return (
    <main className="main">
      <section className="mission">
        <h1 style={{ textDecoration: "underline" }}>Our Mission</h1>
        <div className="imageContainer">
        <p className="LCText">Before</p>
          <div className="imageItem">
            <img className="frontPics" src={OldroomJPG} alt="Before Picture" />
          </div>
          <p className="LCText">During</p>
          <div className="imageItem">
            <img
              className="frontPics"
              src={HalfwayroomJPG}
              alt="Halfway Picture"
            />
          </div>
          <p className="LCText">After</p>
          <div className="imageItem">
            <img className="frontPics" src={NewroomJPG} alt="After Picture" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Missionpage;