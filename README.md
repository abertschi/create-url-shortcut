# create-url-shortcut

> Create an URL shortcut file

This module creates a platform dependent shortcut file to an Internet location, such as a Web address.

## Install
```
$ npm install create-url-shortcut --save
```

## Usage
```js
const createShortcutUrl = require('create-url-shortcut');

var shortcut = createShortcutUrl('http://google.ch');
console.log(shortcut);

// {
//   value: '[InternetShortcut]\nURL=' + http://google.ch + '\n'',
//   ext: 'url'
// };
```

For Windows and Mac OS X, data for a file with the extension *.url* is generated.

- http://fileinfo.com/extension/url

```
[InternetShortcut]
URL=http://google.ch
```

For Unix-Like operating systems, data for a file with the extension *.desktop* is generated.

```
[Desktop Entry]
Encoding=UTF-8
URL=http://google.ch
Type=Link
Icon=text-html
```

- http://fileinfo.com/extension/desktop

## API

### createShortcutUrl(webAddress): urlShortcut

#### webAddress

- Type: string

Internet location to refer to

### urlShortcut

- Return type: object

#### urlShortcut.value

- Type: string

The data for the url shortcut file

#### urlShortcut.ext

- Type: string

The platform dependent file extension.
- For Windows and Mac OS X: *url*
- For Unix like operating systems: *desktop*

## Related packages
- [create-url-shortcut-cli](https://github.com/abertschi/create-url-shortcut-cli): CLI to create an url shortcut file
- [open-shortcut](https://github.com/sindresorhus/open-shortcut): Open the URL from a url shortcut file
- [shortcut-url](https://github.com/sindresorhus/shortcut-url): Get the URL from a url shortcut file

## License

![license: MIT]( https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
[![twitter: @andrinbertschi]( https://img.shields.io/badge/twitter-andrinbertschi-yellow.svg?style=flat-square)](http://twitter.com/andrinbertschi)  
