release-patch:
	@$(call release,patch)

release-minor:
	@$(call release,minor)

release-major:
	@$(call release,major)

define release
	npm version $(1) -m 'release v%s'
	npm publish --access public
endef
