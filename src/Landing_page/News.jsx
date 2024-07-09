import Img1 from "../assets/WhatsApp Image 2024-05-31 at 2.22.46 PM.jpeg";
import Img2 from "../assets/WhatsApp Image 2024-05-31 at 2.05.55 PM.jpeg";
import Img3 from "../assets/DSC02094.jpeg";

import Play from "../assets/playIcon.png";
import "./index.css";
const News = () => {
  return (
    <>
      <div className="section News-container">
        <h2>News & Media</h2>
        <div className="media-container">
          <div className="media-card">
            <div className="media-video">
              <img src={Img1} alt="" />
              <img className="playIcon" src={Play} alt="" />
            </div>
            <p>
              Title of <strong>The News </strong>
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              nemo excepturi? Obcaecati ut, soluta, nemo ullam ipsum nam dolores
              non accusamus illo quasi debitis perspiciatis? Sed fugiat eius id
              quos.
            </span>
          </div>
          <div className="media-card">
            <div className="media-video">
              <img src={Img2} alt="" />
              <img className="playIcon" src={Play} alt="" />
            </div>
            <p>
              Title of <strong>The News </strong>
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              nemo excepturi? Obcaecati ut, soluta, nemo ullam ipsum nam dolores
              non accusamus illo quasi debitis perspiciatis? Sed fugiat eius id
              quos.
            </span>
          </div>
          <div className="media-card">
            <div className="media-video">
              <img src={Img3} alt="" />
              <img className="playIcon" src={Play} alt="" />
            </div>
            <p>
              Title of <strong>The News </strong>
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              nemo excepturi? Obcaecati ut, soluta, nemo ullam ipsum nam dolores
              non accusamus illo quasi debitis perspiciatis? Sed fugiat eius id
              quos.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
