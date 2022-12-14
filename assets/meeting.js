"use strict";

//WORK IN PROGRESS

//////////////////////////////////////////////////////////
//Meeting objects
//////////////////////////////////////////////////////////

//HOW TO ADD A MEETING
//1) Copy this: 
/* 
    {
        link: "",
        image: "",
        title: "",
        description: "",
    },
*/
//2) Fill out the information for the new meeting insidse the ""
//3) For the image, take a screenshot of the title slide and save it into the img folder
//4) put the file path into the image property: "assets/img/imagefile"

///////////////////////////////////////////////////////////

const meetings1 = [
    {
        link: "club.html",
        image: "assets/img/p1fix.jpeg",
        title: "Floral Bouquets by Design",
        description: "$15-$100",
    },
    {
        link: "club.html",
        image: "assets/img/p1.jpg",
        title: "Potted Plants",
        description: "$30-$50",
    },
    {
        link: "club.html",
        image: "assets/img/p4.jpg",
        title: "Summer Reefs",
        description: "$75",
    },
    {
        link: "club.html",
        image: "assets/img/p3.jpg",
        title: "Single Flowers",
        description: "$2",
    },
    {
        link: "club.html",
        image: "assets/img/p5.jpg",
        title: "Lavendar",
        description: "$10 per 5 ounces",
    },
]

const meetings2 = [
    {
        link: "events.html",
        image: "assets/img/wedding.jpeg",
        title: "Weddings",
        description: "$400-500",
    },
    {
        link: "events.html",
        image: "assets/img/funeral.jpg",
        title: "Funerals",
        description: "$200-300",
    },
    {
        link: "events.html",
        image: "assets/img/birthday.jpg",
        title: "Birthdays",
        description: "$300-400",
    },
    {
        link: "events.html",
        image: "assets/img/graduation.jpg",
        title: "Graduations",
        description: "$300-400",
    },

]



///////////////////////////////////////////////////////////////////////////////
//Displays the meetings on website
///////////////////////////////////////////////////////////////////////////////

const meetingsSlides = document.querySelector(".meetings__slides");

const currentWindow2 = window.location.pathname.split("/").pop();

if (currentWindow2 == "events.html") {
    displayMeetings(meetings2);
} else if (currentWindow2 == "club.html") {
    displayMeetings(meetings1);
}



function displayMeetings(meetings) {
    meetingsSlides.innerHTML = '';
    for (let i = 0; i < meetings.length - 2; i += 3) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i].link}"><img src="${meetings[i].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i].link}"
                    class="disable-select">${meetings[i].title}</a>
                <p>${meetings[i].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i + 1].link}"><img src="${meetings[i + 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i + 1].link}"
                    class="disable-select">${meetings[i + 1].title}</a>
                <p>${meetings[i + 1].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[i + 2].link}"><img src="${meetings[i + 2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[i + 2].link}"
                    class="disable-select">${meetings[i + 2].title}</a>
                <p>${meetings[i + 2].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    }

    const left = meetings.length % 3;
    if (left == 1) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 1].link}"><img src="${meetings[meetings.length - 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 1].link}"
                    class="disable-select">${meetings[meetings.length - 1].title}</a>
                <p>${meetings[meetings.length - 1].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    } else if (left == 2) {
        const html = `<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 2].link}"><img src="${meetings[meetings.length - 2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 2].link}"
                    class="disable-select">${meetings[meetings.length - 2].title}</a>
                <p>${meetings[meetings.length - 2].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetings[meetings.length - 1].link}"><img src="${meetings[meetings.length - 1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetings[meetings.length - 1].link}"
                    class="disable-select">${meetings[meetings.length - 1].title}</a>
                <p>${meetings[meetings.length - 1].description}</p>
            </div>
        </div>
    </div>`;
        meetingsSlides.insertAdjacentHTML("beforeend", html);
    }

}

/*
`<div class="meetings__row">
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[0].link}"><img src="${meetingRow[0].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[0].link}"
                    class="disable-select">${meetingRow[0].title}</a>
                <p>${meetingRow[0].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[1].link}"><img src="${meetingRow[1].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[1].link}"
                    class="disable-select">${meetingRow[1].title}</a>
                <p>${meetingRow[1].description}</p>
            </div>
        </div>
        <div class="meeting">
            <div class="meeting__image">
                <a href="${meetingRow[2].link}"><img src="${meetingRow[2].image}"></a>
            </div>
            <div class="meeting__info">
                <a href="${meetingRow[2].link}"
                    class="disable-select">${meetingRow[2].title}</a>
                <p>${meetingRow[2].description}</p>
            </div>
        </div>
    </div>`
*/