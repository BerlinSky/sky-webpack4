const push = value => array => {
  const clone = [...array]

  clone.push(value)
  return clone
}

export default push
