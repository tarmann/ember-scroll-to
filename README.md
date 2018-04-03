# ember-scroll-to

This README outlines the details of collaborating on this Ember addon.

## Usage

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
 
## Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-to`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
