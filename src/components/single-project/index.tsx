import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { Link } from 'react-router-dom';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: any) {
    return builder.image(source)
}

interface SinglePost {
    _id: string;
    authorImage: {
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        }
    }
    body: {
        _key: string;
        _type: string;
        children: {
            _key: string;
            _type: string;
            marks?: string[];
            text: string;
            marksDefs?: string[];
            style: string;
        }
    }
    mainImage: {
        asset: {
            _id: string;
            url: string;
            name: string;
        }
    }
    description: string;
    name: string;
    slug: {
        _type: string;
        current: string;
    }
    link: string;
    tags: string[];
    title: string;
}

const SingleProject: React.FC = () => {
    const [singlePost, setSinglePost] = useState<SinglePost>();
    const { slug }: { slug: string } = useParams();

    // Taking a look at the url that's been clicked on.
    useEffect(() => {
        sanityClient.fetch(`
        *[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            description,
            body,
            link,
            tags,
            "name": author->name,
            "authorImage": author->image
        }
        `).then((data) => setSinglePost(data[0]))
            .catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!singlePost) return <div>Loading...</div>

    return (
        <main className="bg-gray-100 min-h-screen p-8">
            <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
                <div className="px-8 lg:px-24 py-6 lg:py-10 bg-white grid md:grid-cols-2 grid-cols-1 rounded-2xl">
                    <div className="">
                        <div className="flex flex-wrap mb-5">
                            <Link to={"/post"} key="home" >
                                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-20 h-20 rounded-full" />

                            </Link>
                            <h2 className="text-4xl text-gray-900 font-bold mx-auto pr-14 pt-5 tracking-wide"> {singlePost.title}</h2>
                        </div>
                        <div className="mr-1">
                            {singlePost.tags.map((tag) => {
                                return (
                                    <div key={tag} className="bg-gray-800 m-1 relative inline-block rounded-md">
                                        <h2 className="p-2 text-xs font-bold text-white"> {tag} </h2>
                                    </div>
                                )
                            })}
                        </div>
                        <h2 className="text-l font-normal text-gray-900 italic leading-normal pt-6 mr-8 lg:text-xl">{singlePost.description}</h2>
                        {singlePost.link && <div className="mt-4">
                            <h3>
                                Source Code:{' '}
                                <a className="text-blue-500 text-l hover:text-blue-700" id="link" href={singlePost.link} target="_blank" rel="noopener noreferrer">
                                    {singlePost.link}
                                </a>
                            </h3>
                        </div>
                        }
                        </div>

                        <div className="block-container flex justify-center text-center lg:justify-end md:pt-0 pt-6">
                            <BlockContent
                                blocks={singlePost.body}
                                projectId="qtwktgh2"
                                dataset="production"
                            />
                        </div>
                </div>
            </article>
        </main>
    );
};

export default SingleProject;