import Img3 from "../../assets/Training_Program/Page.png";

const TopDestinations = ()=>{
    const isMd = useMediaQuery("(max-width:986px)");
    return(
        <div className="Destination_Container">
            <div className="Destination-section">
            {isMd ? (
                <>
                <div className="Destination-right">
                    <img src={Img3} alt="preparation" />
                </div>
                <div className="Destination-left">
                <h2>Shape your future with access to top global institutions!</h2>
                <p>We connect your aspirations with world-class universities, ensuring you find 
                    the perfect fit for your academic and career goals. Join a thriving community 
                    of students from all corners of the world, each pursuing their dreams at renowned 
                    universities. With our expertise, you’ll have the confidence to embark on a transformative 
                    educational journey that will shape your future and open doors to endless opportunities.
                </p>
                </div>
            </>
            ):(
                <>
                    <div className="Destination-left">
                        <h1>Your Gateway to <span>World-Class Education</span></h1>
                        <h2>Shape your future with access to top global institutions!</h2>
                        <p>We connect your aspirations with world-class universities, ensuring you find 
                            the perfect fit for your academic and career goals. Join a thriving community 
                            of students from all corners of the world, each pursuing their dreams at renowned 
                            universities. With our expertise, you’ll have the confidence to embark on a transformative 
                            educational journey that will shape your future and open doors to endless opportunities.
                        </p>
                    </div>
                <div className="Destination-right">
                    <img src={Img3} alt="preparation" />
                </div>
            </>
            )}
            
            </div>
        </div>
    )
}
export default TopDestinations;