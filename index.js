import chalk from 'chalk';

// Basic Examples of Chalk

// 1. Colorful Console Output:
console.log(chalk.red('Error!'));
console.log(chalk.green('Success!'));
console.log(chalk.blue('Info!'));

// 2. Styling Text:
const styledText = chalk.bold.underline.red('Hello, Chalk!');
console.log(styledText);

// 3. Background Colors:

const backgroundColor = chalk.bgBlue.white('Blue Background');
console.log(backgroundColor);

// 4. Combining Styles:
const styledText2 = chalk.bold.green.bgYellow('Styled Text');
console.log(styledText2);

// 5. Chaining Multiple Styles:
const styledText3 = chalk.bold.red.underline.bgWhiteBright('Chained Styles');
console.log(styledText3);

// 6. Nested Styles:
const nestedStyles = chalk.red('This is ') + chalk.bold.blue('nested styles') + chalk.green(' example.');
console.log(nestedStyles);

// 7. ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Reference: https://github.com/chalk/chalk
