function performConversion() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = document.getElementById('inputValue').value.split(',');
    let results;

    switch (conversionType) {
        case 'decimalToBinary':
            results = inputValue.map(value => {
                const decimalValue = parseInt(value.trim());
                if (isNaN(decimalValue)) {
                    return `Invalid input: ${value.trim()}`;
                }
                return `<span class="output-binary">(${decimalValue.toString(2)})<span class="output-binary-sub">₂</span></span>`;
            });
            document.getElementById('output').innerHTML = `Binary: ${results.join(', ')}`;
            break;
        case 'binaryToDecimal':
            results = inputValue.map(value => {
                const binaryValue = value.trim();
                if (!/^[01]+$/.test(binaryValue)) {
                    return `Invalid input: ${binaryValue}`;
                }
                const decimalValue = parseInt(binaryValue, 2);
                return `<span class="output-decimal">(${decimalValue})<span class="output-decimal-sub">₁₀</span></span>`;
            });
            document.getElementById('output').innerHTML = `Decimal: ${results.join(', ')}`;
            break;
        case 'binaryToHexadecimal':
            results = inputValue.map(value => {
                const binaryValue = value.trim();
                if (!/^[01]+$/.test(binaryValue)) {
                    return `Invalid input: ${binaryValue}`;
                }
                const decimalValue = parseInt(binaryValue, 2);
                return `<span class="output-hexadecimal">(${decimalValue.toString(16).toUpperCase()})<span class="output-hexadecimal-sub">₁₆</span></span>`;
            });
            document.getElementById('output').innerHTML = `Hexadecimal: ${results.join(', ')}`;
            break;
        case 'hexadecimalToBinary':
            results = inputValue.map(value => {
                const hexValue = value.trim();
                if (!/^[0-9A-Fa-f]+$/.test(hexValue)) {
                    return `Invalid input: ${hexValue}`;
                }
                const decimalValue = parseInt(hexValue, 16);
                return `<span class="output-binary">(${decimalValue.toString(2)})<span class="output-binary-sub">₂</span></span>`;
            });
            document.getElementById('output').innerHTML = `Binary: ${results.join(', ')}`;
            break;
        case 'binaryToOctal':
            results = inputValue.map(value => {
                const binaryValue = value.trim();
                if (!/^[01]+$/.test(binaryValue)) {
                    return `Invalid input: ${binaryValue}`;
                }
                const decimalValue = parseInt(binaryValue, 2);
                return `<span class="output-octal">(${decimalValue.toString(8)})<span class="output-octal-sub">₈</span></span>`;
            });
            document.getElementById('output').innerHTML = `Octal: ${results.join(', ')}`;
            break;
        case 'octalToBinary':
            results = inputValue.map(value => {
                const octalValue = value.trim();
                if (!/^[0-7]+$/.test(octalValue)) {
                    return `Invalid input: ${octalValue}`;
                }
                const decimalValue = parseInt(octalValue, 8);
                return `<span class="output-binary">(${decimalValue.toString(2)})<span class="output-binary-sub">₂</span></span>`;
            });
            document.getElementById('output').innerHTML = `Binary: ${results.join(', ')}`;
            break;
        case 'binaryToText':
            results = inputValue.map(value => {
                const binaryValue = value.trim().replace(/\s+/g, '');
                if (!/^[01]+$/.test(binaryValue)) {
                    return `Invalid input: ${binaryValue}`;
                }
                let text = '';
                for (let i = 0; i < binaryValue.length; i += 8) {
                    const byte = binaryValue.substring(i, i + 8);
                    text += String.fromCharCode(parseInt(byte, 2));
                }
                return text;
            });
            document.getElementById('output').innerText = `Text: ${results.join(', ')}`;
            break;
        case 'textToBinary':
            results = inputValue.map(value => {
                let binaryString = '';
                for (let i = 0; i < value.length; i++) {
                    binaryString += value.charCodeAt(i).toString(2).padStart(8, '0') + ' ';
                }
                return `<span class="output-binary">(${binaryString.trim()})<span class="output-binary-sub">₂</span></span>`;
            });
            document.getElementById('output').innerHTML = `Binary: ${results.join(', ')}`;
            break;
        default:
            document.getElementById('output').innerText = 'Invalid conversion type';
    }
}