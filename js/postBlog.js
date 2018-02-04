// The user enters the title, date and content of a new post into the form and previews the data below the form by clicking the Preview button.

let previewPostButton = document.getElementById("previewPost");

let previewPost = () => { 
    let postTitle = document.getElementById("postTitle").value;
    let postDate = document.getElementById("postDate").value;
    let postContent = document.getElementById("postContent").value;

    console.log("post title is \"" + postTitle + "\"");
    console.log("post date is \"" + postDate + "\"");
    console.log("post content is \"" + postContent + "\"");

    document.getElementById("blogTitle").innerText = postTitle;
    document.getElementById("blogDate").innerText = postDate;
    document.getElementById("blogContent").innerText = postContent;
};

previewPostButton.addEventListener("click", previewPost);