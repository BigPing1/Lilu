// Login modal

const btnOpenLogin = document.querySelector("#btnOpenLogin");
const btnCloseLogin = document.querySelector("#btnCloseLogin");
const ModalLogin = document.querySelector("#modalLogin");

const openWinLogin = () => {
  ModalLogin.style.display = "block";
};
const closeWinLogin = () => {
  ModalLogin.style.display = "none";
};

btnOpenLogin.addEventListener("click", openWinLogin);
btnCloseLogin.addEventListener("click", closeWinLogin);

// Premium modal
const btnOpenPremium = document.querySelector("#btnOpenPremium");
const btnClosePremium = document.querySelector("#btnClosePremium");
const premiumModal = document.querySelector("#modalPremium");

const openWinPremium = () => {
  premiumModal.style.display = "block";
};
const closeWinPremium = () => {
  premiumModal.style.display = "none";
};

btnOpenPremium.addEventListener("click", openWinPremium);
btnClosePremium.addEventListener("click", closeWinPremium);
