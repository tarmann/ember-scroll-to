# ember-scroll-to-context

This README outlines the details of collaborating on this Ember addon.

## Installation

ember-scroll-to is an ember-cli addon. You can install it via:

```bash
ember install ember-scroll-to-context
```


## Usage

This addon makes two components available: `scroll-to-nav` and `scroll-to-context`.

```hbs
  {{#scroll-to-nav name="main" as |mainNav|}}
    {{#mainNav.scroll-to section="foo"}} Foo {{/mainNav.scroll-to}}
  {{/scroll-to-nav}}

  {{#scroll-to-context name="main" on="window" as |mainContext|}}
    {{#mainContext.section name="foo"}}
      <!-- content here -->
    {{/mainContext.section}}
  {{/scroll-to-context}}
```
 
## Contributing

### Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-to`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
