import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

let sectionData=[
    {
        title: "Skills" , 
        des: "My skill set includes Java, DSA, Spring Boot, SQL, JPA Hibernate, Core Java, OOPs (Java), API's structure ,DB design , HTML , CSS , JavaScript and ReactJS . I have also achieved several milestones in my academic career, such as passing the NCC - A certificate and the Intermediate grade drawing Examination. Additionally, I published a research paper on Properties of Rubberized concrete in SPANDAN 2022 - A National Conference on advances Engineering .I also published a research paper (Review) on Low-Cost Housing in a college fest. I have participated in various technical events and workshops ."} ,
    {
        title:"Experiance" ,
        des: "In terms of work experience, I am currently undergoing web development training with Acciojob. Through this course, I have worked on industry-level projects with top employers of MNCs and have learned technologies such as Spring Boot, JPA Hibernate, DSA ,HTML ,CSS ,JavaScript and Some Concepts of ReactJS"
    },
    {
        title:"Projects" ,
        des: "One of my most recent personal projects is the Book My Show Backend Application, which is a Spring Boot backend application that enables users to book tickets, find shows, search movies, and use 10-12 APIs. I used a variety of tools and frameworks, including JPA Hibernate for the MySQL DB, Maven, and Postman. Through this project, I gained knowledge of Spring, Hibernate, different layers of APIs, MySQL, and MVC architecture. You can view my code on my GitHub page: https://github.com/sarangbhimanwar2712/Book-My-Show-Application."
    }
]


const App =()=>{

    return (
        <div>
            {/* <h1>Sarang</h1> */}
            <Navbar/>
            <About/>
            {
                sectionData.map((value ,index)=>(
                    <Section 
                    title={value.title} 
                    des={value.des} 
                    />
                ))
            }
            <Footer/>
        </div>

    )
}

export default App ;