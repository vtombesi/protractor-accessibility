exports.config = {
  framework: "jasmine2",
  baseUrl: "http://localhost:4200",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["source/index.js"],
  capabilities: {
      "browserName": "chrome"
  },
  stackTrace: false,
  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: 'testresults',
      filePrefix: 'xmloutput'
    }));

    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');

      var HTMLReport = require('protractor-html-reporter');

      testConfig = {
        reportTitle: 'Test Execution Report',
        outputPath: './testresults/',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true
      };
      new HTMLReport().from('testresults/xmloutput.xml', testConfig);
    });

  }
};
