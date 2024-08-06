
import Button from "../Component/Common/Button";
import { motion } from "framer-motion";

// import useInViewport from "../Component/Hooks/useInViewport";
// import "../index.css";

// const GetStartedToday = () => {
//   const isAnimated = useInViewport();
//   return (
//     <>
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, x: -50 },
//           visible: { opacity: 1, x: 0 },
//         }}
//       >
//         <div className="section StudyAbroad">
//           <div className="studySection useInViewcard">
//             <p>Get Started Today!
//              </p>
//             <p className={`Getcontent ${isAnimated ? "animated" : ""}`}>
            
//             </p>
//           </div>
//           <Button
//             arrow={true}
//             className={`GetTuchArrow ${isAnimated ? "buttonfadeIn" : ""}`}
//           />
//         </div>
//         <div className="story-container section">
//             <div className="storytext-card">
//               <p>
//               Embark on your journey to academic excellence with Orient Spectra Overseas Education.
// Schedule a consultation with one of our experienced counselors today and
// take the first step towards realizing your educational dreams!
//               </p>
//             </div>
//         </div>    
//       </motion.div>
//     </>
//   );
// };

// export default GetStartedToday;
import useInViewport from "../Component/Hooks/useInViewport";
import "../index.css";

const GetStartedToday = () => {
  const isAnimated = useInViewport();
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="section StudyAbroad">
          <div className="studySection useInViewcard">
            <p color="#FF5F15" style={{marginBottom:"20px"}}>Get Started Today!</p>
            <p className={`Getcontent ${isAnimated ? "animated" : ""}`}>

            </p>
          </div>
          <Button
            arrow={true}
            className={`GetTuchArrow ${isAnimated ? "buttonfadeIn" : ""}`}
          />
        </div>
      </motion.div>
    </>
  );
};

export default GetStartedToday;

