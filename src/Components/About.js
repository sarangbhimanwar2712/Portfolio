import React from "react";
import sarang from "../images/portfoliophoto.jpeg"

const About = ()=>{

    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={sarang} alt="My Img" />
            <p>
            As a Engineer, I am dedicated to producing the best results for organizations through hard and smart work. With proven leadership and organizational skills, I have a keen attention to detail and thrive in a team environment. I am passionate about utilizing my abilities to fill a job role in your company and help your organization achieve its goals.

            My education in Civil Engineering from Yeshwantrao Chavan College of Engineering has provided me with a strong foundation in problem-solving and analytical skills. Throughout my academic journey, I have maintained a CGPA of 8.63, demonstrating my commitment to excellence. I also completed my Junior College education at Janta Mahavidyalaya, where I earned a percentage of 82.92.
            </p>
            
           
        </div>
    )
}

export default About ;