import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import sanityClient from "../../client";
import mainLogo from '../../assets/LOGO.png';

interface PostData {
    title: string;
    slug: {
        _type: string;
        current: string;
    }
    mainImage: {
        asset: {
            _id: string;
            url: string;
        }
        alt: string;
    }
}

const Post: React.FC = () => {
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPostData(data))
            .catch(console.error);
    }, []);

    if (!postData) return <div>Loading...</div>

    return (
        <main className="bg-gray-100 min-h-screen p-6">
            <section className="container mx-auto">
                <Link to={"/"} key="home" >
                    <img src={mainLogo} alt="logo" className="shadow-l scale-75 transform ease-in-out mx-auto" ></img>
                </Link>
                <h2 className="text-lg text-gray-600 flex justify-center mb-10"> Watch my work </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Fix up the types in this function */}
                    {postData && postData.map((post: PostData, index) => (
                        <article key={post.slug.current}>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current} >
                                <span className="block h-72 relative rounded leading-snug bg-gray-100" key={index}>
                                    <img
                                        src={post.mainImage.asset.url}
                                        alt={post.mainImage.alt}
                                        // Trying to set some transition on the image on hover. Add active? what should it do?
                                        className="w-full h-full rounded object-cover absolute hover:-translate-y-4 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-400 focus:ring-opacity-50 transform transition"
                                    />

                                </span>
                            </Link>
                            <span className="relative flex justify-center items-center mb-0">
                                <h3 className="text-gray-800 text-xl px-2 py-2 rounded font-semibold tracking-wide">
                                    {post.title}
                                </h3>
                            </span>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Post;