const user = [
  { id: 1, username: "charudatta", password: "charu" },
  { id: 2, username: "rushi", password: "rushya" },
  { id: 3, username: "saqib", password: "saqba" },
];

checklogin = document.getElementById("logincheck");
checklogin.addEventListener("click", () => {
  Name = document.getElementById("userName").value;
  password = document.getElementById("password").value;
  console.log(userName);
  user.forEach((elmn) => {
    if (elmn.username !== Name) {
      alert("username chukicha ahe");
    } else {
      window.open("index1.html");
    }
  });
});
