export function globalPreload () {
  console.log('PRELOAD')
  return `
const console = getBuiltin('console')
console.log('BOOTSTRAP')
`
}
