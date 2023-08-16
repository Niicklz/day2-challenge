const BUTTONS: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[data-button]");
const PROGRESS_LANES: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-lane]");
const STEPS_CIRCLES: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-circle]");

let currentStep = 0;
let maxSteps = PROGRESS_LANES.length;
const disableButton = (button: HTMLButtonElement) => {
  if (currentStep === 3 || currentStep === 0) {
    button.disabled = true;
  }
};

BUTTONS.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonSelected = button.dataset.button;

    if (buttonSelected === "foward" && currentStep < maxSteps) {
      currentStep++;

      PROGRESS_LANES[currentStep - 1].classList.add("completed-lane");
      STEPS_CIRCLES[currentStep].classList.add("completed");
      BUTTONS[0].disabled = false;
    }
    if (buttonSelected === "back" && currentStep > 0) {
      PROGRESS_LANES[currentStep - 1].classList.remove("completed-lane");
      STEPS_CIRCLES[currentStep].classList.remove("completed");
      currentStep--;
      BUTTONS[1].disabled = false;
    }

    disableButton(button);
  });
});
