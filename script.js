function encryptText() {
  const plaintext = document.getElementById("plaintext").value;
  const key = document.getElementById("key").value;

  if (!plaintext || !key) {
    alert("Please enter text and a key.");
    return;
  }

  const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();
  document.getElementById("output").value = ciphertext;
}

function decryptText() {
  const ciphertext = document.getElementById("plaintext").value;
  const key = document.getElementById("key").value;

  if (!ciphertext || !key) {
    alert("Please enter encrypted text and a key.");
    return;
  }

  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    if (!originalText) throw new Error();

    document.getElementById("output").value = originalText;
  } catch (err) {
    alert("Decryption failed. Check your key or input.");
  }
}
