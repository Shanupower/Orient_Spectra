import { useMediaQuery } from "@mui/material";

const WhyChoose =()=>{
    const isMd = useMediaQuery("(max-width:986px)");
    return(
        <div className="WhyChoose_Container">
            <h1>Discover Quality International Education Opportunities</h1>
            <p>We connect students, universities, and recruitment partners globally, 
                in our network to support your academic aspirations.</p>
                {isMd ? (
                    <>
                        <div className="WhyChoose-section">
                            <div className="WhyChoose-box">
                                <h2>19+</h2>
                                <p>Years of Experience</p>
                            </div>
                            <div className="WhyChoose-box">
                                <h2>15000+</h2>
                                <p>Successful Admits</p>
                        </div>
                        </div>

                        <div className="WhyChoose-section">
                        <div className="WhyChoose-box">
                            <h2>500+</h2>
                            <p>Global Universites</p>
                        </div>
                        <div className="WhyChoose-box">
                            <h2>98%</h2>
                            <p>Success Rate</p>
                        </div>
                        </div>
                    </>
                ):(
                    <>
                    <div className="WhyChoose-section">
                    <div className="WhyChoose-box">
                        <h2>19+</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className="WhyChoose-box">
                        <h2>15000+</h2>
                        <p>Successful Admits</p>
                    </div>
                    <div className="WhyChoose-box">
                        <h2>500+</h2>
                        <p>Global Universites</p>
                    </div>
                    <div className="WhyChoose-box">
                        <h2>98%</h2>
                        <p>Success Rate</p>
                    </div>
                    </div>
                    </>
                )}
            
        </div>
    )
}
export default WhyChoose;