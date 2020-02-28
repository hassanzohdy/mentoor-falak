Config.extend({
    version: '1.7.0',
    http: {
        endpoint: {
            baseUrl: 'https://restful.mentoor.io/api',
            baseUrl: 'http://localhost/mentor/back/public/api',
            apiKey: 'SP6YHG56IKLO90MNF4TGAQW23FVBG765', // api key if required i.e Authorization: key {some-key}, add only the key without the `key` word
            baseRoute: '', // base route that will be added at the end of the base url
        }
    },
    markdown: {
        mention: {
            url() {
                return url('/');
            },
            preview: 'user-card',
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
        url: 'https://rta.mentoor.io',
        // url: 'http://localhost:3000',
    },
    user: {
        loginKey: '_u',
        accessTokenKey: '_at',
    },
    // "coin-image": assets('images/coins.svg')
});