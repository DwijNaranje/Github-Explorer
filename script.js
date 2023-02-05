const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const profileContainer = document.getElementById("profileContainer");

searchBtn.addEventListener("click", async () => {
  const username = searchInput.value;
  const response = await axios.get(`https://api.github.com/users/${username}`);
  const user = response.data;

  const profileHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="Profile Image">
      <h3>${user.login}</h3>
      <p>${user.bio || "No bio provided"}</p>
      <p><a href="${user.html_url}" target="_blank">View on Github</a></p>
    </div>
  `;

  profileContainer.innerHTML = profileHTML;
});
