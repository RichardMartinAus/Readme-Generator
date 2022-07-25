// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (
    license == 'GNU AGPLv3' ||
    license == 'GNU GPLv3' ||
    license == 'GNU LGPLv3'
  ) {
    return ('![Licence badge](https://img.shields.io/badge/license-GNU-blue)');
  }
  else if (license == 'Mozilla Public License 2.0') {
    return ('![Licence badge](https://img.shields.io/badge/license-Mozilla-green)');
  }
  else if (license == 'Apache License 2.0') {
    return ('![Licence badge](https://img.shields.io/badge/license-Apache--2.0-blue)');
  }
  else if (license == 'MIT License') {
    return ('![Licence badge](https://img.shields.io/badge/license-MIT-green)');
  }
  else if (license == 'Boost Software License 1.0') {
    return ('![Licence badge](https://img.shields.io/badge/license-Boost-green)');
  }
  else if (license == 'The Unlicense') {
    return ('![Licence badge](https://img.shields.io/badge/license-Unlicense-blue)');
  }
  else {
    return ('');
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'GNU AGPLv3') {
    return ('https://choosealicense.com/licenses/agpl-3.0/');
  }
  else if (license == 'GNU GPLv3') {
    return ('https://choosealicense.com/licenses/gpl-3.0/')
  }
  else if (license == 'GNU LGPLv3') {
    return ('https://choosealicense.com/licenses/lgpl-3.0/')
  }
  else if (license == 'Mozilla Public License 2.0') {
    return ('https://choosealicense.com/licenses/mpl-2.0/');
  }
  else if (license == 'Apache License 2.0') {
    return ('https://choosealicense.com/licenses/apache-2.0/');
  }
  else if (license == 'MIT License') {
    return ('https://choosealicense.com/licenses/mit/');
  }
  else if (license == 'Boost Software License 1.0') {
    return ('https://choosealicense.com/licenses/bsl-1.0/');
  }
  else if (license == 'The Unlicense') {
    return ('https://choosealicense.com/licenses/unlicense/');
  }
  else {
    return ('');
  };

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'GNU AGPLv3') {
    return ('GNU AFFERO GENERAL PUBLIC LICENSE <br> Version 3, 19 November 2007 <br>  Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. <br> For more information click the link below');
  }
  else if (license == 'GNU GPLv3') {
    return ('GNU GENERAL PUBLIC LICENSE <br> Version 3, 29 June 2007 <br> Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. <br> For more information click the link below')
  }
  if (license == 'GNU LGPLv3') {
    return ('GNU LESSER GENERAL PUBLIC LICENSE <br> Version 3, 29 June 2007 <br> Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. <br> For more information click the link below')
  }
  else if (license == 'Mozilla Public License 2.0') {
    return ('Grants <br> Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license: <br> (a) under intellectual property rights (other than patent or trademark) <br> Licensable by such Contributor to use, reproduce, make available, modify, display, perform, distribute, and otherwise exploit its Contributions, either on an unmodified basis, with Modifications, or as part of a Larger Work; and <br> (b) under Patent Claims of such Contributor to make, use, sell, offer for sale, have made, import, and otherwise transfer either its Contributions or its Contributor Version. <br> For more information click the link below');
  }
  if (license == 'Apache License 2.0') {
    return ('Copyright [yyyy] [name of copyright owner] <br> Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at <br> http://www.apache.org/licenses/LICENSE-2.0  <br> Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. <br> For more information click the link below');
  }
  else if (license == 'MIT License') {
    return ('MIT License  <br>  Copyright (c) [year] [fullname] <br>  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: <br>  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  <br>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. <br>  For more information click the link below');
  }
  else if (license == 'Boost Software License 1.0') {
    return ('Boost Software License - Version 1.0 - August 17th, 2003 <br>  Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the "Software") to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following: <br>  The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor. <br>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. <br>  For more information click the link below');
  }
  else if (license == 'The Unlicense') {
    return ('This is free and unencumbered software released into the public domain. <br>  Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. <br>  In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.  <br>  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  <br>  For more information, please refer to <https://unlicense.org>');
  }
  else {
    return ('');
  };

}


module.exports = {renderLicenseBadge, renderLicenseLink, renderLicenseSection};
