# Introduction to Version Control with Git

(https://git-scm.com/downloads)[https://git-scm.com/downloads]

Using the command line to navigate to the desktop and create a folder called “project” (The Working Directory) then navigate inside this folder and create a text document called “test”

change directory to desktop
`cd ~/desktop`

make a directory call Project
`mkdir "project"`


`cd ~/desktop/project`
change directory to project new folder

If you do not have the project folder open you will need to open it to see the creation of the text file called test.txt
Alternatively create the folder called “project” manually (The Working Directory): on the Desktop then create text file using notepad and call it “test”

Then open terminal on the Mac or Git Bash on Windows 

`cd ~/desktop/project`
[change directory to project folder]

`ls`  
[List the contents of the folder]

Now we need to initialise the project folder (Working Directory) as a git repository (repo)

`git init`
[initialise folder as a repository (repo)]

`git status`
[updates status of Git repository (repo)]

You can also cd ~/desktop & type git init project this makes an Initialised folder called project

The elusive .git file

When you initialise a Working Directory (project folder) as a Git Repository (repo). It creates a hidden file .git (if your PC is set up to show hidden files.

It is straight forward to show hidden files in Windows, on a Apple Mac there are a number of ways – but this one is quick and simple.

Might be best to open a new Shell Window in Terminal from the menu bar: Shell > [choose a Shell]

Then type:

ln -s .git git

This creates a alias for the .git folder in your Working Directory, open this and you can see all the files Git uses to track that Repository (repo).

Setting up your username to identify you when making changes and commits

`git config --global user.name "Joe Doe"`
[this will identify you so when working collaboratively you know who has made changes]

`git config --global user.email “joe@doe.io”`
[this will add your email to your identification when making changes]


By adding --global this will globally set your user name and email identity on all your repositories.  If you do not type 
-–global and just have:

`git config user.name "Joe Doe"`
`git config user.email “joe@doe.io”` 

You can then set-up different repositories with different user names & emails, if you wish.  This is useful if you’re working for different organisations or groups.

## Git Add – (Staging ready to Commit)

We will now ask Git to track the text document which we called a test.txt

`git add test.txt`
[Git now adds file to the Staging area]

`git status`
[updates status of Git repository]

Git will let you know that test.txt is in the staging area and is ready to be committed

Tip: If your shell/terminal window becomes choked out you can type:

`clear`

This clears out the window

## Git (initial) Commit (Blank document) 

git commit -m "Blank document"
[-m is message for what has been changed - now your file is committed Git tracks all future changes] 

git log
[Git gives log of everything updated in the repository]


It will also give a commit number (Hash), this can be shortened down to the first 7 Numbers when referring to this commit in the future


* If you don’t use the –m to create a Commit Message- Git will take you into a text editor called Vim, this can be somewhat confusing.  If this is the case you press “I” on the keyboard for insert mode, then type your Commit Message, then press “ESC” on your keyboard and finally type :wq which will re-write the current file and complete the commit.

To exit from the Vim screen without saving type :`q!`

To avoid this in future by always remembering to use –m followed by the commit message in speech marks each time you make a commit:

`git commit -m "Commit Message Here"`











