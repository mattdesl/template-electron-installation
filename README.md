# template-electron-installation

A bare-bones Electron setup for web-based media art & installations.

See the [canvas-sketch](https://github.com/mattdesl/template-electron-installation/tree/canvas-sketch) branch for a modified version of this repo that is a little more iterative (hot reloading and so on).

Git clone this repo, then:

```sh
cd template-electron-installation

# install deps
npm install
```

Now you can do the following:

```sh
# Test the app with a local server, i.e. pure browser
npm run serve

# Test the app with Electron locally
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

## Packaging Windows + Mac

If you are in control of the installation you might rather just run it locally with `npm run app` — but an EXE/APP executable is handy if you are passing the installation off to a remote team. You can change the output name with `productName` in [./package.json](./package.json).

I run these commands from a macOS computer. You'll need `wine` installed via homebrew to generate Windows builds. Or, you can modify the package.json script to only generate a specific build target. See [electron-packager](https://github.com/electron-userland/electron-packager#building-windows-apps-from-non-windows-platforms) for details.

#### Tips

If you have files or folders in your project repo that you don't want copied over, make sure to `--ignore` those in the `electron-packager` script.

You can also speed up build time by using `--platform=win32,darwin --arch=ia32,x64` instead of `--all`, if you only want to build for EXE/APP.

Another thing is to move all of your client-side (HTML/JS) dependencies to `devDependencies` in package.json, and only include modules that you actually require in `src/app.js` (currently the template doesn't require any additional modules). This will lead to a smaller output size.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/template-electron-installation/blob/master/LICENSE.md) for details.
