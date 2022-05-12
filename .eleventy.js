const Markdoc = require('@markdoc/markdoc');
const markdocConfig = {};
   

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/_assets');

    eleventyConfig.setDataDeepMerge(true);

    eleventyConfig.addExtension("md", {
        compile: function (inputContent, inputPath) {
            //console.log(inputContent);
            let ast = Markdoc.parse(inputContent);
            //console.log(ast);
            let content = Markdoc.transform(ast, markdocConfig);
            //console.log(content);
            let html = Markdoc.renderers.html(content);    
            console.log(html);
            return html;
        }
      });



    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "docs"
        }
    }
};



