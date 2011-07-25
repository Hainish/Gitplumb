$(document).ready(function(){
	//plumbtree.initialize();
});

var plumbtree = {
	initialize: function(){
		jsPlumb.connect({source:'element1', target:'element2'});
	},
  render: function(){
    $.each(plumbtree.response.data, function(i, val){
      var commitDiv = document.createElement('div');
      commitDiv.id = val.sha;
      $(commitDiv).addClass('commit');
      $(commitDiv).html(val.commit.message);
      document.body.appendChild(commitDiv);
    });
  }
};
