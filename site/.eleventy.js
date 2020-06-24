const pluginSass = require("eleventy-plugin-sass")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({
        'src/assets': "_assets"
    })

    eleventyConfig.addPlugin(
        pluginSass,
        { watch: ["src/styles/*.scss"] }
    )

    return {
        dir: {
            input: 'src/pages',
            layouts: "../template",
            includes: "../template",
            data: "../data",
            output: 'dist'
        },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'md', 'css', 'html'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: "njk"
    }
}
