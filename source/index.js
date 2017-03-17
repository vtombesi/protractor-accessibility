describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser
            .get('http://juliemr.github.io/protractor-demo/')
            .then(() => {

            });
        expect(browser.getTitle()).toBe('Super Calculator');
    });

    it('should have a wrong title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toBe('Super Calculatorama');
    });
});
