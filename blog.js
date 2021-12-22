


function blogPost() {
    event.preventDefault()
    let blogTxt = document.getElementById("blogpost").value
    // let blogAlias = document.getElementById("username").value
    let blogSbj = document.getElementById("title").value
    let submittedDiv = document.getElementById("submittedDiv")
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let htmlString = "<div class='postBlog'><p id='subject'>" + blogSbj + "</p>" + '<p id="content" style="word-wrap: break-word;">' + blogTxt + "</p>" + "<p id='ime'> Written by: '" + guest + "'</p></div>"
    posts.push(htmlString)
    localStorage.setItem('posts', JSON.stringify(posts))
    let newString = ""
    posts.forEach(element => {
        newString += element
        // newString += "<hr>"
    });
    submittedDiv.innerHTML = newString
    console.log("posts = " + posts)
}
const handleDelete = () => {
    const postId = document.getElementById("postNumber").value;
    console.log("postNumber:" + postId);
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts.length === 0) {
        window.alert("Nema postovi za brishenje.");
        return;
    }
    if (postId > posts.length || postId < 1) {
        window.alert("Postot ne postoi.");
        return;
    }
    posts.splice(postId - 1, 1);
    let tempString = "";
    posts.forEach(element => {
        tempString += element
        tempString += "<hr>"
    })
    console.log("posle foreach");
    localStorage.setItem('posts', JSON.stringify(posts));
    document.getElementById("submittedDiv").innerHTML = tempString;
}

$(document).ready(function () {
    $("#searchbratmi").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#submittedDiv *").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
