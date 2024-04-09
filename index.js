#! /usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import inquirer from 'inquirer';
// Function to clear the console
function clearConsole() {
    process.stdout.write('\x1B[2J\x1B[0f');
}
// Function to display ASCII art "EID MUBARAK" text in a large font size
function displayAsciiArt() {
    clearConsole(); // Clear the console
    // Generate ASCII art text for "EID MUBARAK"
    figlet.text('EID MUBARAK', { font: 'ANSI Shadow', horizontalLayout: 'default' }, (err, data) => {
        if (err) {
            console.log(chalk.red('Error generating ASCII art.'));
            return;
        }
        console.log(chalk.cyan(data)); // Display the ASCII art text in cyan color
        promptUser(); // After displaying ASCII art, prompt the user for input
    });
}
// Function to prompt the user using Inquirer
function promptUser() {
    inquirer
        .prompt({
        type: 'input',
        name: 'name',
        message: 'Please enter your name:',
    })
        .then((answers) => {
        const userName = answers.name || 'Guest';
        console.log(`\n${chalk.green(`Eid Mubarak, ${userName}! 🌙🕌`)}`);
    })
        .catch((error) => {
        console.log(chalk.red('Error prompting user:', error));
    });
}
// Call function to display ASCII art "EID MUBARAK" text
displayAsciiArt();
