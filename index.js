const reviews = [
{
    id: 1,
    name: "John Smith",
    job: "Web Designer",
     
    img: 
    "user-1.jpg",
    Text: 
    "Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages.",

},

{
    id: 2,
    name: "Frank Pascal",
    job: "Backend Developer",
     
    img:
     "user-4.jpg",
    Text:
    "The back- end of a website consists of a server, an application, and a database. A back-end developer builds and maintains the technology that powers those components which, together, enable the user-facing side of the website to even exist in the first place.",
},

{
    id: 3,
    name: "Kelvin Kelin",
    job: "Database Executive",
     
    img: "user-6.jpg",
    Text: "The Customer Database Executive will be tasked with ensuring data is up to date and accurate at all times, with direct responsibility for a number of key functions, such as the production of marketing campaign segments, management information and reports.",

},
{
id: 4,
    name: "Mark Smith",
    job: "Human Resource Manager",
     
    img: "user-2.jpg",
    Text: "Human resources managers plan, coordinate and oversee the recruiting, interviewing and hiring of new staff. They consult with company executives on strategic planning and serve as a key link between an organization's management and its employees",
}];


const img = document.getElementById ("person-img");
const author = document.getElementById ("author");
const job = document.getElementById ("job");
const info = document.getElementById ("info");


const prevBtn = document.querySelector (".prev-btn");
const nextBtn = document.querySelector (".next-btn");
const randomBtn = document.querySelector (".random-btn");

let currentItem = 0; 

window.addEventListener ("DOMContentLoaded", function () {
showPerson (currentItem);
});


function showPerson (person) {
    const item = reviews [currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.Text;


}
nextBtn.addEventListener ("click", function() {
currentItem++;
 if(currentItem > reviews.length - 1) {
     currentItem = 0;
 }
 showPerson (currentItem);
});

prevBtn.addEventListener ("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson (currentItem);
});

randomBtn.addEventListener ("click", function () {
currentItem = Math.floor (Math.random () * reviews.length);

showPerson(currentItem);
});