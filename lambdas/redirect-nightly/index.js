'use strict';

exports.handler = (event, context, callback) => {
    const response = {
        status: '301',
        statusDescription: 'Moved Permanently',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://www.openttd.org/downloads/openttd-releases/latest.html',
            }],
        },
    };
    callback(null, response);
};
