import os from 'os'
import fsPath from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import mkdirp from 'mkdirp'
import ls from 'log-symbols'
import overwrite from 'overwrite'
import moment from 'moment'

import { config } from '@config'

// patch copySync function of fs-extra package
const fse = overwrite('fs-extra', {
  'lib/copy-sync/copy-sync.js': contents => {
    let lines = contents.split('\n')
    lines.splice(201, 1,
      `return src !== dest &&
        dest.indexOf(src) === 0 &&
        destBasename === path.basename(src)`
    )
    return lines.join('\n')
  }
})

class Store {
  constructor () {
    this.homeDir = `${os.homedir()}`
    this.baseDir = `${this.homeDir}/.${config.appName}`
    this.configFile = `${this.baseDir}/${config.appName}.yml`
    this.configsDir = `${this.baseDir}/configs`
  }

  // init
  initialize (path, snapshots, timestamp) {
    if (this.alreadyInitialized()) {
      console.log(ls.info, `${config.appName} is already initialized`)
    } else {
      let absolutePath = fsPath.join(this.homeDir, path)
      this.createConfigsAndStore(absolutePath, snapshots, timestamp)
      console.log(ls.success, 'Successfully initialized')
      console.log(ls.success, 'Backing up to: ', absolutePath)
    }
  }

  createConfigsAndStore (path, snapshots, timestamp = false) {
    let errorHasOccured = false

    mkdirp(this.baseDir, (error) => {
      if (error) { errorHasOccured = true }
    })

    this.writeConfig({
      path: path,
      active: [],
      inactive: [],
      snapshots: snapshots,
      timestamp: timestamp
    })

    mkdirp(this.configsDir, (error) => {
      if (error) { errorHasOccured = true }
    })

    mkdirp(fsPath.resolve(this.homeDir, path), (error) => {
      if (error) { errorHasOccured = true }
    })

    if (errorHasOccured) {
      console.log(ls.error, `Cannot create ${config.appName} folders and files. Check permissions`)
    }
  }

  // add
  add (name, paths) {
    if (!this.alreadyInitialized()) {
      console.log(ls.info, `Please run: ${config.appName} init`)
      return
    }

    let configuration = this.readConfig()

    // if not present in active/inactive then add
    if (
      !configuration.active.filter((i) => i === name).length &&
      !configuration.inactive.filter((i) => i === name).length
    ) {
      configuration.active.push(name)
      this.writeConfig(configuration)
      this.writeConfigs(`${this.configsDir}/${name}.yml`, {
        name: name,
        paths: paths.map((path) => fsPath.join(this.homeDir, path))
      })
    } else {
      console.log(ls.info, `${name} is already present. Either remove existing, or choose a new name`)
    }
  }

  // remove
  remove (name) {
    if (!this.alreadyInitialized()) {
      console.log(ls.info, `Please run: ${config.appName} init`)
      return
    }

    let configuration = this.readConfig()

    let preLength = configuration.active.length + configuration.inactive.length

    configuration.active = configuration.active.filter((i) => i !== name)
    configuration.inactive = configuration.inactive.filter((i) => i !== name)

    let postLength = configuration.active.length + configuration.inactive.length

    if (preLength === postLength) {
      console.log(ls.info, `${name} does not appear to be present`)
    } else {
      this.writeConfig(configuration)
    }
  }

  // hold
  hold (name) {
    if (!this.alreadyInitialized()) {
      console.log(ls.info, `Please run: ${config.appName} init`)
      return
    }

    let configuration = this.readConfig()

    if (configuration.active.includes(name)) {
      configuration.active = configuration.active.filter((i) => i !== name)
      configuration.inactive.push(name)
      this.writeConfig(configuration)
      console.log(ls.success, `${name} is now held`)
    } else if (configuration.inactive.includes(name)) {
      console.log(ls.info, `${name} is already held`)
    } else {
      console.log(ls.info, `${name} does not appear to be present`)
    }
  }

  // unhold
  unhold (name) {
    if (!this.alreadyInitialized()) {
      console.log(ls.info, `Please run: ${config.appName} init`)
      return
    }

    let configuration = this.readConfig()

    if (configuration.inactive.includes(name)) {
      configuration.inactive = configuration.active.filter((i) => i !== name)
      configuration.active.push(name)
      this.writeConfig(configuration)
      console.log(ls.success, `${name} is now unheld`)
    } else if (configuration.active.includes(name)) {
      console.log(ls.info, `${name} is already unheld`)
    } else {
      console.log(ls.info, `${name} does not appear to be present`)
    }
  }

