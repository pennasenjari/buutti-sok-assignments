/* EXTRA

This task provides another real-life use-case for recursion.

Structural recursion is when we have a recursive data structure. For example, 
  an object that refers to another object that refers to another object... 
  and so on.

One common case of structural recursion is user interfaces. Imagine a program
  that has a window, with the window having various buttons, drop-downs, panels,
  the panels having their own buttons, check-boxes, ... what this forms is a tree
  structure of different user interface controls that the user can interact with.
  Think of any software you use: for example, VS Code and Discord both have their
  user interfaces arranged this way.

The controls (panels, buttons etc.) that are inside a container (like a window 
  or panel) are called children of the container.

We build one simple example of such a structure below. There is a main window
two sub-windows: a settings window and a profile window. These are children of 
  the main window.
the main window has a button for exiting the program
the settings window has a button for returning back to the main menu (closing
  the settings)
the profile window has an info panel for displaying information on the user's
  profile

function buildUserInterface() {
    const mainWindow = { name: "MainWindow", width: 600, height: 400, 
      children: [ ] };
    const buttonExit = { name: "ButtonExit", width: 100, height: 30, 
      children: [ ] };
    mainWindow.children.push(buttonExit);

    const settingsWindow = { name: "SettingsWindow", width: 400, height: 300, 
      children: [ ] };
    const buttonReturnToMenu = { name: "ButtonReturnToMenu", width: 100, 
      height: 30, children: [ ] };
    settingsWindow.children.push(buttonReturnToMenu);
    mainWindow.children.push(settingsWindow);

    const profileWindow = { name: "ProfileWindow", width: 500, height: 400, 
      children: [ ] };
    const profileInfoPanel = { name: "ProfileInfoPanel", width: 200, height: 200,
      children: [ ] };
    profileWindow.children.push(profileInfoPanel);
    mainWindow.children.push(profileWindow);

    return mainWindow;
}

const userInterfaceTree = buildUserInterface();
a) Copy the code above to your program.

console.log the user interface control tree to see the whole structure.

b) We figure out that some users might find the profile info panel too small
  to adequately contain the profile information. We want to have a function fo
  increasing the width of the profile info panel (ProfileInfoPanel) by 100, 
  that the users can optionally use to enlarge the profile info panel.

However, we currently have no clean way to reach the profile info panel after 
  the user interface has been built.

To fix this, create a function findControl that recursively traverses the UI
  control tree. It takes in a control object and a name string. The function 
  should find and return a control with the given name.

The function should

check if the name of the given control object matches the name parameter. 
If it does, return the given control object
otherwise, use a loop to go through each of the given control's children, 
calling findControl for each of them and passing the specific child and the 
given name to the function. If one of the calls returns a non-null value, 
return its value
if no children returned a control for the findControl call (or the specified 
control had no children), return null Do not modify the buildUserInterface 
function in this task. It is not necessary.
Implement findControl so that the following code correctly finds and changes 
the width of the profile info panel and prints the same result.

const profileInfoPanel = findControl(userInterfaceTree, "ProfileInfoPanel");
profileInfoPanel.width += 100;
console.log(profileInfoPanel); // prints { name: 'ProfileInfoPanel', width: 300, 
height: 200, children: [] } */

function buildUserInterface() {
    const mainWindow = { name: "MainWindow", width: 600, height: 400, 
      children: [ ] };
    const buttonExit = { name: "ButtonExit", width: 100, height: 30, 
      children: [ ] };
    mainWindow.children.push(buttonExit);

    const settingsWindow = { name: "SettingsWindow", width: 400, height: 300, 
      children: [ ] };
    const buttonReturnToMenu = { name: "ButtonReturnToMenu", width: 100, 
      height: 30, children: [ ] };
    settingsWindow.children.push(buttonReturnToMenu);
    mainWindow.children.push(settingsWindow);

    const profileWindow = { name: "ProfileWindow", width: 500, height: 400, 
      children: [ ] };
    const profileInfoPanel = { name: "ProfileInfoPanel", width: 200, height: 200,
      children: [ ] };
    profileWindow.children.push(profileInfoPanel);
    mainWindow.children.push(profileWindow);

    return mainWindow;
}

function findControl(currentObj, objName) {
  for (child of currentObj.children) {
    if (child.name === objName) {
      break;
    }
    findControl(child, objName);
  }
  return child;
}

const userInterfaceTree = buildUserInterface();
const profileInfoPanel = findControl(userInterfaceTree, "ProfileInfoPanel");
profileInfoPanel.width += 100;
console.log(profileInfoPanel); // { name: 'ProfileInfoPanel', width: 300, height: 200, children: [] }
