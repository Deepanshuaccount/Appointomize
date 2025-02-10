import TagManager from 'react-gtm-module';

const initializeGTM = (gtmId) => {
    const tagManagerArgs = {
        gtmId: gtmId, // Your GTM ID
    };
    TagManager.initialize(tagManagerArgs);
};

export default initializeGTM;
