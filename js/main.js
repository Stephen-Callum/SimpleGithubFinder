$(document).ready(function() {
  $('#search-user').on('keyup', function(e) {
    let username = e.target.value;

    // Make request to github api
    $.ajax({
      url: `https://api.github.com/users/${username}`,
      data: {
        client_id: '208e0b74a18727645c51',
        client_secret: '2a41151515b57cf18a42fc24b73d812f919cf091'
      }
    }).done(function(user) {
      // add user profile information to div#profile
      $('#profile').html(`
        <div class="card border-light mb-3">
            <div class="card-header">${user.name}</div>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                <div class="row">
                <div class="col-md-3">
                    <img class="img-thumbnail mb-2" src="${user.avatar_url}">
                    <a class="btn btn-primary btn-block" target="_blank" href="${user.html_url}">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-warning">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-danger">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
                </div>                
            </div>
        </div>
        <h3 class="page-header">Latest Repos</h3>
        <div id="repos"></div>
        `);
    });
  });
});
