d = new Date();

// Render title and description
const renderTitle = (title, github, repo, license) => {
  let badge = '';
  if (license === 'Unlicensed') {
    badge = '![License](https://img.shields.io/badge/License-Unlicensed-blue.svg)';
  } else if (license === 'MIT License') {
    badge = '![License](https://img.shields.io/badge/License-MIT-blue.svg)';
  } else if (license === 'Apache License') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if (license === 'GNU GPL License') {
    badge = '![License](https://img.shields.io/badge/License-GPL-blue.svg)';
  };

  return `
<h1 align="center"><strong>${title}</strong></h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/top/${github}/${repo}">
  <img src="${badge}">
</p>

## Description
`;
};

// Render table of contents based on whether credit is being given
const renderTOC = creditBool => {
  if (creditBool) {
    return `
## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation

## Usage
`;
  } else {
    return `
## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)
    
## Installation

## Usage
`;
  };
};

// Render license according to input
const renderLicense = (license, name) => {
  if (license === 'Unlicensed') {
    return `
## License

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
`;
  } else if (license === 'MIT License') {
    return `
## License

MIT License

Copyright (c) ${d.getFullYear()} ${name}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
  } else if (license === 'Apache License') {
    return `
## License

Copyright ${d.getFullYear()} ${name}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  > <http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;
  } else if (license === 'GNU GPL License') {
    return `
## License

Copyright (C) ${d.getFullYear()} ${name}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;
  };
};

// Render final section using data
const renderQuestions = (github, email) => {
  return `
---

## Contributing

## Tests

## Questions

For further questions and comments, please reach out through [GitHub](https://github.com/${github}) or via email at ${email}.`;
};

// Assemble
function generateMarkdown(data) {
  // Render title
  const title = renderTitle(data.title, data.github, data.repo, data.license);
  // Render table of contents
  const toc = renderTOC(data.credit);
  // Render license
  const license = renderLicense(data.license, data.name);
  // Render questions
  const questions = renderQuestions(data.github, data.email);

  return title + toc + license + questions;
}

module.exports = generateMarkdown;
