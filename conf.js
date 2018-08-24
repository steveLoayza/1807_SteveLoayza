var HtmlReporter = require('protractor-beautiful-reporter');
 
exports.config = {
   // your config here ...
   framework: 'jasmine',
   //seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect: true,
   specs: ['spec.js'],
   capabilities: {
       browserName: 'chrome'
     },
     var:reporter = new HtmlReporter({
        baseDirectory: 'angularApp/dist/',
        docName: 'report.html'
     }),
   onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'tmp/screenshots'
      }).getJasmine2Reporter());
   }

   
   
}