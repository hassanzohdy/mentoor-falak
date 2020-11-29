Config.extend({
    version: '1.7.0',
    http: {
        endpoint: {
            baseUrl: 'https://restful.mentoor.io/api',
            // baseUrl: 'https://test.mentoor.io/api',
            baseUrl: 'https://apps.mentoor.io/restful/api',
            // baseUrl: 'http://localhost/mentor/back/public/api',
            apiKey: 'SP6YHG56IKLO90MNF4TGAQW23FVBG765', // api key if required i.e Authorization: key {some-key}, add only the key without the `key` word
            baseRoute: '', // base route that will be added at the end of the base url
        }
    },
    spinner: {
        theme: 'primary-spinner',
    },
    markdown: {
        preview: {
            mentionUrl: '/profile/',
            // preview: '',
        },
        input: {
            async mention(text) {            
                let {records} = await DI.resolve('usersService').list({
                    username: text,
                    limit: 5,
                });
    
                return records.map(user => {
                    return {
                        text: user.name,
                        value: user.username,
                    };
                });     
            },
        },
    },
    pushNotificationKey: "BLUpM01-CwH-jBLr7TS3TuvgkSR1lk5_jCcv0nlrME_zVqd9nlXRVIsRZ107YFaEAL_Htz19lXN_7aGZapf9cTM",
    form: {
        imagePreview: assets('images/placeholder.png'),
        datepicker: {
            format: 'd-m-Y',
            dateTimeFormat: 'd-m-Y H:i',
        },
        dropdown: {
            theme: 'custom',
        }
    },
    google: {
        verification: 'eyydSkSJTxDmOLeXsvn682f0rT7QZCZWwL33cwnp5nM',
    },
    meta: {
        appendAppName: true,
        appNameSeparator: ' | ',
    },
    socket: {
        // url: 'https://test.mentoor.io:2020',
        // url: 'localhost:3000',
        url: 'https://rta.mentoor.io',
    },
    user: {
        loginKey: '_u',
        accessTokenKey: '_at',
    },
    // "coin-image": assets('images/coins.svg')
});