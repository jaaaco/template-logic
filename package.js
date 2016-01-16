Package.describe({
    name: 'jaaaco:template-logic',
    version: '0.0.2',
    // Brief, one-line summary of the package.
    summary: 'Basic logical operation helpers for Meter Blaze templates',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('blaze-html-templates','client');
    api.use('underscore', 'client');
    api.addFiles('compare.js', 'client');
});