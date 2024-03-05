const button = document.querySelector("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const strangeLowers = document.getElementById("strangeLowers");
    const strangeUppers = document.getElementById("strangeUppers");
    const lowers = document.getElementById("lowers");
    const uppers = document.getElementById("uppers");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");
    const length = document.getElementById("length").value;

    let allowedChars = "";
    let password = "";

    function generatePassword(passwordLength, includeStrangeLowers, includeStrangeUppers, includeLowers, includeUppers, includeNumbers, includeSymbols) {
        let selectedMusts = 0;
        allowedChars = "";
        password = "";

        if (includeStrangeLowers || strangeLowers.checked) {
            const strangeLowersChars = "φωεƦ†ψuøρα$δŦĝhjκlιzχcυβπʍ";
            allowedChars += includeStrangeLowers ? strangeLowersChars : "";
            if (includeStrangeLowers) { selectedMusts++ };
        }
        if (includeStrangeUppers || strangeUppers.checked) {
            const strangeUppersChars = "ҨƜƐ尺ŤϤЦɪØþΛらÐFƓнﾌҚŁẔχㄈƔϦЛ௱";
            allowedChars += includeStrangeUppers ? strangeUppersChars : "";
            if (includeStrangeUppers) { selectedMusts++ };
        }
        if (includeLowers || lowers.checked) {
            const lowerChars = "qwertyuiopasdfghjkllzxcvbnm";
            allowedChars += includeLowers ? lowerChars : "";
            if (includeLowers) { selectedMusts++; }
        }
        if (includeUppers || uppers.checked) {
            const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
            allowedChars += includeUppers ? upperChars : "";
            if (includeUppers) { selectedMusts++; }
        }
        if (includeNumbers || numbers.checked) {
            const numberChars = "0203456789";
            allowedChars += includeNumbers ? numberChars : "";
            if (includeNumbers) { selectedMusts++; }
        }
        if (includeSymbols || symbols.checked) {
            const symbolChars = "!'^%&/()=?_-*";
            allowedChars += includeSymbols ? symbolChars : "";
            if (includeSymbols) { selectedMusts++; }
        }

        if (length) {
            passwordLength = parseInt(length);
        }

        if (selectedMusts < 2) {
            return "(At least 2 sets of characters needs to be selected)";
        }

        if (length < 20 || length > 300) {
            return "(Password length must be between 20 - 300)";
        }

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
        return password;
    }

    const showPassword = generatePassword(
        length.value,
        strangeLowers.checked,
        strangeUppers.checked,
        lowers.checked,
        uppers.checked,
        numbers.checked,
        symbols.checked);

    result.innerHTML = showPassword;

    if (button) {
        result.style.display = "block";
    } else {
        console.error(error);
    }
});

// ! click generated password and copy
document.getElementById('result').addEventListener('click', function () {
    // Select the text within the div
    var text = this.textContent;
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();

    // Copy the selected text
    document.execCommand('copy');

    // Clean up
    document.body.removeChild(textarea);

    // Provide visual feedback
    /* alert('Text copied to clipboard: ' + text) */;
    alert("Successfully Copied.")
});