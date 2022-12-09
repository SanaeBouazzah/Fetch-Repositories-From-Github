
// bring repos from github just by name of someone***************************************************************************************************
let theinput = document.querySelector('.get-repos input'),
    getbutton = document.querySelector('.get-button'),
    reposdata = document.querySelector(".show-data");

getbutton.onclick = function (){
    getrepos();
}

function getrepos(){
    if(theinput.value === ' '){
        reposdata.innerHTML = "<span>please</span>";
        // ${theinput.value}
    }else{
        fetch(`https://api.github.com/users/${theinput.value}/repos`)
        .then((response) => {
            return response.json();
        })
        .then((repos) => {
            reposdata.innerHTML = ' ';
            repos.forEach(repo => {
                // console.log(repo.name);
                let maindiv = document.createElement('div');
                let reponame = document.createTextNode(repo.name);
                maindiv.appendChild(reponame);
                let theurl = document.createElement('a');
                let theurltext = document.createTextNode(" visit");
                theurl.appendChild(theurltext);
                theurl.href=`https://github.com/${theinput.value}/${repo.name}`;
                theurl.setAttribute('target', '_blank');
                maindiv.appendChild(theurl);
                let starsspan = document.createElement('span');
                let starstext = document.createTextNode(` stars : ${repo.stargazers_count}`)
                starsspan.appendChild(starstext);
                maindiv.appendChild(starsspan);
                maindiv.className = 'repo-box';
                reposdata.appendChild(maindiv);

            });
        })
    }
}