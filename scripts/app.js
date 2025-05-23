function simulateQubit() {
  const states = ['|0⟩', '|1⟩'];
  const randomState = states[Math.floor(Math.random() * 2)];
  document.getElementById('output').textContent = `Measured state: ${randomState}`;
}
