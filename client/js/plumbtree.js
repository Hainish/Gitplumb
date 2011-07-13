$(document).ready(function(){
	plumbtree.initialize();
});

var plumbtree = {
	initialize: function(){
		jsPlumb.connect({source:'element1', target:'element2'});
	}
};
