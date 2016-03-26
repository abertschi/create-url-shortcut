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

module.exports = function(url, platform = process.platform) {
  let shortcut;

  if (platform == 'darwin' || platform == 'win32') {
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
