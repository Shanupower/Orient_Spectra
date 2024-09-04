import "./index.css";


const Mission_Vision = () =>{
    return(
        <div className="section Mission_container">
        <div className="Explore_leftSide">
          <p className="expliore">Our Strategic </p>
          <h2 className="Capabilities">Outlook</h2>
        </div>
        <div className="explore_rightSide">
            
        <div className="explore_rightCard">
            {" "}
            <img src="https://strapi.orientspectra.com/uploads/target_png_2_856eb4316a.png" alt="" className="corcesImage" />

            <h3>Mission</h3>
            <p>To help students who want to study abroad, to fulfill their aspirations which transform their lives and world.</p>
          </div>
          <div className="explore_rightCard">
            {" "}
            <img src="https://strapi.orientspectra.com/uploads/light_png_2_23f1eedcbe.png" alt="" className="corcesImage" />

            
            <h3>Vision</h3>
            <p>Is to tuch 1 Lakh lives and guide them in the right direction for the best education across the world.</p>
          </div>
        </div>
      </div>
    )
}

export default Mission_Vision;