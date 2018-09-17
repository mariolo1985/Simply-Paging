# Simply Paging

A simple React module to add `PREVIOUS` and `NEXT` paging functionality to your component

A work-in-progress ReactJS module.

Built by: [Mario Lo](https://github.com/mariolo1985)

## Install

```
yarn add simply-paging
```

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

At the moment, SCSS files has to be imported at

```javascript
@import '../../node_modules/simply-paging/dist/scss/master.scss';
```

or copy from ```'../../node_modules/simply-paging/dist/css/master.min.css'``` directlly to your css.

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

## Feature Request

Please message hello@websitesbymario.com for feature requests.

## Bug Report

Please message hello@websitesbymario.com to report bugs.
