# Remote

The standalone module exposed for hosts.

## Setup

You can use any **React framework** or template compatible with **Webpack Module Federation**. Just follow the steps to use your micro-frontend.

For any remote added to the host application the configuration will be the same.

### Webpack

This template uses Webpack Module Federation to share and import modules. Therefore, the **Webpack configuration** must expose the needed module(s) as shown in the example below:

```js

    new ModuleFederationPlugin({
      name: "CONTAINER_NAME", // The name for the container
      filename: "FILENAME.js", // Exposed modules file name
      exposes: {
        "./ANY_MODULE": "PATH_TO_ANY_MODULE", // The exposed module(s) should present here
      },
    }),

```

So it can be accessable from any other module:

```

http://localhost:<PORT>/<FILENAME.js>

```

You can check the example `webpack.config.js` file to use with your configuration.
