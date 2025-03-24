//нотатки на уроці
let message = 1
try {
    message += 1
    throw new Error('error')
} catch (e) {
    console.log(e.message)
    message += 1
}
finally {
    console.log(message)
}