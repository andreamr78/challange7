// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badge;
let link;

function renderLicenseBadge(license) {
  switch (license) {
    case 'Creative Commons':
      badge = 'https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg'
      break;
    case 'MIT License':
      badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
    break;
    case 'Eclipse':
      badge = 'https://img.shields.io/badge/License-EPL_1.0-red.svg'
    break;
    case 'GNU':
      badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    break;
    case 'The Organization for Ethical Source':
      badge = 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg'
    break;
    case 'IBM':
      badge = 'https://img.shields.io/badge/License-IPL_1.0-blue.svg'
    break;
    case 'Open Data Commons':
      badge = 'https://img.shields.io/badge/License-ODC_BY-brightgreen.svg'
    break;
    default:
      badge = []
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Creative Commons':
      link = 'http://creativecommons.org/publicdomain/zero/1.0/';
      break;
    case 'MIT License':
      link = 'https://opensource.org/licenses/MIT'
    break;
    case 'Eclipse':
      link = 'https://opensource.org/licenses/EPL-1.0'
    break;
    case 'GNU':
      link = 'https://www.gnu.org/licenses/gpl-3.0'
    break;
    case 'The Organization for Ethical Source':
      link = 'https://firstdonoharm.dev'
    break;
    case 'IBM':
      link = 'https://opensource.org/licenses/IPL-1.0'
    break;
    case 'Open Data Commons':
      link = 'https://opendatacommons.org/licenses/by/'
    break;
    default:
      link = []
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return []
  } else {
    renderLicenseBadge(license);
    renderLicenseLink(license);
  }
}

// function generateTable (data){
//   let content = data.split(', ');
//   for (let i = 0; i < content.length; i++) {
//     // console.log (content[i]);
// `* [${content[i]}](#${content[i]})`
//   }
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.lic)
const newMark =  `
# ${data.title} 
![${data.lic}](${badge})

${link}

## Description
${data.desc}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.instal}

## Usage

${data.use}

## Contributing

${data.people}

## Tests 

${data.tests}

## Questions 

${data.quesions}

[Github](https://github.com/${data.username})

More questions? Message me at: ${data.email}
    `
return newMark;
}

export default generateMarkdown;
