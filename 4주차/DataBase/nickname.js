class Data {
    nick() {
        const randomname = () => {
            const name = ['ample', 'achieve', 'concentration', 'enfix', 'owl', 'attachment', 'hypothesize', 'catch', 'gene', 'scheme', 'start', 'manufacture', 'hunter', 'separation', 'possibility', 'revenge', 'volume', 'analyst', 'lonely', 'condition', 'design', 'night', 'secretion', 'reference', 'crusade', 'quality', 'jump', 'weapon', 'pit', 'aquarium', 'stroll', 'hierarchy', 'layout', 'bathtub', 'exact', 'teenager', 'button', 'translate', 'suburb', 'fun', 'plastic', 'analysis', 'note', 'deer', 'scan', 'know', 'snatch', 'relinquish', 'cook', 'ground', 'guide', 'annual', 'Venus', 'qualify', 'aunt', 'slab', 'line', 'benefit', 'global', 'grounds', 'belly', 'progress', 'flawed', 'oil', 'video', 'strict', 'horizon', 'map', 'pluck', 'thin', 'parameter', 'electronics', 'betray', 'ankle', 'drama', 'director', 'appetite', 'earthwax', 'mind', 'exclude', 'parade', 'crystal', 'quotation', 'vegetable', 'clerk', 'finance', 'traffic', 'literacy', 'sun', 'adventure', 'musical', 'car', 'recover', 'decrease', 'conflict', 'moral', 'fish', 'Raccoon', 'Autumn', 'Rano']
            const result = Math.floor(Math.random() * name.length)
            return name[result];
        }

        const randomAlphabet = () => {
            const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let result = '';
            for (let i = 0; i < 3; i++) {
                result += alphabet[Math.floor(Math.random() * alphabet.length)];
            };
            return result;
        }

        const randomnumber = () => {
            const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            let result = '';
            for (let i = 0; i < 4; i++) {
                result += number[Math.floor(Math.random() * number.length)];
            };
            return result
        }
        return `${randomname()}${randomAlphabet()}${randomnumber()}`;
    }

    randommoney() {
        const money = Math.floor(Math.random() * 100000);
        return money.toString();
    }

    randomdate(date1, date2) {
        function randomValueBetween(min, max) {
            return Math.random() * (max - min) + min;
        }
        var date1 = date1 || '01-01-1970'
        var date2 = date2 || new Date().toLocaleDateString()
        date1 = new Date(date1).getTime()
        date2 = new Date(date2).getTime()
        if (date1 > date2) {
            return new Date(randomValueBetween(date2, date1)).toISOString().split('T').join(' ').slice(0, -5);
        } else {
            return new Date(randomValueBetween(date1, date2)).toISOString().split('T').join(' ').slice(0, -5);
        }
    }
}

module.exports = { Data };