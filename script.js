const progressCircleCircle = document.querySelector(".progress-ring__circle");
const progressCircle = document.querySelector(".progress-ring");
const valueInput = document.getElementById("valueInput");
const animateToggle = document.getElementById("animateToggle");
const hideToggle = document.getElementById("hideToggle");

let isAnimating = false;

valueInput.addEventListener("input", () => {
  const value = Number(valueInput.value);
  const max = Number(valueInput.max);
  const min = Number(valueInput.min);

  if (value > max) valueInput.value = max;
  else if (value < min) valueInput.value = min;
});

const progressAPI = {
  setProgress(value) {
    const clampedValue = Math.min(Math.max(value, 0), 100);
    progressCircleCircle.style.strokeDashoffset =
      339.292 - (clampedValue / 100) * 339.292;
  },
  toggleAnimation(enable) {
    isAnimating = enable;
    progressCircle.style.animation = enable
      ? "rotation 1s linear infinite"
      : "none";
  },
  toggleVisibility(hidden) {
    progressCircle.style.opacity = hidden ? "0" : "100%";
  },
};

valueInput.addEventListener("input", (event) => {
  const value = parseInt(event.target.value, 10);
  if (!isNaN(value)) {
    progressAPI.setProgress(value);
  }
});

animateToggle.addEventListener("change", (event) => {
  progressAPI.toggleAnimation(event.target.checked);
});

hideToggle.addEventListener("change", (event) => {
  progressAPI.toggleVisibility(event.target.checked);
});

progressAPI.toggleAnimation(false);
progressAPI.toggleVisibility(false);
progressAPI.setProgress(valueInput.value);
