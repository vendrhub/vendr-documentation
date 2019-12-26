const visit = require('unist-util-visit');

module.exports = (options) => {
	function getVideoID(userInput) {
		var res = userInput.match(/^.*(?:(?:youtu.be\/)|(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))\??v?=?([^#\&\?]*).*/);
		if (res) return res[1];
		return false;
	}

  return tree => {
		visit(tree, 'inlineCode', node => {
			if (node.value.startsWith('youtube:')) {
                const videoID = getVideoID(node.value.slice(8));
				if (videoID) {
					node.type = 'html';
					node.value = `<div style="width: ${options.width || '100%'}; margin: 0 ${options.align || '0'};"><div style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/${videoID}?rel=0"></iframe></div></div>`;
				}
			}
		});
  };
};