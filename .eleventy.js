const Markdoc = require('@markdoc/markdoc'); 

module.exports = function(eleventyConfig) {
    // You can place JS, CSS, images etc. in src/_assets
    eleventyConfig.addPassthroughCopy('src/_assets');
    
    // Based on the example in the Eleventy docs: https://www.11ty.dev/docs/languages/custom/#overriding-an-existing-template-language
    eleventyConfig.addExtension("md", {
        compile: function (inputContent, inputPath) {
            let ast = Markdoc.parse(inputContent);
            let markdocConfig = {
                variables: {
                    currentYear: '2022'
                }
            };
            let content = Markdoc.transform(ast, markdocConfig);
            let html = Markdoc.renderers.html(content);    
            return () => html;
        }
      });

    return {
        //markdownTemplateEngine: false,
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "site"
        }
    }
};



