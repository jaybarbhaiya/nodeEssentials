# nodeEssentials
 This document is just a tutorial for understanding how modules work in NodeJS
 This is a basic tutorial and can be followed with the video tutorial link given below:
 https://www.youtube.com/watch?v=pU9Q6oiQNd0

# Notes
 ```npm init``` - used to create ```package.json```, this is useful when the git reporistory is downloaded then all the dependencies can be installed by using a single ```npm install``` command.

 For adding new dependencies to your project:
 * ```npm install backbone``` - This installs the package to the project but not to the dependencies in the ```package.json``` file.
 * ```npm install backbone -S``` - Installs the package and also add an entry to the dependencies in ```package.json``` file.