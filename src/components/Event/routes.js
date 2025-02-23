import EventDetail from './eventDetail';
import ImageShowCase from '../common/ImageShowCase';

// A function to dynamically load content files
const loadContentModules = async () => {
    const context = require.context('./content', false, /content.*\.js$/); // Match content-*.js files
    const modules = context.keys().map((key) => context(key));
    return modules.reduce((acc, module) => {
        acc.push(
            {
                path: module.pathName,
                element: <EventDetail eventMeta={module.eventMeta} />
            },
            {
                path: `${module.pathName}/images`,
                element: <ImageShowCase rootFoler={module.eventMeta.imageRootFolder} />
            }
        );
        return acc;
    }, []);
};

const routesPromise = loadContentModules();
export default routesPromise;
