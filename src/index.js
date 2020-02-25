module.exports = function toReadable(number) {
    let small = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ]
    let ten = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]
    let tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]
    number = String(number);
    let string = '';
    for (let i = 0; i < number.length; i++) {
        if ((i == 0) && (number.length == 3)) {
            string += small[Number(number[i])] + ' hundred';
            if ((number[i + 1] == '0') && (number[i + 2] == '0')) {
                i += 2;
            }
        } else {
            if (((i == 0) && (number.length == 2)) || ((i == 1) && (number.length == 3))) {
                if (number[i] == '1') {
                    string += ' ' + ten[Number(number[i + 1])];
                    i++;
                } else {
                    if (number[i] != '0') {
                        string += ' ' + tens[Number(number[i])];
                        if (number[i + 1] == '0') {
                            i += 2;
                        }
                    }
                }
            } else {
                if (((i == 0) && (number.length == 1)) || ((i == 1) && (number.length == 2)) || ((i == 2) && (number.length == 3))) {
                    string += ' ' + small[Number(number[i])];
                }
            }
        }
    }
    if (string[0] == ' ') {
        string = string.substring(1, string.length);
    }
    return string;
}
