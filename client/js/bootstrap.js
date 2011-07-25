$(document).ready(function(){
  $.each(user_interactions, function(i, val){
    val();
  });
});

var user_interactions = {
  search_submit: function(){
    $('#search').submit(function(){
      var search_text = $('#search_text').val()
      var search_text_frag = search_text.split('/');
      if(search_text_frag.length == 2){
        $('#search').attr('action', '#' + search_text);
        github.set_user_repo_update(search_text_frag[0], search_text_frag[1]);
        github.request();
      } else {
        alert("Repository must be in the format: 'user/repo'");
        return false;
      }
    });
  }
};
