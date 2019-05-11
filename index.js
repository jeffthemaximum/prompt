function prompt (question) {
  const stdin = process.stdin
  const stdout = process.stdout

  stdin.resume()
  stdout.write(question)

   return new Promise(function (resolve, reject) {
    stdin.once('data', function (data) {
      resolve(data.toString().trim())
    })
  })
}

module.exports = prompt
