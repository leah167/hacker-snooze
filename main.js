//query select container for news items and create the OL and append the OL to the container
const newsContainer = document.querySelector("#news-container");
const storyList = document.createElement("ol");
storyList.className = "storyList";
newsContainer.appendChild(storyList);

//get data
fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(function (httpResponse){
        return httpResponse.json();
    })
    .then(function (data) {
        return data;
    })
    .then(function(storyId) {
        for (let i = 0; i < 500; i++) { //API gives you 500 stories
            fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId[i]}.json?print=pretty`)
                .then(function (httpResponse) {
                    return httpResponse.json();
                })
                .then(function (data) {
                    console.log(data); //in console you can see the stories in object format
                   
                    const story = document.createElement("li");
                    story.className = "story"

                    storyList.appendChild(story); //now I have an ordered list from 1-500 displayed

                    story.innerHTML = `<a href="${data.url}">${data.title}</a> <br /> ${data.score} points, by ${data.by} | ${data.descendants} comments` ;
                })
        }
    })

