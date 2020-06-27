/** contents on page
1. text box -- post button
2. Show Posts
3. If moderator and post ka deadline nahi hua hai
  then show like/dislike button
4. If user then show post rating if deadline is completed.
 */


function getPosts() {
  // const xhttp = new XMLHttpRequest();

  // xhttp.open("GET", "http://localhost:5754/api/v1/getAllPosts", false);
  // xhttp.send();
  let posts;
  const loginToken = localStorage.getItem('loginToken');
  $.ajax({
    "type": "GET",
    "url": "http://localhost:5754/api/v1/getAllPosts",
    "headers": { "Authorization": "Bearer " + loginToken },
    "dataType": "json",
    success: function (dataString) {
      console.log('**get all posts response from server : ', dataString);
      posts = dataString.posts;
      console.log('posts : ', posts);
      populatePostOnDom(posts);
    },
    error: function (failureResponse) {
      console.log('**failure response : ', failureResponse);
    }
  });
  console.log('completed get all postss');

}

function populatePostOnDom(posts) {
  let postCollection;
  const userId = localStorage.getItem('id');
  console.log('userId : ',userId);
  for (let post of posts) {
    postCollection += '<div class="col-12">';
    postCollection += '<div class="card">';
    postCollection += '<div class="card-body">';
    postCollection += `<h5 class="card-title">${post.postContent}</h5>`;
    postCollection += `<h6 class="card-subtitle mb-2 text-muted">${post.result}</h6>`;
    postCollection += '<hr>';
    if(userId !== post._id) {
    postCollection += `<button types="button" class="btn btn-primary" onClick="postLike('${post._id}')"> Like </button>`;
  }
    postCollection += '</div> </div> </div>';
    // set to localstorage 

  }
  document.getElementById('allposts').innerHTML = document.getElementById('allposts').innerHTML + postCollection;
}

function postLike(postId) {
  console.log('postId : ', postId);
  alert(postId);
}

function submitPost() {

  const loginToken = localStorage.getItem('loginToken');
  console.log('loginToken : ', loginToken);
  const post = document.getElementsByName('submitpost')[0].value;
  console.log('post : ', post);
  $.ajax({
    "type": "POST",
    "url": "http://localhost:5754/api/v1/createPost",
    "data": JSON.stringify({
      "postContent": post
    }),
    "headers": { "Authorization": "Bearer " + loginToken },
    "contentType": "application/json",
    "dataType": "json",
    success: function (dataString) {
      console.log('**response from server : ', dataString);
      getPosts();
    }
  });
}