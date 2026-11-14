function doGet() {
  return HtmlService.createHtmlOutputFromFile('index') // <-- 'i' kecil
    .setTitle('Generator Watermark GPS')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
