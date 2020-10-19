
## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Install

``` bash
# Make sure that you have the Gatsby CLI program installed
npm install --global gatsby-cli

# run from your CLI
gatsby new gatsby-example-blog https://github.com/bielma/sor
```
In `gatsby-config.js` you need to add configuration for your Cosmic Bucket

``` javascript
{
  resolve: 'gatsby-source-cosmicjs',
  options: {
    bucketSlug: '', /* Find this in Your Bucket > Settings > Basic Settings after logging in at https://app.cosmicjs.com/login */
    objectTypes: ['posts', 'settings'], /* Object types to fetch */
    apiAccess: {
      read_key: '', /* Find this in Your Bucket > Settings > API Access after logging in at https://app.cosmicjs.com/login */
    },
    localMedia: true /* Optional. If you want to enable local image for Gatsby Image */
  }
},
```

Then

``` bash
# Then you can run it by
cd gatsby-example-blog
npm run develop
```


