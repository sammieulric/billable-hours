Visual Studio Code
Getting Started
Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js.

Installation
You can download Visual Studio code from URL https://code.visualstudio.com/download by selecting the right platform.

How to Install Visual Studio Code on Windows
Firstly, download the Visual Studio Code installer for Windows. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). It will only take a minute.

Secondly, accept the agreement and click on next.
Thirdly, click on “create a desktop icon” so that it can be accessed from desktop and click on Next.
After that, click on the install button.
Finally, after installation completes, click on the finish button, and the visual studio code will get open.

npm install
This command installs a package and any packages that it depends on. 
“npm install”
Install the dependencies in the local node_modules folder.
By default, npm install will install all modules listed as dependencies in package.json.


Installing Cypress
Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems

Install Cypress via npm:
“npm install cypress –save-dev” (remove quotation marks)
This will install Cypress locally as a dev dependency for your project.

Opening Cypress
If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin
“npx cypress open"  (remove quotation marks)

How to upload file
This package adds a custom Cypress command that allows you to make an abstraction on how exactly you upload files through HTML controls and focus on testing user workflows.

Installation
The package is distributed via npm and should be installed as one of your project's devDependencies:
“npm install --save-dev cypress-file-upload”
Then add this line to your project’s cypress/support/commends.js :
Import ‘cypress-file-upload’ ;


You can do:
const fixtureFile = 'photo.png';
cy.get('[data-cy="file-input"]').attachFile(fixtureFile);

Note:
 photo.png must be in cypress/fixtures/


