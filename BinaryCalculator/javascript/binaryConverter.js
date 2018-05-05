var inNumber;
var inType;
var outType;

var typeOfNumber = {
    Binary: 2,
    Decimal: 10
}

var converter = {
    convertNumber: function(domElementOut) {
        localStorage['isCorrect'] = '';
        if(inType !== outType) {
            if(inType === typeOfNumber.Binary) {//to dec
                for(let i = 0; i < inNumber.length; i++) {
                    inNumber[i] = parseInt(Number(inNumber[i]), typeOfNumber.Binary);
                    if(isNaN(inNumber[i])) {
                        localStorage['isCorrect'] = 'false';
                    }
                }
            } else if(inType === typeOfNumber.Decimal) {//to bin
                for(let i = 0; i < inNumber.length; i++) {
                    inNumber[i] = Number(inNumber[i]).toString(typeOfNumber.Binary);
                    if(isNaN(inNumber[i])) {
                        localStorage['isCorrect'] = 'false';
                    }
                }
            } 
        }

        if(localStorage['isCorrect'].length === 0) {
            this.sendResult(domElementOut);
        } else throw new Error('Wrong format of converting!');
    },

    getNumber: function(domElementIn, domElementTypeIn, domElementTypeOut, domElementOut) {
        if(domElementIn.value.length !== 0) {
            inNumber = domElementIn.value;
            inNumber = inNumber.replace(/\s/g, '');
            inNumber = /[[0-9]{1,}]*/g[Symbol.match](inNumber);

            inType = Number(domElementTypeIn.value);

            outType = Number(domElementTypeOut.value);

            if(inNumber.length !== 0) {
                this.convertNumber(domElementOut);
            } else throw new Error('Empty field, please enter some numbers!');
        } else throw new Error('Empty field, please enter some numbers!');
    },

    sendResult: function(domElementOut) {
        return domElementOut.innerHTML = 'Result is: ' + inNumber;
    }
};