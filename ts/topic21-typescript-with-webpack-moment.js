const moment = require('moment');

import( /* webpackChunkName: 'moment js '*/ 'moment')
.then((moment) => {
    // lazymodule ha all of the proper types, autocomplete works,
    // type checking works, code references work \o/
    const time = moment().format();

    console.log('typeScrip >=2.4.0 Dynamic Import Expression:');

    console.log(time);
}).catch((err) => {
    console.log('failed to load moment', err);
})