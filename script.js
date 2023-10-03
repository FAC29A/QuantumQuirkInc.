//Here we store each team member's information in an object

const teamMembers = [
    {
        name: "Dr. Quark E. Scientist",
        position: "CEO",
        img: "./assets/videos/images/2.png",
        bio: "The brilliant, yet eccentric, founder of the agency who claims to have a PhD in Quantum Quirkology.",
        id: 1,
    },
    {
        name: "Mystique Maven",
        position: "Esoteric Consultant",
        img: "./assets/videos/images/7.png",
        bio: "A mysterious and enigmatic fortune teller who handles client consultations, using tarot cards and crystal balls to predict future trends.",
        id: 2,
    },
    {
        name: "Captain Quasar",
        position: "Astronaut",
        img: "./assets/videos/images/9.png",
        bio: "The agency's resident astronaut and space explorer who assures clients that their marketing campaigns will truly be out of this world.",
        id: 3,
    },
    {
        name: "Crypto-Kate",
        position: "Cryptozoologist",
        img: "./assets/videos/images/8.png",
        bio: "The cryptozoologist-in-chief who swears by her ability to optimize websites for elusive creatures.",
        id: 4,
    },
    {
        name: "Telepathic Tim",
        position: "Creative Medium",
        img: "./assets/videos/images/12.png",
        bio: "The graphic designer who claims to know what you want even before you do, thanks to his telepathic design skills.",
        id: 5,
    },
    {
        name: "Zog the Alien",
        position: "Alien",
        img: "./assets/videos/images/5.png",
        bio: "The agency's extraterrestrial consultant who communicates in a language only decipherable by the agency's clients.",
        id: 6,
    },
];

//Here we store the customer reviews

const customerRevs = [
    {
        name: "Bigfoot",
        service: "Cryptozoological SEO",
        review: "I've been hiding in the wilderness for centuries, but Quantum Quirk Inc. helped me step into the digital age! Now, I'm ranking high in search results, and more people are discovering my existence. Thanks to the Quantum Quirk team for making me an online legend!",
        id: 1,
    },
    {
        name: "Cleopatra",
        service: "Time-Traveling Marketing",
        review: "Quantum Quirk Inc. transported my brand to ancient Egypt, and the results were truly regal! I witnessed my empire rise again, thanks to their marketing magic. Dr. Quark E. Scientist and his team are the Pharaohs of marketing!",
        id: 2,
    },
    {
        name: "a UFO",
        service: "Alien Collaboration",
        review: "Beep boop! I am an intergalactic traveler, and I had the pleasure of collaborating with Quantum Quirk Inc. for my Earth debut. Zog the Alien and his team made sure I had a memorable landing. Beam me up for more projects!",
        id: 3,
    },
    {
        name: "a Time Traveler",
        service: "Time-Loop Marketing",
        review: "I've traveled through time, and I can confirm that Quantum Quirk Inc.'s time-loop marketing is a game-changer! My message keeps resonating across centuries, ensuring my legacy endures. Kudos to Time-Traveler Tim!",
        id: 4,
    },
    {
        name: "the Loch Ness Monster",
        service: "Cryptozoological SEO",
        review: "As a resident of Loch Ness, I'm thrilled with their work! Thanks to Quantum Quirk Inc., I'm no longer a myth but a trending topic. My underwater selfies have never looked better on Google!",
        id: 5,
    },
    {
        name: "a Martian",
        service: "Alien Collaboration",
        review: "Quantum Quirk Inc. brought Mars to Earth! Thanks to Zog the Alien, we now have a cosmic connection with Earthlings. Our red planet is getting greener with every project, and we're over the moon!",
        id: 6,
    },
];

// Function to generate team cards
function createCards() {
    const teamContainer = document.getElementById("team-members");
    teamContainer.innerHTML = '';

    for (const member of teamMembers) {
        let newCard = document.createElement('div');
        newCard.classList.add('team-card');
        newCard.innerHTML = `
        <div class="member-info-container">
            <h2 class="member-name">${member.name}</h2>
            <h3 class="member-position">${member.position}</h3>
        </div>
        <div class="member-image-container">
            <img src="${member.img}" alt="${member.name} image" class="member-image" style="width= 250px;" ">
        </div>
        <div class="member-bio-container">
            <p class="member-bio">${member.bio}</p>
        </div>
        `;
        teamContainer.appendChild(newCard);
    }
}
createCards(); 

// Generating user reviews

function generateReview() {
    const reviewSection = document.getElementById("review-section");
    

    for(let x = 0; x < 2; x++){
        for(let i = 0; i < customerRevs.length - 1; i++){
            const { name, service, review } = customerRevs[i];
    
            const reviewCard = document.createElement("div");
            reviewCard.classList.add("review-card");
        
            const reviewDiv = document.createElement("div");
    
            const reviewP = document.createElement("p");
            reviewP.classList.add("review");
            reviewP.innerHTML = `"${review}"`;
        
            const reviewer = document.createElement("h3");
            reviewer.classList.add("reviewer-name");
            reviewer.innerHTML = `${name}`;
        
            const reviewService = document.createElement("p");
            reviewService.classList.add("review-service");
            reviewService.innerHTML = `${service}`;
    
            reviewDiv.appendChild(reviewP);
    
            reviewCard.appendChild(reviewDiv);
            reviewCard.appendChild(reviewer);
            reviewCard.appendChild(reviewService);
    
            reviewSection.appendChild(reviewCard);
        }   
    }   
}

generateReview();

//Making sure the intro video always plays and preventing bugs

document.getElementById("intro-video").play();

//Contact form functionality
    
function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }

  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
