const fs = require('fs');

const inputs = fs.readFileSync("./input.txt").toString().split("\n");

const convertToArrayofObjects = (arr) => {
    return arr.map(element => {
        const [direction, value] = element.split(' ');
        return { direction, 'value': parseInt(value) };
    });
}

const convertToHorizontalVerticalCoordinates = (arr) => {
    return arr.reduce((prev, current) => {
        let { horizontal, vertical } = prev;
        switch (current.direction) {
            case 'forward': horizontal += current.value;
                break;
            case 'up': vertical -= current.value;
                break;
            case 'down': vertical += current.value;
                break;
            default: break;
        }
        return { horizontal, vertical };
    }, { horizontal: 0, vertical: 0 });
}

const convertToAimCoordinates = (arr) => {
    return arr.reduce((prev, current) => {
        let { horizontal, vertical, aim } = prev;
        switch (current.direction) {
            case 'forward': horizontal += current.value;
                vertical += current.value * aim;
                break;
            case 'up': aim -= current.value;
                break;
            case 'down': aim += current.value;
                break;
            default: break;
        }
        return { horizontal, vertical, aim };
    }, { horizontal: 0, vertical: 0, aim: 0 });
}

// Day 2 - Part 1
const coordinates = convertToHorizontalVerticalCoordinates(convertToArrayofObjects(inputs));
console.log(coordinates);
console.log(coordinates.horizontal * coordinates.vertical)

// Day 2 - Part 2
const aimCoordinates = convertToAimCoordinates(convertToArrayofObjects(inputs));
console.log(aimCoordinates);
console.log(aimCoordinates.horizontal * aimCoordinates.vertical)

