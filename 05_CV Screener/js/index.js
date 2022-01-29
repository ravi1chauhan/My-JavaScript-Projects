console.log("Welcome to myProject, Creating a CV Screener In JavaScript");

// Data is an array of objects which contains information about the candidates
const data = [
  {
    name: "Veer Bhai",
    age: 21,
    city: "Mumbai",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },

  {
    name: "Techie Chauhan",
    age: 23,
    city: "Mumbai",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/48.jpg",
  },

  {
    name: "Aishwarya Rai",
    age: 20,
    city: "Mumbai",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/women/76.jpg",
  },

  {
    name: "Ravi Bhaya",
    age: 24,
    city: "Mumbai",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

// CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidates = cvIterator(data);

nextCV();

// Button listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidates.next().value;

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
  } else {
    alert("End of Candidate Applications");
    window.location.reload();
  }
}
