var github = {
  __internal_options: {
    user: '',
    repo: ''
  },
  options: {
    host: 'https://api.github.com'
  },
  set_user: function(user){
    github.__internal_options.user = user;
  },
  set_repo: function(repo){
    github.__internal_options.repo = repo;
  },
  set_user_repo_update: function(user, repo){
    github.set_repo(repo);
    github.set_user(user);
    github.update_options();
  },
  update_options: function(){
    github.options.path = '/repos/' + github.__internal_options.user +
      '/' + github.__internal_options.repo + '/commits';
  },
  request: function(){
    $.ajax({
      url: github.options.host + github.options.path,
      dataType: 'jsonp',
      success: function(res){
        github.handle_response(res);
      },
      error: function(err){
        alert("An error was encountered while accessing github.");
      }
    });
  },
  handle_response: function(res){
    if(res.message != undefined){
      alert(github.response.message);
    } else {
      plumbtree.response = res;
      plumbtree.render();
      console.log(plumbtree.response);
    }
  }
};
