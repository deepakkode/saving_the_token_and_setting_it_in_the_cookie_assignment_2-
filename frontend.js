import { encrypt, verifyToken } from './script.js';

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generateBtn');
  const verifyBtn = document.getElementById('verifyBtn');
  const tokenOutput = document.getElementById('tokenOutput');
  const decodedOutput = document.getElementById('decodedOutput');
  const tokenInput = document.getElementById('tokenInput');

  generateBtn.addEventListener('click', () => {
    const userId = document.getElementById('userId').value;
    const username = document.getElementById('username').value;

    const payload = {
      userId: parseInt(userId),
      username: username
    };

    const token = encrypt(payload);
    tokenOutput.textContent = token;
    tokenInput.value = token; // Auto-fill the verify section
  });

  verifyBtn.addEventListener('click', () => {
    const token = tokenInput.value;
    const decoded = verifyToken(token);
    
    if (decoded) {
      decodedOutput.textContent = JSON.stringify(decoded, null, 2);
    } else {
      decodedOutput.textContent = 'Error: Invalid or expired token';
    }
  });
}); 