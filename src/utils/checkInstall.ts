import fs from "fs"

const dataBasePath = '../data/data.db'

export const checkInstall = () => {
    try {
        return fs.existsSync(dataBasePath)
    } catch (e) {
        return false
    }
}