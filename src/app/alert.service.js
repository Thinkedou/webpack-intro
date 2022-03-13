class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  handleAdditionError(inputs, numbers) {
    let fullMessage = 'Merci de renseigner deux nombres: '

    this.errorBox.classList.remove("invisible");
    this.errorBox.textContent = fullMessage;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}
