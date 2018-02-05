import { default as program } from 'commander'
import { prompt } from 'inquirer'

import { store } from '@store'

// info
program
  .version('0.0.6')
  .description('A simple backup utility for macOS')

// init
program
  .command('init')
  .description('Initialize max')
  .action(() => {
    prompt([
      {
        type: 'input',
        name: 'path',
        message: 'Enter a relative path in which to store all max backups',
        validate: (value) => nonEmptyCheck(value)
      },
      {
        type: 'confirm',
        name: 'snapshots',
        message: 'Enable snapshots? (each backup will be timestamped and seperate)'
      },
      {
        when: (answers) => answers.snapshots,
        type: 'list',
        choices: [
          'YYYY-MM-DD HHmmss',
          'DD-MM-YYYY HHmmss'
        ],
        name: 'timestamp',
        message: 'Choose a timestamp format for your snapshots'
      }
    ])
      .then(answers => store.initialize(answers.path, answers.snapshots, answers.timestamp))
  })

// add
program
  .command('add')
  .description('Add a new backup entry to max')
  .action(() => {
    let combinedResponses = {
      name: '',
      paths: []
    }

    // run just the name prompt
    prompt({
      type: 'input',
      name: 'name',
      message: 'Enter a name for this backup entry',
      validate: (value) => nonEmptyCheck(value)
    })
      .then((answers) => {
        combinedResponses.name = answers.name

        // keep asking for paths
        repeatingPrompt()
      })

    const repeatingPrompt = () => {
      prompt({
        type: 'input',
        name: 'path',
        message: 'Enter a relative path for this backup entry (leave blank to finish)'
      }) // grab just the path
        .then((answers) => {
          if (!answers.path) {
            store.add(combinedResponses.name, combinedResponses.paths)
          } else {
            combinedResponses.paths.push(answers.path)
            repeatingPrompt()
          }
        })
    }
  })

// remove
program
  .command('remove')
  .description('Remove a backup entry from max')
  .action(() => {
    prompt([{
      type: 'input',
      name: 'name',
      message: 'Enter the name of the backup entry to remove',
      validate: (value) => nonEmptyCheck(value)
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure?'
    }])
      .then((answers) => {
        if (answers.confirm) {
          store.remove(answers.name)
        }
      })
  })

// hold
program
  .command('hold')
  .description('Place a backup entry in max, on hold')
  .action(() => {
    prompt({
      type: 'input',
      name: 'name',
      message: 'Enter the name of the backup entry to put on hold',
      validate: (value) => nonEmptyCheck(value)
    })
      .then(answers => store.hold(answers.name))
  })

// unhold
program
  .command('unhold')
  .description('Place a backup entry in max, on unhold')
  .action(() => {
    prompt({
      type: 'input',
      name: 'name',
      message: 'Enter the name of the backup entry to put on unhold',
      validate: (value) => nonEmptyCheck(value)
    })
      .then(answers => store.unhold(answers.name))
  })

// list
program
  .command('list')
  .option('-v, --verbose', 'verbose mode')
  .description('List backup entries for max')
  .action((options) => store.list(options.verbose))

// backup
program
  .command('backup')
  .description('Backup everything as defined in max')
  .action(() => store.backup())

program.parse(process.argv)

// validator for inputs
const nonEmptyCheck = (path) => {
  return path.length ? true : 'Cannot be empty'
}
