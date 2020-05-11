// function to generate markdown for README
function generateRM(data) {
  return `# ${data.RMtitle}

  ![Github licence](http://img.shields.io/badge/license-${data.RMlicense}-red)

  ## Description
  ${data.RMdesc}


  ## Table of Contents
  * [Installation](#installation)
  * [User Story](#user-story)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributions)
  * [Testing](#testing)
  * [Secrets Revealed](#secrets-revealed)
  * [Questions](#questions)
  

  ## Installation
${data.RMinstall}


  ## Usage
  ${data.RMusage}
   

  ## License
  This project is licensed by ${data.RMlicense}.


  ## Contributions
  ${data.RMcont}


  ## Testing
  ${data.RMtesting}

 
  ## Secrets Revealed
  [ReadMe Creation Secrets REVEALED](https://drive.google.com/file/d/1HVB-qy20lG3XUAkKT6S9EqFY53u2JuD0/view)


  ## Questions?
  Any burning questions? Contact me here: ${data.RMemail}. 
  Created by yours truly: ![${data.Gitusername}] (https://github.com/${data.Gitusername}).
`;
}

module.exports = generateRM;
