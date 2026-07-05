const sections = {

features:{
tag:"POWERFUL SPORTS THEME",
title:"GREAT TEAM EFFORT<br>WINS THE GAME",
desc:"Ideas to execution, under one roof <br>Dominate the competition with advanced analytics, training programs and cutting-edge sports technology.",
// img:"https://img.magnific.com/premium-photo/teamwork-team-young-strong-rugby-team-fieldholding-hands-all-together_629685-94088.jpg"
//img:"https://activeforlife.com/img/large-webp/2023/06/team-huddle.jpg"
//img:"https://images.stockcake.com/public/f/7/3/f73eb161-1d26-42b2-8df5-20b53b458cf6_large/teamwork-huddle-unity-stockcake.jpg"
//img:"https://nz.rs-cdn.com/images/nwsa8-updda/stack_backgrounds/f81ba869d79110c6cf78e420e4bce282/w1200.jpg"
img:"https://images.stockcake.com/public/0/a/d/0ad919fc-9f20-4ab7-b2cf-7d34af3fd900/team-unity-huddle-stockcake.jpg"
},

sports:{
tag:"SKILL IN SPORTS",
title:"NEXT GEN<br>PLAYING SURFACES",
desc:"🏀  Basketbalaql ⚽  Football<br>🥎  Tennis 🎾  Pickleball<br>🏓  Paddleball 🏐  Volleyball<br>🏁  Running Track 🏏  Box Cricket",
img:"https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
},

surface:{
tag:"CREATION IN SURFACE",
// title:"Courts where every game feels bigger<br>Labs where curiosity has room to grow.",
title:"Courts game feels bigger<br>Labs room to grow.",
desc:"💡 ASTROTURF 💡 PP Interlocking tiles <br>💡 Running track systems 💡 Vinyl flooring <br>💡 Acrylic surface",
img:"https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg"
},

lab:{
tag:"INNOVATION IN LAB",
title:"THE FUTURE OF<br>SPORT & SCIENCE",
desc:"🔬  Physics Labs 🔬  Chemistry Labs<br>🔬  Biology Labs 🔬  Skills/IT Lab",
img:"https://atriade.com/wp-content/uploads/2022/03/blog-image4-2048x1192.jpg"
},

faq:{
tag:"ENQUIRE HERE",
title:"QUESTIONS?<br>WE HAVE ANSWERS",
desc:`
<form class="enquiry-form">
    <input type="text" placeholder="Your Name" required>

    <input type="text" placeholder="Name Of Organization" required>

    <input type="email" placeholder="Email Address" required>

    <input type="tel" placeholder="Mobile Number" required>

    <select required>
        <option value="">Select Service</option>
        <option>Sports</option>
        <option>Laboratory</option>
    </select>

    <textarea placeholder="Your Requirement" rows="4"></textarea>

    <button type="submit">Submit Enquiry</button>
</form>
`,
img:"https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg"
}

};

function changeSection(section, element){

    document.getElementById("heroTag").innerHTML =
    sections[section].tag;

    document.getElementById("heroTitle").innerHTML =
    sections[section].title;

    document.getElementById("heroDesc").innerHTML =
    sections[section].desc;

    document.getElementById("heroBg").style.backgroundImage =
    `url('${sections[section].img}')`;

    document.querySelectorAll('.slide-nav span')
    .forEach(item => item.classList.remove('active'));

    element.classList.add('active');

}

//countdown
// Set target date (change this to your event date)
const targetDate = new Date("2026-12-31T00:00:00").getTime();

// function updateCountdown(){

//     const now = new Date().getTime();
//     const gap = targetDate - now;

//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;

//     const d = Math.floor(gap / day);
//     const h = Math.floor((gap % day) / hour);
//     const m = Math.floor((gap % hour) / minute);
//     const s = Math.floor((gap % minute) / second);

//     document.getElementById("days").innerText = d;
//     document.getElementById("hours").innerText = h;
//     document.getElementById("minutes").innerText = m;
//     document.getElementById("seconds").innerText = s;
// }

// setInterval(updateCountdown, 1000);
// updateCountdown();

// pagejs
function showSection(id){

    document.querySelectorAll(".content-section").forEach(function(section){
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    document.getElementById("pageContent").scrollIntoView({
        behavior:"smooth"
    });

}


/* AUTO SLIDER */

const slides = [
    'features',
    'sports',
    'surface',
    'lab',
    'faq'
];

let current = 0;

// setInterval(() => {

//     current++;

//     if(current >= slides.length){
//         current = 0;
//     }

//     const navItems =
//     document.querySelectorAll('.slide-nav span');

//     changeSection(
//         slides[current],
//         navItems[current]
//     );

// }, 5000);

// document.addEventListener("submit", function(e){

//     if(e.target.classList.contains("enquiry-form")){
//         e.preventDefault();

//         alert("Thank you! Your enquiry has been submitted.");

//         e.target.reset();
//     }

// });