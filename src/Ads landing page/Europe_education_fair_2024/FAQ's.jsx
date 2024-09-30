import { Description } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const FaqData =[
    {
        id: 1,
        title: "When Should One Start Applying for Universities Abroad?",
        description: "Shortlist your program before a year and start planning to apply for universities before ten months, which can give you ample time for the visa and loan process."
    },
    {
        id: 2,
        title: "What are the documents required for the immigration & visa process?",
        description: "The visa application process can be complex and time-consuming. Knowing the list of documents beforehand is very important. Our study abroad consultant will provide you with the list of required documents and can also help you with mock visa interviews."
    },
    {
        id: 3,
        title: "What are the scholarship opportunities that students can get abroad?",
        description: "There are many universities abroad that can provide scholarships to students on their merit, financial, and experience basis. Our certified counselors can guide you through the process of choosing the university available with scholarships."
    },
    {
        id: 4,
        title: "Will there be any internships and part-time jobs available?",
        description: "It can depend on the country, course, or the university you have selected. Our overseas consultants can guide you to find the right universities that can help you with internships and part-time jobs while studying."
    },
    {
        id: 5,
        title: "Are there any medical documents requirements for studying abroad?",
        description: "Yes, but different countries have different medical requirements for international students. Examples: Mandatory vaccinations, health insurance, or medical tests. Our consultants can walk you through the process of medical requirements abroad."
    }
]
const FAQs =()=> {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    }
    return(
        <div className="FAQ_container">
            <div className="FAQ_content">
            <div className="FAQImage_container">
                <h1>FAQ's</h1>
                <h2>Frequently Asked Questions</h2>
                <p>Still  Do You have any Questions to know? Feel free to ask our experts here.</p>
                <img src="https://strapi.orientspectra.com/uploads/flat_people_asking_questions_illustration_23_2148906360_85b2192b80.webp" alt=""/>
            </div>
                <div className="FAQ_details">
                {FaqData.map((item)=>(
                    <Accordion 
                        key={item.id}
                        expanded={expanded === item.id}
                        onChange={handleChange(item.id)}
                        className="FAQs-list" 
                    >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${item.id}-content`}
                        id={`panel${item.id}-header`}
                    >
                    <Typography className="FAQ_Heading">{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className="FAQ_Content">{item.description}</Typography>
                    </AccordionDetails>
                </Accordion>
                ))}

                </div>
                
            </div>
            
        </div>
    )
}

export default FAQs;