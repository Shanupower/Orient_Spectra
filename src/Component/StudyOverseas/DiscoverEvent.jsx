import { Chrono } from "react-chrono";
import Img1 from "../../assets/Blogs/study.png";
import "./StudyOverseas.css";
const DiscoverEvent = () => {
  return (
    <div className="Discover-container section">
      <div className="discover-left-card">
        <img src={Img1} alt="" />
      </div>
      <div className="discoverRight-card">
        <Chrono
          disableToolbar="true"
          theme={{
            primary: "#1f7aff",
            titleColor: "black",
          }}
          mode="VERTICAL"
          borderLessCards={false}
          cardHeight={210}
        >
          <div className="research-card">
            <span>Research & Discovery</span>
            <h2>Explore 50,000+ expert articles and university profiles</h2>
            <p>
              Dive into a world of diverse destinations, prestigious
              universities, and exciting courses.
            </p>
          </div>
          <div className="research-card">
            <span>Shortlisting</span>
            <h2>Find your Right-Fit Universities and Courses</h2>
            <p>
              Share your profile, and let our tools recommend the best-matched
              universities and courses for you
            </p>
          </div>
          <div className="research-card">
            <span>Counselling</span>
            <h2>Get Expert Advice from our Counsellors</h2>
            <p>
              Take the pivotal first step and engage in a personalized
              conversation with our expert mentors
            </p>
          </div>
          <div className="research-card">
            <span>Test Prep</span>
            <h2>Explore 50,000+ expert articles and university profiles</h2>
            <p>
              Get comprehensive test preparation with live classes and free
              demos from our certified teachers at Leverage Live for IELTS,
              TOEFL, PTE, GMAT, GRE and SAT
            </p>
          </div>
          <div className="research-card">
            <span>Applications & Offers</span>
            <h2>Stay Ahead with Real-Time Updates on your Applications</h2>
            <p>
              Seamlessly track your application progress and receive real-time
              updates on offers
            </p>
          </div>
          <div className="research-card">
            <span>Meeting Universities</span>
            <h2>Engage with 700+ World-Renowned Universities</h2>
            <p>
              Connect one-on-one with university representatives and secure
              instant offers
            </p>
          </div>
          <div className="research-card">
            <span>Loans & Scholarships</span>
            <h2>Finance your Study Abroad Dream</h2>
            <p>Secure affordable education loans through Fly Finance</p>
          </div>
          <div className="research-card">
            <span>Global Payments</span>
            <h2>Pay Tuition Fees in Foreign Currency with Ease</h2>
            <p>
              Safely transfer money abroad using Fly Finance's trusted
              international service
            </p>
          </div>
          <div className="research-card">
            <span>Visa & Travel</span>
            <h2>Prepare for a smooth journey</h2>
            <p>
              Secure your visa with VFS OneVasco’s world-renowned service and
              enjoy exclusive benefits from our international travel partners
            </p>
          </div>
          <div className="research-card">
            <span>Student Accommodation</span>
            <h2>Find Your Home Away from Home</h2>
            <p>
              Discover the finest options for accommodations that suit your
              lifestyle{" "}
            </p>
          </div>
          <div className="research-card">
            <span>Enrolling at University</span>
            <h2>Soar and Thrive at Your Dream University.</h2>
            <p>
              Join the community of 30,000+ students we've helped study abroad.{" "}
            </p>
          </div>
        </Chrono>
      </div>
    </div>
  );
};

export default DiscoverEvent;
