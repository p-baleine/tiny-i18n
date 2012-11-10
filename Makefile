
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

test: build
	@./node_modules/.bin/mocha \
	--reporter spec \
	--ui bdd

autotest: build
	@./node_modules/.bin/mocha \
	--watch \
	--growl \
	--reporter spec \
	--ui bdd

.PHONY: clean test autotest
