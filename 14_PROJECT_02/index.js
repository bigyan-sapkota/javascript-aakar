async function fetchPost() {
  const postsContainer = document.getElementById("posts-container");
  const postError = document.getElementById("post-error");
  const postLoading = document.getElementById("post-loading");

  const postsUrl = "https://jsonplaceholder.typicode.com/postaas";

  try {
    const res = await fetch(postsUrl);

    if (!res.ok) {
      throw new Error(
        "Sorry we are facing some error! Come back later or reload."
      );
    }

    const data = await res.json();
    console.log(data);

    data.forEach((item) => {
      const newListElement = document.createElement("li");
      newListElement.textContent = item.title;
      postsContainer.append(newListElement);
    });
  } catch (error) {
    console.log(error.message);
    postError.textContent = "Error : " + error.message;
  } finally {
    postLoading.style.display = "none";
  }
}

fetchPost();
