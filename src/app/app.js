const alertService     = new AlertService();
const componentService = new ComponentService();

const run = (alertService, componentService) => {
  alertService.hideErrors();

  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInputs();
    const parsedInputs = parseInputs(inputs);
    if (inputsAreValid(parsedInputs)) {
      const [numA, numB] = parsedInputs; // object destructuring :)
      componentService.setResult(numA + numB); // le calcul en lui même 
    } else {
      componentService.setResult("");
      alertService.handleAdditionError(inputs, parsedInputs);
    }
  });
};


// on lance notre app
run(alertService, componentService);
