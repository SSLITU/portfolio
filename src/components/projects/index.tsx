import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient from '../../client';
import mainLogo from '../../assets/LOGO.png';
import { Link } from 'react-router-dom';

interface ProjectData {
    title: string;
    date?: any; // hmm? Date | string | number
    description: string;
    link?: string;
    place?: string;
    projectType: string;
    tags: string[];
}

const Projects: React.FC = () => {
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-100 min-h-screen p-12">
            <section className="container mx-auto">
                <Link to={"/"} key="home" >
                    <img src={mainLogo} alt="logo" className="shadow-l scale-75 transform ease-in-out mx-auto" ></img>
                </Link>
                <h2 className="items-center flex text-2xl justify-center mt-2"> Under Construction </h2>
                {/* <img src={mainLogo} alt="logo" className="shadow-l scale-75 transform mt-1 mx-auto" ></img>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Watch my work </h2>
                <section className="md: grid-cols-2 lg:grid-cols-3 gap-8 flex align-items">
                
                    {projectData && projectData.map((project: ProjectData, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-blue-500 text-3xl font-bold mb-2 hover:text-blue-700">
                               
                                <a id="link" href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-gray-500 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold"> Project Finished On</strong>: {" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold"> Company </strong>: {" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className="font-bold"> Type </strong>: {" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>
                                <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-blue-500 font-bold hover:underline hover:text-red-400 ">
                                    View The Project{" "}
                                    <span role="img" aria-label="right pointer">
                                        👉
                                    </span>
                                </a>
                                <div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section> */}
            </section>
        </main>
    );
};

export default Projects;