# Simply Paging

A simple React module to add `PREVIOUS` and `NEXT` paging functionality to your component.

A work-in-progress ReactJS module.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add simply-paging
```

## Demo

![Demo][demo]

[demo]: https://raw.githubusercontent.com/mariolo1985/Simply-Paging/fix/controlstyle/demo/images/demo_sm.gif "Simply Paging Demo"


## Example

```javascript
import React from 'react';
import { SimplyPaging } from 'simply-paging';

const app = ({
    pages
}) => (
    <SimplyPaging>
    {
        pages.map((page) => {
            <div className='page'>
                <h1>{page.name}</h1>
            </div>
        })
    }
    </SimplyPaging>
);

export default app;

```

This will wrap your `.page` inside a content box of **100vh**. Paging controls will be automatically added.

## Styles

At the moment, styles has to be add one of two ways:

- Import the SCSS file

```javascript
@import '/node_modules/simply-paging/dist/scss/master.scss';
```

- Copy the CSS directly from the following file

```
/node_modules/simply-paging/dist/css/master.min.css
```

## Functions

N/A

## Parameters

| Parameter Name   | Type   | Required   | Default Value   | Description   |
| --- | --- | --- | --- | --- |
| children | node | true | null | Children nodes to display per page |
| vertical | boolean | false | true | Paging up and down is on by default |

**children**

`type: node`

Each children node inside ```<SimplyPaging/>``` component will be in its own page.

**vertical**

`type: boolean`

> WIP - currently only pages up and down

## Future Features

- [ ] Better way to import styles
- [ ] Support left/right paging
- [ ] Handle paging control on refresh (styling, location, resume paging, ...etc)

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.

[Bug List](https://github.com/mariolo1985/Simply-Paging/issues)
