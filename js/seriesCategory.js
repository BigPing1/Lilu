const seriesCategory = document.querySelector("#seriesCategory");
const seriesList = document.querySelector("#seriesList");

const menuSeriesOpen = () => {
  seriesList.style.display = "block";
};
const menuSeriesClose = () => {
  seriesList.style.display = "none";
};

seriesCategory.addEventListener("mouseover", menuSeriesOpen);
seriesList.addEventListener("mouseout", menuSeriesClose);
seriesCategory.addEventListener("mouseout", menuSeriesClose);
