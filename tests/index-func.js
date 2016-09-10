casper.test.begin('Testing index page', 1, function (test) {
	casper
		.start('http://localhost:8080')
		.then(function () {
			this.echo('Text appearing', 'COMMENT');
			this.click('.action');
			test.assertExists('.text', 'Text is appearing after click');
		})
		.run(function () {
			test.done()
		});
});