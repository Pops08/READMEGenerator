const fs = require('fs');
const inquirer = require('inquirer');
const createRM = require('./utils/ReadMeTemplate.js');

// array of questions for user
const questions = () => {
    console.log(`
    ================================
    NOTE: All Questions Are REQUIRED
    ================================
    `);

    return inquirer.prompt([
      {
        type: 'input',
        name: 'Gitusername',
        message: 'Please Enter Your Githhub USERNAME',
        validate: ghUsername => {
            if (ghUsername) {
                return true;
            }
            else {
                console.log(`Your Github Username Is Required!`);
                return false;
            }
        }
      },

      {
        type: "input",
        name: "RMemail",
        message: "Please Enter Your EMAIL",
        validate: RMEmail => {
            if(RMEmail) {
                return true;
            } else {
                console.log("Your Email Is Required!");
                return false;
            }
        }
      },

      {
        type: "input",
        name: "RMtitle",
        message: "Please Enter A TITLE For Your ReadMe",
        validate: RMtitle => {
            if(RMtitle) {
                return true;
            } else {
                console.log("A Title For Your ReadMe Is Required!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "RMdesc",
        message: "Please Enter A Description For Your ReadMe",
        validate: RMdesc => {
            if(RMdesc) {
                return true;
            } else {
                console.log("A Description For Your ReadMe Is Required!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "RMinstall",
        message: "Please Enter Installation Instructions",
        validate: RMinstall => {
            if (RMinstall) {
                return true;
            } else {
                console.log("Installation Instructions Are Required!");
                return false;
            }
        } 
    },

    {
        type: "input",
        name: "RMusage",
        message: "Please Enter Usage Instructions",
        validate: RMusage => {
            if (RMusage) {
                return true;
            } else {
                console.log("Usage Instructions Are Required!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "RMcont",
        message: "Please Enter Contribution Guidelines",
        validate: RMcont => {
            if (RMcont) {
                return true;
            } else {
                console.log("Contribution Guidelines Are Required!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "RMtesting",
        message: "Please Enter Test Instructions",
        validate: RMtesting => {
            if (RMtesting) {
                return true;
            } else {
                console.log("Testing Instructions Are Required!");
                return false;
            }
        }
    },

    {
        type: "list",
        name: "RMlicense",
        message: "Please Select One License From The Following List",
        choices: ["GNUAGPLv3", "GNUGPLv3", "GNULGPLv3", "Apache2.0", "MIT", "BSD"],
    }

    ])
}

// Error Catching Function
const funcCallback = (err) => {
    if (err) {
        console.error("An Error Has Occurred & The File Was Not Created!");
    }

    console.log('Success! README File Has Been Created');
}

// Initialize program
questions().then(ReadMeAnswers => {
    const newRM = createRM(ReadMeAnswers);
    fs.writeFile('README.md', newRM, funcCallback);
});
