# Micro frontend skeleton

## First build each micro-frontend
Use in each micro frontend folder the command
```bash
npm run make-app
```

## Expose this app with a http server to test the micro-frontends

Typically like this:

```bash
npx http-server sample-app/
```

A npm script exists in the project, that builds everything and starts the http-server:
```bash
npm run start
```
