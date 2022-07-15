// addon.gs
// git: https://github.com/pffy/ramen
// license: https://unlicense.org/

function onOpen() {

  const ui = SpreadsheetApp.getUi();
  
  const cc = getLocale();
  const default_locale = 'en_US';

  if(!msgs[cc]) {
    Logger.log('%s locale not available yet,', cc);
    cc = default_locale;
  }

  ui.createMenu(msgs[cc].theTopMenu)
      .addItem(msgs[cc].theFirstString, 'menuItem1')
      .addSeparator()
      .addSubMenu(ui.createMenu(msgs[cc].theFirstSubMenu)
          .addItem(msgs[cc].theSecondString, 'menuItem2'))
      .addToUi();
}

function menuItem1() {
  const cc = getLocale();
  SpreadsheetApp.getUi()
     .alert(msgs[cc].theFirstMsg);
}

function menuItem2() {
  const cc = getLocale();
  SpreadsheetApp.getUi()
     .alert(msgs[cc].theSecondMsg);
}

function getLocale() {
  return SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetLocale();  
}
