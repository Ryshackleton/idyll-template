# Idyll Template

This is a React app that mimics the [basic template project that Idyll provides](https://idyll-lang.org/docs/getting-started).  The main difference is that the default Idyll project requires a global install of Idyll to compile the Idyll markdown, whereas this project embeds Idyll into an existing React app using [the method described in the Idyll documentation](https://idyll-lang.org/docs/components/custom).  This project also uses webpack & babel to compile the JS.

The Idyll generated page that loads from the `build:watch` script (described below) documents how to load data and create a few basic charts, or you can see the [demo here](https://ryshackleton.github.io/idyll-template/).

### Installation

```shell
> git clone ssh://git@stash.ihme.washington.edu:7999/viz/idyll-template.git
> npm i
> npm run build:watch
```

