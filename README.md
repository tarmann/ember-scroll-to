# ember-scroll-to-context

[Short description of the addon.]

## Install

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

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running Tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Building

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
