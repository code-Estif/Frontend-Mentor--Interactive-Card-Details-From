const defaultForm = document.querySelector(".default-form");
const completedForm = document.querySelector(".completed-form");

const cardNumber = document.querySelector(".card-number");
const cardName = document.querySelector(".card-name");
const expMonth = document.querySelector(".exp-month");
const expYear = document.querySelector(".exp-year");
const cvc = document.querySelector(".cvc");

const nameInput = document.getElementById("name-input");
const numberInput = document.getElementById("number-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");
let inputValidity = new Array(5).fill(false);

const errorMessages = document.querySelectorAll(".error-message");

const confirmBtn = document.querySelector(".confirm-btn");
const continueBtn = document.querySelector(".continue-btn");

nameInput.addEventListener("focusin", () => {
  nameInput.style.border = "double 2px transparent";
  nameInput.addEventListener("input", () => {
    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    const nameValue = nameInput.value.trim();

    cardName.textContent = nameValue || "Jane Appleseed";

    if (nameValue === "") {
      inputValidity[0] = false;
      nameInput.style.border = "2px solid var(--redError)";
      errorMessages[0].textContent = "Can't be blank";
    } else if (namePattern.test(nameValue)) {
      inputValidity[0] = true;
      nameInput.style.border = "double 2px transparent";
      errorMessages[0].textContent = "";
    } else {
      inputValidity[0] = false;
      nameInput.style.border = "2px solid var(--redError)";
      errorMessages[0].textContent = "Wrong format";
    }

    nameInput.addEventListener("focusout", () => {
      nameInput.style.border = inputValidity[0]
        ? "2px solid var(--darkGrayishViolet)"
        : "2px solid var(--redError)";
    });
  });
  nameInput.addEventListener("focusout", () => {
    nameInput.style.border = inputValidity[0]
      ? "2px solid var(--darkGrayishViolet)"
      : "2px solid var(--redError)";
    if (inputValidity[0] === false && errorMessages[0].textContent === "") {
      errorMessages[0].textContent = "Can't be blank";
    }
  });
});

numberInput.addEventListener("focusin", () => {
  numberInput.style.border = "double 2px transparent";
  numberInput.addEventListener("input", () => {
    let numberValue = numberInput.value.replace(/\D/g, "");
    numberValue = numberValue.match(/.{1,4}/g)?.join(" ") || "";

    numberInput.value = numberValue;

    cardNumber.textContent = numberValue || "0000 0000 0000 0000";

    const cardPattern = /^(\d{4} ){3}\d{4}$/;

    if (numberValue === "") {
      inputValidity[1] = false;
      numberInput.style.border = "2px solid var(--redError)";
      errorMessages[1].textContent = "Can't be blank";
    } else if (cardPattern.test(numberValue)) {
      inputValidity[1] = true;
      numberInput.style.border = "double 2px transparent";
      errorMessages[1].textContent = "";
    } else {
      inputValidity[1] = false;
      numberInput.style.border = "2px solid var(--redError)";
      errorMessages[1].textContent = "Wrong format";
    }

    numberInput.addEventListener("focusout", () => {
      numberInput.style.border = inputValidity[1]
        ? "2px solid var(--darkGrayishViolet)"
        : "2px solid var(--redError)";
    });
  });
  numberInput.addEventListener("focusout", () => {
    numberInput.style.border = inputValidity[1]
      ? "2px solid var(--darkGrayishViolet)"
      : "2px solid var(--redError)";
    if (inputValidity[1] === false && errorMessages[1].textContent === "") {
      errorMessages[1].textContent = "Can't be blank";
    }
  });
});

monthInput.addEventListener("focusin", () => {
  monthInput.style.border = "double 2px transparent";
  monthInput.addEventListener("input", () => {
    let monthValue = monthInput.value;

    if (monthValue.length === 1 && monthValue < 10) {
      expMonth.textContent = "0" + monthValue;
    } else {
      expMonth.textContent = monthValue || "00";
    }

    const letterPattern = /[A-Za-zÀ-ÖØ-öø-ÿ]/;

    if (monthValue === "") {
      inputValidity[2] = false;
      monthInput.style.border = "2px solid var(--redError)";
      errorMessages[2].textContent = "Can't be blank";
    } else if (
      letterPattern.test(monthValue) ||
      monthValue < 1 ||
      monthValue > 12
    ) {
      inputValidity[2] = false;
      monthInput.style.border = "2px solid var(--redError)";
      errorMessages[2].textContent = "Wrong format";
    } else {
      inputValidity[2] = true;
      monthInput.style.border = "double 2px transparent";
      errorMessages[2].textContent = "";
    }

    monthInput.addEventListener("focusout", () => {
      monthInput.style.border = inputValidity[2]
        ? "2px solid var(--darkGrayishViolet)"
        : "2px solid var(--redError)";
    });
  });
  monthInput.addEventListener("focusout", () => {
    monthInput.style.border = inputValidity[2]
      ? "2px solid var(--darkGrayishViolet)"
      : "2px solid var(--redError)";
    if (inputValidity[2] === false && errorMessages[2].textContent === "") {
      errorMessages[2].textContent = "Can't be blank";
    }
  });
});

