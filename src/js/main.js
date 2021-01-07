const info = document.querySelector(".details");
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const avatar = document.createElement("img");


const fetchUser = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}`);

    const data = await api_call.json();
    return { data }

}

const showData = () => {

    fetchUser(input.value).then((res) => {
        info.innerHTML = `
           <div>User Name : <span>${res.data.login}</span></div>
           <div>Name : <span>${res.data.name}</span></div>
           <div>bio : <span>${res.data.bio}</span></div>
           <div>Location : <span>${res.data.location}</span></div>
           <div>Repo : <span>${res.data.public_repos}</span></div>
           <div>Email : <span>${res.data.email}</span></div>
           <div>Twitter Username: <span>${res.data.twitter_username}</span></div>
           <div>Followers: <span>${res.data.followers}</span></div>
           <div>Following: <span>${res.data.following}</span></div>
           <div>Company: <span>${res.data.company}</span></div>
           <div>Github profile: <span><a href="${res.data.html_url}"></a></span></div>
           <div>followers_url: <span>${res.data.followers_url}</span></div>
           <div>following_url: <span>${res.data.following_url}</span></div>
           
           `;
        avatar.src = res.data.avatar_url;
        document.getElementById("avatar").appendChild(avatar);
        console.log(res)
    });

}

button.addEventListener("click", () => {
    showData()
})