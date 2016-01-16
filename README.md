Basic comparsion and logical operations for Meteor Blaze Templates

Install
-------

Inside your project folder run:

```
$ mrt add jaaaco:template-logic
```

Usage
-----

Helpers can be used as conditions in <strong>#if</strong> and <strong>#unless</strong> statements:

```html
{{#if _eq status 'active'}}
    ... html when object status == 'active'
{{/if}}
```

Available helpers
--------
* <strong>_eq value1 value2</strong> - returns true when value1 == value2
* <strong>_gt value1 value2</strong> - true when value1 > value2
* <strong>_gte value1 value2</strong> - true when value1 >= value2
* <strong>_lt, _lte</strong> - you probably get it now
* <strong>_and value1 value2</strong> - true when value1 && value2
* <strong>_or value1 value2</strong> - true when value1 || value2
* <strong>_not</strong> - true when !value1
* <strong>_in value1 value2 [value_N]</strong> - true when value1 equals value2 or any of next passed values