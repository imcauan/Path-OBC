const path = require('node:path')

// Usando path.join() para criar caminhos

const dir = "src"
const file = "app.js"
const fullPath = path.join(dir, file)
console.log(fullPath)

// Usando path.resolve() para obter um caminho absoluto

const relativePath = "../arquivos/relatorio.pdf"
const absolutePath = path.resolve(relativePath)
console.log(absolutePath)

// Usando path.basename() para obter o nome do arquivo

const fileName = path.basename(relativePath)
console.log(fileName)

// Usando o path.extname para obter o nome da extensão

const ext = path.extname(absolutePath)
console.log(ext)