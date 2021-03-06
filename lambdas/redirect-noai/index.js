'use strict';

exports.handler = (event, context, callback) => {
    const response = {
        status: '301',
        statusDescription: 'Moved Permanently',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://docs.openttd.org/ai-api/',
            }],
        },
    };
    callback(null, response);
};
