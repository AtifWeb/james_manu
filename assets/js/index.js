

// html for event and dynamic rendering
const eventHTML = (date, title, location, description) => {
  return `<div class="event">
    <p>${date}</p>
    <h1>${title}</h1>
    <p>${location}</p>
    <p>
    ${description}
    </p>
    <a href="#"> More </a>
  </div>`;
};
// html for event and dynamic rendering
const tourHTML = (title, img) => {
  return ` <div class="card">
  <img
    src=${img}
    alt=""
  />
  <div class="presentation">
    <h1>${title}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
      enim aut corrupti tempore laboriosam odit.
    </p>

    <a href="#">
      Read more
      <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</div>`;
};

// display events function
const displayEvents = () => {
  let GridArea = document.querySelector(".upcoming-events .grid-area");

  UpcomingEvents.forEach((EachEvent) => {
    GridArea.insertAdjacentHTML(
      "beforeend",
      eventHTML(
        EachEvent.date,
        EachEvent.title,
        EachEvent.location,
        EachEvent.description
      )
    );
  });
};
// display tours function
const displayTours = () => {
  let GridArea = document.querySelector(".tours-section .grid-area");

  Tours.forEach((EachEvent) => {
    GridArea.insertAdjacentHTML(
      "beforeend",
      tourHTML(EachEvent.title, EachEvent.img)
    );
  });
};

const HandlePageEvents = (e) => {
  //   display Events Area
  displayEvents();
  // display tours
  displayTours();

  // handling nav bar in mobile
  let burgericon = document.querySelector(".burger-icon");

  burgericon.addEventListener("click", (e) => {
    document.querySelector("header ul").classList.toggle("active");
  });
};

window.addEventListener("load", HandlePageEvents);
