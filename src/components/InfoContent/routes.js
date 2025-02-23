import InfoContent from './guide';

// A function to dynamically load content files
const loadContentModules = async () => {
    const context = require.context('./guide', false, /content.*\.js$/); // Match content-*.js files
    const modules = context.keys().map((key) => context(key));
    return modules.map((module) => ({
        path: module.pathName,
        element: <InfoContent title={module.blogTitle} paragraphs={module.paragraphs} imageUrl={module.imageUrl} />
    }));
};

const routesPromise = loadContentModules();
export default routesPromise;
