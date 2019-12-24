// Taken from https://github.com/montogeek/remark-responsive-tables
// Included manually as couldn't find a yarn plugin

const visit = require("unist-util-visit");

module.exports = md;

function md (options) {

  return function transformer(tree, file) {
    let headings;

    visit(tree, "tableRow", visitor);

    function visitor(node, index, parent) {
      // thead row
      if (node.type === "tableRow" && index === 0) {
        headings = node.children.map(header => header.children[0].value);
      }

      // tbody rows
      if (index !== 0) {
        node.children.forEach((node, idx) => {
          data = node.data || (node.data = {})
          props = data.hProperties || (data.hProperties = {})
          props['data-heading'] = headings[idx]
        })
      }
    }
  };
}