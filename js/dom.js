document.getElementById("apply-bg").addEventListener("click", function () {
  const friends = document.getElementsByClassName("friend");
  for (const iterator of friends) {
    iterator.style.backgroundColor = "lightblue";
  }
});

document.getElementById("center-third").addEventListener("click", function () {
  const thirdFriend = document.getElementById("center-three");
  thirdFriend.style.textAlign = "center";
});

document.getElementById("add-friend").addEventListener("click", function () {
  const friendContainer = document.getElementById("friends");
  const friend = document.createElement("div");
  friend.classList.add("friend");
  friend.innerHTML = `
  <h3 class="friend-new"> New  Friend</h3>
  <p>something new addded</p>
  
  `;

  friendContainer.appendChild(friend);
});