  // list
  list (verbose = false) {
    if (!this.alreadyInitialized()) {
      console.log(ls.info, `Please run: ${config.appName} init`)
      return
    }

    let configuration = this.readConfig()

    if (configuration.active.length) {
      console.log(ls.success, 'Active')

      configuration.active.forEach((entry) => {
        if (verbose) {
          let thisConfig = this.readConfigs(entry)

          thisConfig.paths.forEach((path) => {
            console.log(entry + ' -> ' + path)
          })
        } else {
          console.log(entry)
        }
      })
    } else {
      console.log(ls.success, 'Active (empty)')
    }

    if (configuration.inactive.length) {
      console.log(ls.error, 'Inactive')

      configuration.inactive.forEach((entry) => {
        if (verbose) {
          let thisConfig = this.readConfigs(entry)

          thisConfig.paths.forEach((path) => {
            console.log(entry + ' -> ' + path)
          })
        } else {
          console.log(entry)
        }
      })
    } else {
      console.log(ls.error, 'Inactive (empty)')
    }
  }

  // backup
  backup () {
    if (!this.alreadyInitialized()) {
      console.log(ls.info, `Please run: ${config.appName} init`)
      return
    }

    let configuration = this.readConfig()
    let activeEntries = configuration.active

    if (activeEntries.length) {
      console.log(ls.info, `Backing up ${activeEntries.join(', ')}`)
    }

    let paths = []
    activeEntries.forEach((entry) => {
      let thisConfig = this.readConfigs(entry)

      thisConfig.paths.forEach((path) => {
        paths.push(path)
      })
    })

    paths.forEach((path) => {
      this.copy(path, fsPath.join(configuration.path, configuration.snapshots ? moment().format(configuration.timestamp) : ''))
    })

    if (activeEntries.length) {
      console.log(ls.success, `Backup complete. ${activeEntries.length} entries processed`)
    } else {
      console.log(ls.info, 'Nothing to backup')
    }
  }

  copy (source, destination) {
    try {
      fse.copySync(source, fsPath.join(destination, source), {
        overwrite: true,
        preserveTimestamps: true
      })
    } catch (error) {
      console.log(ls.error, `Error copying from ${source} to ${destination}`)
    }
  }

  readConfig () {
    try {
      return yaml.safeLoad(fs.readFileSync(this.configFile, 'utf8'))
    } catch (error) {
      console.log(ls.error, `Cannot read from ${config.appName} configuration`)
    }
  }

  writeConfig (configuration) {
    try {
      // sort active/inactive
      configuration.active = this.uniqueSortArray(configuration.active)
      configuration.inactive = this.uniqueSortArray(configuration.inactive)
      fs.writeFileSync(this.configFile, yaml.dump(configuration))
    } catch (error) {
      console.log(ls.error, `Cannot write to ${config.appName} configuration`)
    }
  }

  readConfigs (name) {
    try {
      return yaml.safeLoad(fs.readFileSync(`${this.configsDir}/${name}.yml`, 'utf8'))
    } catch (error) {
      console.log(ls.error, `Cannot read from ${name} configuration`)
    }
  }

  writeConfigs (file, configuration) {
    try {
      // sort paths
      configuration.paths = this.uniqueSortArray(configuration.paths)
      fs.writeFileSync(file, yaml.dump(configuration))
    } catch (error) {
      console.log(ls.error, `Cannot write to ${configuration.name} configuration`)
    }
  }

  // helpers
  alreadyInitialized () {
    try {
      return fs.statSync(this.baseDir).isDirectory()
    } catch (error) {
      return !error.code === 'ENOENT'
    }
  }

  uniqueSortArray (dataArray) {
    return dataArray.filter((item, index, dataArray) => dataArray.indexOf(item) === index).sort()
  }

  flattenArrays (arrayOfArrays) {
    return arrayOfArrays.reduce((a, b) => {
      return a.concat(Array.isArray(b) ? this.flattenArrays(b) : b, [])
    }, [])
  }
}

export let store = new Store()
