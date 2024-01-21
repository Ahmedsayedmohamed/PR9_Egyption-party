/// <reference types="../@types/jquery" />

// for more pure js
"use strict";

// !=================> vars  <=================  //

// vars for textarea
let charsLength = 0;
let maxCharsLimit = 100;

// vars for dates
let currentDate = 0;
let getCurrentDate = 0;
let waitingTime = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

// !=================> When start  <=================  //

window.onload = function () {
  updateCountdown();
};

// !=================> Events  <=================  //

// left bar
$(".openBox").on("click", function () {
  $(".leftMenu").animate({ width: "150px" }, 800);
  $("body").animate({ marginLeft: "150px" }, 800);
});

$(".close").on("click", function () {
  $(".leftMenu").animate({ width: 0 }, 800);
  $("body").animate({ marginLeft: 0 }, 800);
});


// slide up details
$(".detailsTitle").on("click", function () {
  $(".detailsBox").not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(1000);
});


// chars length
$("textarea").on("keyup", function () {
  charsLength = $(this).val().length;
  $(".charsLength").html(`${charsLength}`);
  if (charsLength > maxCharsLimit) {
    $(".messageAlert").show(100);
    $("button").addClass("disabled");
  } else {
    $(".messageAlert").hide(100);
    $("button").removeClass("disabled");

  }
});


// scroll to a in smooth
$("a").on("click", function () {
  const aHref = $(this.getAttribute("href"));
  const sectionDistance = $(aHref).offset().top;
  $("html, body").animate({ scrollTop: sectionDistance }, 800);
});

// !=================> Functions  <=================  //

function updateCountdown() {
  // set party full time
  const partyTime = new Date("31 December 2024 00:00:00");
  const setPartyTime = partyTime / 1000;

  // get current full time
  currentDate = new Date();
  getCurrentDate = currentDate / 1000;

  // calculate the count down time from party full time to now
  waitingTime = setPartyTime - getCurrentDate;

  // calc days - hours - min - sec
  days = Math.floor(waitingTime / (24 * 60 * 60));
  hours = Math.floor((waitingTime - days * (24 * 60 * 60)) / 3600);
  minutes = Math.floor(
    (waitingTime - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  seconds = Math.floor(
    waitingTime - days * (24 * 60 * 60) - hours * 3600 - minutes * 60
  );

  // update elements
  $(".days").html(`${days}`);
  $(".hours").html(`${hours}`);
  $(".minutes").html(`${minutes}`);
  $(".seconds").html(`${seconds}`);

  // loop function
  setInterval(function () {
    updateCountdown();
  }, 1000);
}
