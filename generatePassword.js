function generatePassword (options) {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const number = '1234567890'
  const symbol = '~!@#$%^&*()_-+={}?[]/<>;:'
  const exclude = options.excludeCharactersInput

  let collection = [] // 根據選擇的字符集 （大小寫、符號）
  let password = '' // 存放生成的密碼

  // 添加需要的字符到collection
  if (options.uppercaseCheckbox === 'on') {
    collection = collection.concat(uppercase.split(''))
  }

  if (options.lowercaseCheckbox === 'on') {
    collection = collection.concat(lowercase.split(''))
  }

  if (options.numberCheckbox === 'on') {
    collection = collection.concat(number.split(''))
  }

  if (options.symbolCheckbox === 'on') {
    collection = collection.concat(symbol.split(''))
  }

  const passwordLength = parseInt(options.passwordLength)
  if (isNaN(passwordLength) || passwordLength < 4 || passwordLength > 16) {
    return 'Please set password length correctly.'
  }

  if (
    options.uppercaseCheckbox !== 'on' && options.lowercaseCheckbox !== 'on' && options.symbolCheckbox !== 'on' && options.numberCheckbox !== 'on') {
    return password = 'Please choose at least one condition.'
  }

  if (exclude) {
    collection = collection.filter(
      char => !exclude.includes(char)
    )
  }

  if (collection.length === 0) {
    return password = 'There is no valid conditions.'
  }

  for (let i = 0; i < options.passwordLength; i++) {
    const collectionIndex = Math.floor(Math.random() * collection.length)
    password += collection[collectionIndex]
  }
  return password
}

module.exports = generatePassword
