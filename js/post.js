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
    "headers": {"Authorization": "Bearer "+loginToken},
    "dataType": "json",
    success: function (dataString) {
      console.log('**get all posts response from server : ', dataString);
      posts = dataString.posts;
      console.log('posts : ',posts);
    },
    error: function (failureResponse) {
      console.log('**failure response : ', failureResponse);
    }
  });
  console.log('completed get all postss');
  // const books = JSON.parse(xhttp.responseText);

  for (let post of posts) {
      const x = `
          <div class="col-4">
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${post.postContent}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${post.result}</h6>
                      <div>Result: ${post.result}</div>
                      <hr>
                      <button type="button" class="btn btn-danger">Delete</button>
                      <button types="button" class="btn btn-primary" data-toggle="modal" 
                          data-target="#editBookModal" onClick="setEditModal(${book.isbn})">
                          Edit
                      </button>
                  </div>
              </div>
          </div>
      `

      document.getElementById('books').innerHTML = document.getElementById('books').innerHTML + x;
  
      // set to localstorage 
  
    }
 }

 function submitPost() {

  const loginToken = localStorage.getItem('loginToken');  
  console.log('loginToken : ',loginToken);
  const post = document.getElementsByName('submitpost')[0].value;
  console.log('post : ',post);
  $.ajax({
    "type": "POST",
    "url": "http://localhost:5754/api/v1/createPost",
    "data": JSON.stringify({
      "postContent": post
    }),
    "headers": {"Authorization": "Bearer "+loginToken},
    "contentType": "application/json",
    "dataType": "json",
    success: function (dataString) {
      console.log('**response from server : ', dataString);
      getPosts();
      // window.location.reload();
    }
  });
 }