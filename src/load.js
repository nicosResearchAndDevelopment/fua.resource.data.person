module.exports = {
    '@context':        'fua.load.rdf',
    'dct:identifier':  __filename,
    'dct:format':      'application/fua.load+js',
    'dct:title':       'load',
    'dct:alternative': '@nrd/fua.resource.data.person',
    'dct:requires':    [{
        'dct:identifier': '../data/jlangkau.ttl',
        'dct:format':     'text/turtle'
    }, {
        'dct:identifier': '../data/spetrac.ttl',
        'dct:format':     'text/turtle'
    }]
};
