$(document).ready(function(){
  $.each(user_interactions, function(i, val){
    val();
  });
});


var user_interactions = {
  init_page: function(){
    var search_text_frag = window.location.hash.substr(1).split('/');
    if(search_text_frag.length == 2){
      $('#search_text').val(window.location.hash.substr(1));
      github.set_and_request(search_text_frag[0], search_text_frag[1]);
    }
  },
  on_hashchange: function(){
    $(window).hashchange(function(){
      user_interactions.init_page();
    });
  },
  search_submit: function(){
    $('#search').submit(function(){
      var search_text = $('#search_text').val()
      var search_text_frag = search_text.split('/');
      if(search_text_frag.length == 2){
        $('#search').attr('action', '#' + search_text);
        github.set_and_request(search_text_frag[0], search_text_frag[1]);
      } else {
        alert("Repository must be in the format: 'user/repo'");
        return false;
      }
    });
  }
};
