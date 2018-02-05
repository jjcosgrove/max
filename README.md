# max

A simple backup utility for macOS

Uses <a href="https://github.com/tj/commander.js/">commander.js</a> and <a href="https://github.com/SBoudrias/Inquirer.js/">inquirer.js</a>

## Install

```
npm -g install @jjcosgrove/max
```

## Features

max lets you create backups of your files via the command line/terminal. Currently it has the following functionality:

command|function
-|-|
init|Initialize max
add|Add a new backup entry to max
remove|Remove a backup entry from max
hold|Place a backup entry in max, on hold
unhold|Place a backup entry in max, on unhold
list [-v]|List backup entries for max
backup|Backup everything as defined in max

## Notes

This is very much a pre-pre alpha release (i.e. if it blows up your mac, don't come knocking).

Paths as entered into max, are relative to $HOME - always.

Desktop/Backups => /Users/{YOU}/Desktop/Backups

etc.

There is a <em>snapshot</em> feature you can enable when running 'init'. This simply prepends the backups with the timestamp as chosen during the init process.

## Todo

- Implement 'restore' command (maybe)
- Speed it up
- Refactor and tidy up
- Add comments
- Replace fs-extra's copySync
- Drink coffee
