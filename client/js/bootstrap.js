$(document).ready(function(){
  for(user_interaction in user_interactions){
    user_interactions[user_interaction]();
  }
});

var user_interactions = {
  search_submit: function(){
    $('#search').submit(function(){
      var search_text_frag = $('#search_text').val().split('/');
      if(search_text_frag.length == 2){
        github.set_user_repo_update(search_text_frag[0], search_text_frag[1]);
        github.request();
      } else {
        alert("Repository must be in the format: 'user/repo'");
      }
      return false;
    });
  }
};
