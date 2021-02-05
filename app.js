const hand1 = document.querySelector(".hand1");
const next = document.querySelector(".next");
const previos = document.querySelector(".previos");
let clicks = 0;
const basicButtonActive = document.querySelector(".basic-section");
const jacketButtonActive = document.querySelector(".jacket-section");
const jumperButtonActive = document.querySelector(".jumper-section");
let clickStat = 1;

window.onload = function () {
  var el = document.querySelector(".loader");
  el.style.display = "none";
};

basicButtonActive.addEventListener("click", function () {
  if (clicks === 0) {
    let nameClick = clicks + 11;
    hand1.src = "./Hands/White/Basic/White-in-Basic" + nameClick + ".png";
  }
  if (clicks > 0) {
    let nameClick = clicks + 1;
    hand1.src = "./Hands/White/Basic/White-in-Basic" + nameClick + ".png";
  }

  clickStat = 1;
  basicButtonActive.classList.add("basic-section-active");
  jacketButtonActive.classList.remove("basic-section-active");
  jumperButtonActive.classList.remove("basic-section-active");
});

jacketButtonActive.addEventListener("click", function () {
  if (clicks === 0) {
    let nameClick = clicks + 11;
    hand1.src = "./Hands/White/Jacket/White-in-Jacket" + nameClick + ".png";
  }
  if (clicks > 0) {
    let nameClick = clicks + 1;
    hand1.src = "./Hands/White/Jacket/White-in-Jacket" + nameClick + ".png";
  }
  clickStat = 2;
  jacketButtonActive.classList.add("basic-section-active");
  basicButtonActive.classList.remove("basic-section-active");
  jumperButtonActive.classList.remove("basic-section-active");
});

jumperButtonActive.addEventListener("click", function () {
  if (clicks === 0) {
    let nameClick = clicks + 11;
    hand1.src = "./Hands/White/Jumper/White-in-Jumper" + nameClick + ".png";
  }
  if (clicks > 0) {
    let nameClick = clicks + 1;
    hand1.src = "./Hands/White/Jumper/White-in-Jumper" + nameClick + ".png";
  }
  clickStat = 3;
  jacketButtonActive.classList.remove("basic-section-active");
  basicButtonActive.classList.remove("basic-section-active");
  jumperButtonActive.classList.add("basic-section-active");
});

next.addEventListener("click", function () {
  if (clicks >= 11) {
    clicks = -1;
  }
  if (clickStat === 1) {
    clicks++;
    if (clicks === 0) {
      hand1.src = "./Hands/White/Basic/White-in-Basic11.png";
    }
    if (clicks === 1) {
      hand1.src = "./Hands/White/Basic/White-in-Basic2.png";
    }
    if (clicks === 2) {
      hand1.src = "./Hands/White/Basic/White-in-Basic3.png";
    }
    if (clicks === 3) {
      hand1.src = "./Hands/White/Basic/White-in-Basic4.png";
    }
    if (clicks === 4) {
      hand1.src = "./Hands/White/Basic/White-in-Basic5.png";
    }
    if (clicks === 5) {
      hand1.src = "./Hands/White/Basic/White-in-Basic6.png";
    }
    if (clicks === 6) {
      hand1.src = "./Hands/White/Basic/White-in-Basic7.png";
    }
    if (clicks === 7) {
      hand1.src = "./Hands/White/Basic/White-in-Basic8.png";
    }
    if (clicks === 8) {
      hand1.src = "./Hands/White/Basic/White-in-Basic9.png";
    }
    if (clicks === 9) {
      hand1.src = "./Hands/White/Basic/White-in-Basic10.png";
    }
    if (clicks === 10) {
      hand1.src = "./Hands/White/Basic/White-in-Basic1.png";
    }
    if (clicks === 11) {
      hand1.src = "./Hands/White/Basic/White-in-Basic12.png";
    }
  }
  //jacket
  if (clickStat === 2) {
    clicks++;
    if (clicks === 0) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket11.png";
    }
    if (clicks === 1) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket2.png";
    }
    if (clicks === 2) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket3.png";
    }
    if (clicks === 3) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket4.png";
    }
    if (clicks === 4) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket5.png";
    }
    if (clicks === 5) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket6.png";
    }
    if (clicks === 6) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket7.png";
    }
    if (clicks === 7) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket8.png";
    }
    if (clicks === 8) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket9.png";
    }
    if (clicks === 9) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket10.png";
    }
    if (clicks === 10) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket1.png";
    }
    if (clicks === 11) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket12.png";
    }
  }
  //jumper
  if (clickStat === 3) {
    clicks++;
    if (clicks === 0) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper11.png";
    }
    if (clicks === 1) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper2.png";
    }
    if (clicks === 2) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper3.png";
    }
    if (clicks === 3) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper4.png";
    }
    if (clicks === 4) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper5.png";
    }
    if (clicks === 5) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper6.png";
    }
    if (clicks === 6) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper7.png";
    }
    if (clicks === 7) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper8.png";
    }
    if (clicks === 8) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper9.png";
    }
    if (clicks === 9) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper10.png";
    }
    if (clicks === 10) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper1.png";
    }
    if (clicks === 11) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper12.png";
    }
  }
});

