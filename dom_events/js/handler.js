document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    //   console.log("Button Clicked");
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Updated Page Title Text";
  });
// -------------------------
document.getElementById("btn-login").addEventListener("click", function () {
  const userInfo = document.getElementById("user-info");
  userInfo.innerText = "User Logged in Successfully";
});
