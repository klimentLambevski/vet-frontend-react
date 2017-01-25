export function createActionMap(actions, prefix) {
  _.mapValues(actions, (value, key) => (prefix ? prefix + '/' : '') + key)
}
