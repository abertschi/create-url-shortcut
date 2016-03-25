function getWinOrOsxShortcut(url) {
  return `[InternetShortcut]
URL=${url}
`;
}

function getUnixShortcut(url) {
  return `[Desktop Entry]
Encoding=UTF-8
URL=${url}
Type=Link
Icon=text-html
`;
}

module.exports = function(url) {
  let shortcut;

  if (process.platform == 'darwin' || process.platform == 'win32') {
    shortcut = {
      value: getWinOrOsxShortcut(url),
      ext: 'url'
    };
  } else {
    shortcut = {
      value: getUnixShortcut(url),
      ext: 'desktop'
    };
  }

  return shortcut;
}
