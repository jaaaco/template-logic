'use strict';

Template.registerHelper('_gt', function (value1, value2) {
    return value1 > value2;
});

Template.registerHelper('_gte', function (value1, value2) {
    return value1 >= value2;
});

Template.registerHelper('_lt', function (value1, value2) {
    return value1 < value2;
});

Template.registerHelper('_lte', function (value1, value2) {
    return value1 <= value2;
});

Template.registerHelper('_eq', function (value1, value2) {
    return value1 === value2;
});

Template.registerHelper('_eqOr', function (value1, value2, value3) {
    return value1 === value2 || value1 === value3;
});

Template.registerHelper('_and', function (value1, value2) {
    return value1 && value2;
});

Template.registerHelper('_or', function (value1, value2) {
    return value1 || value2;
});

Template.registerHelper('_not', function (value) {
    return !value;
});

Template.registerHelper('_in', function() {
    return _.contains(_.rest(arguments), _.first(arguments));
});