previos.addEventListener("click", function () {
  if (clicks <= 0) {
    clicks = 12;
  }
  if (clickStat === 1) {
    clicks--;
    if (clicks === 0) {
      hand1.src = "./Hands/White/Basic/White-in-Basic11.png";
    }
    if (clicks === 1) {
      hand1.src = "./Hands/White/Basic/White-in-Basic2.png";
    }
    if (clicks === 2) {
      hand1.src = "./Hands/White/Basic/White-in-Basic3.png";
    }
    if (clicks === 3) {
      hand1.src = "./Hands/White/Basic/White-in-Basic4.png";
    }
    if (clicks === 4) {
      hand1.src = "./Hands/White/Basic/White-in-Basic5.png";
    }
    if (clicks === 5) {
      hand1.src = "./Hands/White/Basic/White-in-Basic6.png";
    }
    if (clicks === 6) {
      hand1.src = "./Hands/White/Basic/White-in-Basic7.png";
    }
    if (clicks === 7) {
      hand1.src = "./Hands/White/Basic/White-in-Basic8.png";
    }
    if (clicks === 8) {
      hand1.src = "./Hands/White/Basic/White-in-Basic9.png";
    }
    if (clicks === 9) {
      hand1.src = "./Hands/White/Basic/White-in-Basic10.png";
    }
    if (clicks === 10) {
      hand1.src = "./Hands/White/Basic/White-in-Basic1.png";
    }
    if (clicks === 11) {
      hand1.src = "./Hands/White/Basic/White-in-Basic12.png";
    }
  }

  if (clickStat === 2) {
    clicks--;
    if (clicks === 0) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket11.png";
    }
    if (clicks === 1) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket2.png";
    }
    if (clicks === 2) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket3.png";
    }
    if (clicks === 3) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket4.png";
    }
    if (clicks === 4) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket5.png";
    }
    if (clicks === 5) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket6.png";
    }
    if (clicks === 6) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket7.png";
    }
    if (clicks === 7) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket8.png";
    }
    if (clicks === 8) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket9.png";
    }
    if (clicks === 9) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket10.png";
    }
    if (clicks === 10) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket1.png";
    }
    if (clicks === 11) {
      hand1.src = "./Hands/White/Jacket/White-in-Jacket12.png";
    }
  }

  if (clickStat === 3) {
    clicks--;
    if (clicks === 0) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper11.png";
    }
    if (clicks === 1) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper2.png";
    }
    if (clicks === 2) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper3.png";
    }
    if (clicks === 3) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper4.png";
    }
    if (clicks === 4) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper5.png";
    }
    if (clicks === 5) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper6.png";
    }
    if (clicks === 6) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper7.png";
    }
    if (clicks === 7) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper8.png";
    }
    if (clicks === 8) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper9.png";
    }
    if (clicks === 9) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper10.png";
    }
    if (clicks === 10) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper1.png";
    }
    if (clicks === 11) {
      hand1.src = "./Hands/White/Jumper/White-in-Jumper12.png";
    }
  }
});
