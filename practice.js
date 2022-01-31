"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countTeams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY skills
 *  2. INTEGER minPlayers
 *  3. INTEGER minLevel
 *  4. INTEGER maxLevel
 */

function countTeams(skills, minPlayers, minLevel, maxLevel) {
    // Write your code here
    let count = 0;
    let qualifiedPlayers = [];
    let lastValue = 0;
    let permutations = [];
    for (let i = 0; i < skills.length; i++) {
        if (skills[i] >= minLevel && skills[i] <= maxLevel) {
            qualifiedPlayers.push(skills[i]);
        }
    }
    for (let i = 0; i < qualifiedPlayers.length; i++) {
        if (i + minPlayers >= qualifiedPlayers.length) {
            lastValue = i;
            break;
        } else {
            permutations.push(qualifiedPlayers.slice(i, i + minPlayers - 1));
        }
    }
    let result = qualifiedPlayers.length - 1 - lastValue;

    let extra = Math.floor(qualifiedPlayers.length / result);
    return permutations.length + extra;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const skillsCount = parseInt(readLine().trim(), 10);

    let skills = [];

    for (let i = 0; i < skillsCount; i++) {
        const skillsItem = parseInt(readLine().trim(), 10);
        skills.push(skillsItem);
    }

    const minPlayers = parseInt(readLine().trim(), 10);

    const minLevel = parseInt(readLine().trim(), 10);

    const maxLevel = parseInt(readLine().trim(), 10);

    const result = countTeams(skills, minPlayers, minLevel, maxLevel);

    ws.write(result + "\n");

    ws.end();
}
