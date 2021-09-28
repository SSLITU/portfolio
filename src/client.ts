import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "qtwktgh2",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: false // Set to true when it's done. Makes a cache for you.
});