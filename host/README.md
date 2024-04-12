# Host

The main micro-frontend application that consumes and integrate remote modules.

## Setup

### Webpack

This template uses **Webpack Module Federation** to share and import modules.

#### Local

For the local configuration we should have the following:

```js

    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "<ANY_MODULE>@http://localhost:<PORT>/<FILENAME>.js",
      },
    }),

```

#### Production

For the production configuration we should have the following:

```js

    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "<ANY_MODULE>@<PRODUCTION_URL>/<FILENAME>.js",
      },
    }),

```

### Remotes Configuration

Add your remote(s) import to the `remotes.config.ts` file.

#### Types

Add the **Typescript types** for your remote module to the `remote.types.ts` file.

```ts
declare module "CONTAINER/ANY_MODULE" {
  const ANY_MODULE: React.ComponentType

  export default ANY_MODULE
}
```

### Remotes Wrapper

Now for any remote added to the application, create a wrapper for it inside the `/remotes` folder. As a good practice, also create a **fallback component** for it.

### Routes

To complete the setup add your wrapper to the `routes.tsx` configuration file.

## Development

### Install dependencies

```

    yarn


```

### Developement mode

```

    yarn start

```

### Build

```

    yarn build

```
