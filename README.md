# template-electron-installation

A bare-bones Electron setup for web-based media art & installations.

This is setup with [canvas-sketch](https://github.com/mattdesl/canvas-sketch) for iterative development and bundling to a static site. See the `master` branch for a vanilla JS/HTML version.

Git clone this repo, then:

```sh
cd template-electron-installation

# install deps
npm install
```

Now you can do the following. Dev servers are all on `localhost:9966`.

```sh
# Develop iteratively with LiveReload + canvas-sketch
npm run start

# Bundle the canvas-sketch app into a static site
npm run bundle

# Bundle & test static site with a local server
# i.e. pure browser
npm run serve

# Bundle & test the app with Electron locally
npm run app

# Bundle the Electron app for 64-bit macOS + Windows
# It will install some dependencies on first run
npm run packager

# Once packaged, you can run this to zip it up
npm run zip
```

## Kiosk + Hotkeys

The Electron app runs in kiosk fullscreen mode and comes setup with the following hotkeys:

- Quit: **Cmd/Ctrl + W** or **Cmd/Ctrl + Q**
- Reload: **Cmd/Ctrl + R**
- Toggle Kiosk/Fullscreen Mode: **Cmd/Ctrl + F**

## Config

See [./src/config.js](./src/config.js) for a couple boot options.

Note the background color should be set in three places for ideal results: the Electron app (before page loads), the HTML style (before JS loads), and the canvas context itself (after JS loads).

## Packaging Windows + Mac

If you are in control of the installation you might rather just run it locally with `npm run app` — but an EXE/APP executable is handy if you are passing the installation off to a remote team. You can change the output name with `productName` in [./package.json](./package.json).

I run these commands from a macOS computer. You'll need `wine` installed via homebrew to generate Windows builds. Or, you can modify the package.json script to only generate a specific build target. See [electron-packager](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms) for details.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/template-electron-installation/blob/master/LICENSE.md) for details.
