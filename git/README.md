## The git used files

In the folder, I will put some files about the git files. And write the steps.

I will make a menu to show the folder.

### .gitignore

To ignore the un-updated files or folders.

### .gitmessage

It has some steps to finish the operation. At first, you should create a file called *.gitmessage*

- **step 1: Install**

Installed globally
``` git
  npm install -g commitizen cz-conventional-changelog
```
Installed project level
``` git
  npm install -D commitizen cz-conventional-changelog
```

- **step 2: package.json**

add some information in package.json
``` json
  {
    "scripts": {
      "commit": "git-cz"
    },
    "config": {
      "commitizen": {
        "path":"node_modules/cz-conventional-changelog"
      }
    }
  }
```
- **step 3: run**

``` git
  git add .
  git cz
```