yearInput.addEventListener("focusin", () => {
  yearInput.style.border = "double 2px transparent";
  yearInput.addEventListener("input", () => {
    const yearValue = yearInput.value;

    expYear.textContent = yearValue || "00";

    const currentYear = new Date().getFullYear();
    const currentYearLastTwoDigits = currentYear % 100;

    if (yearValue === "") {
      inputValidity[3] = false;
      yearInput.style.border = "2px solid var(--redError)";
      errorMessages[3].textContent = "Can't be blank";
    } else if (!/^\d{2}$/.test(yearValue)) {
      inputValidity[3] = false;
      yearInput.style.border = "2px solid var(--redError)";
      errorMessages[3].textContent = "Wrong format";
    } else if (parseInt(yearValue) < currentYearLastTwoDigits) {
      inputValidity[3] = false;
      yearInput.style.border = "2px solid var(--redError)";
      errorMessages[3].textContent = "Outdated format";
    } else {
      inputValidity[3] = true;
      yearInput.style.border = "double 2px transparent";
      errorMessages[3].textContent = "";
    }

    yearInput.addEventListener("focusout", () => {
      yearInput.style.border = inputValidity[3]
        ? "2px solid var(--darkGrayishViolet)"
        : "2px solid var(--redError)";
    });
  });
  yearInput.addEventListener("focusout", () => {
    yearInput.style.border = inputValidity[3]
      ? "2px solid var(--darkGrayishViolet)"
      : "2px solid var(--redError)";
    if (inputValidity[3] === false && errorMessages[3].textContent === "") {
      errorMessages[3].textContent = "Can't be blank";
    }
  });
});

cvcInput.addEventListener("focusin", () => {
  cvcInput.style.border = "double 2px transparent";
  cvcInput.addEventListener("input", () => {
    const cvcValue = cvcInput.value;

    cvc.textContent = cvcValue || "000";

    if (cvcValue === "") {
      inputValidity[4] = false;
      cvcInput.style.border = "2px solid var(--redError)";
      errorMessages[4].textContent = "Can't be blank";
    } else if (!/^\d{3}$/.test(cvcValue)) {
      inputValidity[4] = false;
      cvcInput.style.border = "2px solid var(--redError)";
      errorMessages[4].textContent = "Wrong format";
    } else {
      inputValidity[4] = true;
      cvcInput.style.border = "double 2px transparent";
      errorMessages[4].textContent = "";
    }

    cvcInput.addEventListener("focusout", () => {
      cvcInput.style.border = inputValidity[4]
        ? "2px solid var(--darkGrayishViolet)"
        : "2px solid var(--redError)";
    });
  });
  cvcInput.addEventListener("focusout", () => {
    cvcInput.style.border = inputValidity[4]
      ? "2px solid var(--darkGrayishViolet)"
      : "2px solid var(--redError)";
    if (inputValidity[4] === false && errorMessages[4].textContent === "") {
      errorMessages[4].textContent = "Can't be blank";
    }
  });
});

confirmBtn.addEventListener("click", () => {
  if (inputValidity.every((valid) => valid === true)) {
    defaultForm.style.display = "none";
    completedForm.style.display = "flex";
  }
});

continueBtn.addEventListener("click", () => {
  defaultForm.style.display = "flex";
  completedForm.style.display = "none";

  cardNumber.textContent = "0000 0000 0000 0000";
  cardName.textContent = "Jane Appleseed";
  expMonth.textContent = "00";
  expYear.textContent = "00";
  cvc.textContent = "000";

  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));

  inputValidity.fill(false);

  errorMessages.forEach((errorMessage) => (errorMessage.textContent = ""));
});