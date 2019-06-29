export const immutablePush = value => array => {
  const clone = [...array]

  clone.push(value)
  return clone
}

export class immutableContainer {
  constructor(content, value) {
    this.content = content
    this.value = value
  }

  adjustValue(value) {
    return new immutableContainer(this.content, value)
  }
}