
![Screen Shot](https://previews.dropbox.com/p/thumb/ABAd7kXJYWDnJh3H7rfoJvavetbEkKrT7mglCCmAbhO-jXcskquyJAbLZPhjlfAOPGoX0ilGQvLxXGivnwmjMfo3mFnLWsyRmSrCuO10FePPrBuwqx7JlKFEZ7czQs4vIx3oq2H3VD-F9xSj_MYjSAKgbld-3X7nuw_I6CExvk4Rbyx8B9xQpAWlL0Z0GOqS8VawFnPopsxX5kpiEwypp85mhbeaCYS1dBQc8UsbSGtE5-I-h3dFp0BsXikjdmlSoJDnv96DV29gVp1RApkMHITuYqvX58_L24qyQZpoGd-kc8fX3RWDW0nLfz-9BsfCBLC97n0IXjl4bwglBlwiDJmmNDBynFMtB8bxAtr20r4AZg/p.png?fv_content=true&size_mode=5)



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


