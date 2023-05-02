INSTALL_FLAG := .installed
BUILD_FLAG := .built

.PHONY: default install lint test clean_cov clean check run dev build start clean

default: dev

install: $(INSTALL_FLAG)

$(INSTALL_FLAG):
	yarn install
	touch $(INSTALL_FLAG)

lint:
	yarn lint
	yarn format

test:
	yarn test

check:
	yarn test-all

run: dev

dev: $(INSTALL_FLAG)
	[ -e "$(BUILD_FLAG)" ] && rm $(BUILD_FLAG) || :
	( yarn dev ) || :

build: $(BUILD_FLAG)

$(BUILD_FLAG): $(INSTALL_FLAG)
	yarn build
	touch $(BUILD_FLAG)

start: $(BUILD_FLAG)
	( yarn start ) || :

clean:
	[ -e "node_modules" ] && rm -rf node_modules || :
	[ -e ".next" ] && rm -rf .next || :
	[ -e "$(BUILD_FLAG)" ] && rm $(BUILD_FLAG) || :
	[ -e "$(INSTALL_FLAG)" ] && rm $(INSTALL_FLAG) || :