const input = document.querySelector('input');
const span = document.getElementById('name-output');

input.addEventListener('input', upgradeInput);

function upgradeInput() {
  const inputData = input.value.trim();
  span.textContent = inputData === '' ? 'Anonymus' : inputData;
}
