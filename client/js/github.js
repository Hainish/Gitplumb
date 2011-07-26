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
  set_and_request: function(user, repo){
    github.set_user(user);
    github.set_repo(repo);
    github.update_options();
    github.request();
  },
  handle_response: function(res){
    if(res.message != undefined){
      alert(github.response.message);
    } else {
      plumbtree.response = res;
      plumbtree.render();
    }
  }
};
