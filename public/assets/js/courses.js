const courses = [
  {
    image: "/assets/image/courses/1.jpeg",
    title: "Training and Palcement Course in US IT STAFFING-:",
    text: "In recent days we have seen that 65% OF the students who belong's to these educational background (B.E B.tech/M.tech/B.Pharma/BBA/MBA/BCA/MCA etc.) are not able to get job in their field. So this US IT staffing is one of the best solution for these background student's because in this industry you can start as a fresher and can even earn 5 LPA In A year or more.",
    cp: "Rs 13999",
    sp: "Rs 7999",
  },
  {
    image: "/assets/image/courses/2.jpeg",
    title: " How to Work on C2C -:",
    text: " In This Course We  are going to Train You on How to Work on C2C Requirement for Different Technologies Like   java,.net.devops etc. These Training are Not Limited to Just Making Venor List and Working With Benchsales this is More Then That Additional Benefits-: 2 QN&A Session",
    cp: "Rs 299",
    sp: "Rs 99",
  },
  {
    image: "/assets/image/courses/3.jpeg",
    title: " How to Work on W2  -:",
    text: " In This Course We Train you How to work on different Technology on w2 From, Network engineer's to cyber security, Cloud Engineering and Many More and These Methods Will Help You to Increase Your Placements.",
    cp: "Rs 299",
    sp: "Rs 99",
  },
  {
    image: "/assets/image/courses/4.jpeg",
    title: "How to Source Through Facebook-:",
    text: " In This Course We Talk about Finding Candidate Through Facebook for Multiple Roles. We have discussed all our Applied Method Which has Helped Us to Generate Result.",
    cp: "Rs 599",
    sp: "Rs 299",
  },
  {
    image: "/assets/image/courses/5.jpeg",
    title: "How to Source Through Linkedin:",
    text: " In This Course We Have discussed How to Master Linkedin for sourcing.",
    cp: "Rs 699",
    sp: "Rs 399",
  },
  {
    image: "/assets/image/courses/6.jpeg",
    title: ". How To Use Premium Linkedin at It Best--:",
    text: "In this course we have discussed all the feature of linkedin premium account. We have also shared our Inmail template.",
    cp: "Rs 1999",
    sp: "Rs 799",
  },
  {
    image: "/assets/image/courses/7.jpeg",
    title: "A Complete Understanding of  Network Infrastructure-:",
    text: " In this course we have discussed all network infrastructue technologies ind details. We also have discussed about certification in this domain from CCNA,CCNP,ETC",
    cp: "Rs 399",
    sp: "Rs 199",
  },
  {
    image: "/assets/image/courses/8.jpeg",
    title: "A Complete Understanding of Engineering Profile--:",
    text: " In This course we have discussed all engineering job titles in details.This course will give you the depth knowledge on engineering Requirements from Mechanical engineer,electrical engineer,embedded engineer etc.",
    cp: "Rs 499",
    sp: "Rs 199",
  },
  {
    image: "/assets/image/courses/9.jpeg",
    title: "A Complete Understanding of SAP -:",
    text: " In This course we have discussed all SAP job titles in details.This course will give you the depth knowledge on Technical Module of SAP AND Functional Module of SAP.",
    cp: "Rs 799",
    sp: "Rs 299",
  },
  {
    image: "/assets/image/courses/10.jpeg",
    title: "How to Source Through x- Ray Search on Google:",
    text: " In this course we are going to discuss about Sourcing candidate Through X-RAY Search on google.",
    cp: "Rs 999",
    sp: "Rs 499",
  },
  {
    image: "/assets/image/courses/11.jpeg",
    title: "How to Negotiate The Salary from Candidate-:",
    text: " In This course we are going to discuss about How to negotiate salary from Candidate for different job roles.",
    cp: "Rs 199",
    sp: "Rs 99",
  },
  {
    image: "/assets/image/courses/12.jpeg",
    title: "How To Source Candidate Through Different Websites-:",
    text: " In This course we are going to discuss about sourcing through different Websites",
    cp: "Rs 499",
    sp: "Rs 299",
  },
  {
    image: "/assets/image/courses/13.jpeg",
    title: "How to Source Female Candidate",
    text: " In this course we are going to discuss about How to find Female Candidate for different job roles in United states.",
    cp: "Rs 799",
    sp: "Rs 499",
  },
];

//Select the buttons
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let courseList = document.querySelector(".carousel-container");

courses.forEach((course) => {
  courseList.innerHTML += `<div class="card">
                  <div class="card-img">
                    <img src = ${course.image} >
                  </div>
                  <div class="card-title">
                      <h4> ${course.title} </h4>
                  </div>
                  <div class="card-price">
                    <h5><strike> ${course.cp} </strike>  </h5>
                    <h5> ${course.sp} </h5>
                  </div>
                  <div class="card-text">
                      <p>${course.text}</p>
                  </div>
              </div>`;
});

//Set counter for setting distance for cards to move on each click
let count = 0;

//Set tracker to keep track of where the controls and cards are in relation to the card container
let tracker = 0;

let limiter;

if (screen.width > 630) {
  limiter = 464;
} else {
  limiter = 384;
}

//Action for Next button
function moveCardsLeft() {
  //'Count' controls the distnace for each card push and can be adjusted by changing the integer subtracted from the variable below.
  //The tracker keeps track of the index while the next and prev buttons are being clicked.
  count = count - limiter;
  tracker++;

  //Disables buttons after cards reach a specified distance. Number of clicks can be adjusted by changing the integers in the if statements. ie. changing the '0' to '-1' allows the user to click back one additional time before disabling the 'prev' button.
  if (tracker === 0) {
    prev.setAttribute("disabled", "");
  } else {
    prev.removeAttribute("disabled");
  }
  if (tracker === 12) {
    next.setAttribute("disabled", "");
  } else {
    next.removeAttribute("disabled");
  }

  //Pushes cards based on 'count'.
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (el, i, arr) {
    el.style.transform = `translateX(${count}px)`;
  });
}

//Action for Prev button
function moveCardsRight() {
  count = count + limiter;
  tracker--;
  if (tracker <= 0) {
    prev.setAttribute("disabled", "");
  } else {
    prev.removeAttribute("disabled");
  }
  if (tracker === 12) {
    next.setAttribute("disabled", "");
  } else {
    next.removeAttribute("disabled");
  }
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (el, i, arr) {
    el.style.transform = `translateX(${count}px)`;
  });
}

//Event listeners to slide the cards.
prev.addEventListener("click", () => {
  moveCardsRight();
});

next.addEventListener("click", () => {
  moveCardsLeft();
});
