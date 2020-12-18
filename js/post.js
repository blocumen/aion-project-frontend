/** contents on page
1. text box -- post button
2. Show Posts
3. If moderator and post ka deadline nahi hua hai
  then show like/dislike button
4. If user then show post rating if deadline is completed.
 */
async function getUserInfo() {
  let user;
  const loginToken = localStorage.getItem("loginToken");
  $.ajax({
    type: "GET",
    url: "http://localhost:5754/api/v1/getUser",
    headers: { Authorization: "Bearer " + loginToken },
    dataType: "json",
    success: function (dataString) {
      if (dataString.reputationPoints) {
        document.getElementById("reputationPoints").innerHTML =
          dataString.reputationPoints;
      } else {
        document.getElementById("reputationPoints").innerHTML = 0;
      }
    },
    error: function (failureResponse) {
      console.log("**failure response : ", failureResponse);
    },
  });
}

function getPosts() {
  // const xhttp = new XMLHttpRequest();

  // xhttp.open("GET", "http://localhost:5754/api/v1/getAllPosts", false);
  // xhttp.send();
  let posts;
  const loginToken = localStorage.getItem("loginToken");
  $.ajax({
    type: "GET",
    url: "http://localhost:5754/api/v1/getAllPosts",
    headers: { Authorization: "Bearer " + loginToken },
    dataType: "json",
    success: function (dataString) {
      posts = dataString.posts;
      console.log("posts : ", posts);
      getUserInfo();
      populatePostOnDom(posts);
    },
    error: function (failureResponse) {
      console.log("**failure response : ", failureResponse);
    },
  });
}

function populatePostOnDom(posts) {
  let postCollection = "";
  const userId = localStorage.getItem("id");
  const userType = localStorage.getItem("userType");

  for (let post of posts) {
    let isLiked = false;
    for (let i = 0; i < post.ratings.length; i++) {
      const rating = post.ratings[i];
      if (rating.ratedBy === userId) {
        isLiked = true;
        break;
      }
    }
    if (post.result == "positiveStatus") {
      var postFeedback = "True News";
    } else if (post.result == "negativeStatus") {
      var postFeedback = "False News";
    } else if (post.result == "noStatus") {
      var postFeedback = "No Result Declared";
    }
    if(post.postContent){
      var postContent = post.postContent;
    }else{
      var postContent = post.tweetLink;
    }
    var postResult = (postCollection += '<div class="col-12 mt-2">');
    postCollection += '<div class="card">';
    postCollection += '<div class="card-body">';
    postCollection += `<h5 class="card-title">${postContent}</h5>`;
    postCollection += `<h6 class="card-subtitle mb-2 text-muted">Result : ${postFeedback}</h6>`;
    postCollection += "<hr>";
    // moderator should not have already rated the post.
    if (userType === "moderator" && !isLiked && post.status === "active") {
      // todo: revert to moderator
      postCollection += `<button types="button" class="btn btn-primary" onClick="postDecision('${post._id}','positive')"> Like </button>`;
      postCollection += `<button types="button" class="btn btn-primary ml-2" onClick="postDecision('${post._id}','negative')"> Dislike </button>`;
    }
    postCollection += "</div> </div> </div>";
    // set to localstorage
  }
  document.getElementById("allposts").innerHTML =
    document.getElementById("allposts").innerHTML + postCollection;
}

function postDecision(postId, postDecision) {
  const loginToken = localStorage.getItem("loginToken");
  $.ajax({
    type: "POST",
    url: "http://localhost:5754/api/v1/giveRating",
    data: JSON.stringify({
      ratingType: postDecision,
      postId: postId,
    }),
    headers: { Authorization: "Bearer " + loginToken },
    contentType: "application/json",
    dataType: "json",
    success: function (dataString) {
      location.reload();
    },
  });
}

function submitPost() {
  const loginToken = localStorage.getItem("loginToken");

  const post = document.getElementsByName("submitpost")[0].value;
console.log(post);
  $.ajax({
    type: "POST",
    url: "http://localhost:5754/api/v1/createPost",
    data: JSON.stringify({
      postContent: post,
    }),
    headers: { Authorization: "Bearer " + loginToken },
    contentType: "application/json",
    dataType: "json",
    success: function (dataString) {
      getPosts();
      location.reload();
    },
  });
}

getPosts();
