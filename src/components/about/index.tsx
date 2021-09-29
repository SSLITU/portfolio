import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/LOGO.png';
import Image2 from '../../assets/sebastian-casual2.jpg';
import cvDk from '../../assets/CV_Danish.pdf';
import cvEng from '../../assets/CV_English.pdf';
import grades from '../../assets/Masters_Grades.pdf';

interface AuthorData {
    authorImage: string;
    bio: {
        _key: string;
        _type: string;
        children: {
            _key: string;
            type: string;
            marks?: string[];
            text: string;
        },
        markDefs?: string[];
        style: string;
    }
    name: string;
}

const About: React.FC = () => {
    const [author, setAuthor] = useState<AuthorData | null>(null);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading... </div>

    return (
        <main>
            <section className="bg-gray-100 h-screen w-screen">
                <div className="absolute inset-0 w-1/3 bg-white transform ">

                    <Link to={"/"} key="home" >
                        <img src={mainLogo} alt="logo" className="shadow-l scale-75 transform mx-auto mt-2" ></img>
                    </Link>

                    <h2 className="text-3xl font-light text-gray-800 flex justify-center pt-5 mb-4">Contact</h2>

                    <ul className="list-none mt-10 ml-12 lg:ml-24">

                        <li className="mt-2 mr-2 text-sm text-gray-800">Phone: +45 4221 1006</li>
                        <li className="mt-2 mr-2 text-sm text-gray-800 break-words" >sebastiansoegaardlarsen@gmail.com</li>
                        <li className="mt-2 mr-2 text-sm text-gray-800">Jenagade 11, 2tv, 2300 København</li>
                    </ul>


                    <div className="flex-col">
                        <h2 className="mt-10 font-light text-3xl text-gray-800 flex justify-center"> Downloads </h2>

                        <h2 className="m-10 text-2xl flex justify-center">
                            👇
                        </h2>

                    </div>

                    <div className="block">
                        <ul className="ml-12 lg:ml-24">
                            <li className="flex justify-start m-4">
                                <a href={cvEng} download="Sebastian_Resume_ENG" className="text-gray-800 lg:text-xl text-lg hover:text-red-500" id="link" >
                                    English_Resume
                                </a>
                            </li>
                            <li className="flex justify-start m-4">
                                <a href={cvDk} download="Sebastian_Resume_DK" className="text-gray-800 lg:text-xl text-lg hover:text-red-500" id="link">
                                    Danish_Resume
                                </a>
                            </li>
                            <li className="flex justify-start m-4">
                                <a href={grades} download="Sebastian_Resume_DK" className="text-gray-800 lg:text-xl text-lg hover:text-red-500" id="link">
                                    Master_Grades
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-3 ">
                    <div>
                    </div>
                    <div className="ml-10 mr-8 mt-20">
                        <h2 className="text-3xl font-extralight text-red-700 opacity-90 flex justify-start pt-10 mb-4">About Me</h2>
                        <h2 className="font-serif text-sm text-gray-500 lg:text-base leading-relaxed tracking-wide font-thin pr-2" >
                            <BlockContent
                                blocks={author.bio}
                                projectId="qtwktgh2"
                                dataset="production"
                                className="description"
                            />

                        </h2>
                    </div>
                    <div className="mr-4 mt-28">
                        <img src={Image2} alt="profile" className="rounded mr-8" />
                    </div>
                </div>

            </section>
        </main>
    );
};

export default About;