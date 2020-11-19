export const deepcopy = (obj: {} | []) => JSON.parse(JSON.stringify(obj))

export const replaceArray = (array: [], targetId: number, sourceId: number) => {
  return array.reduce(
    (resultArray, element, id, originalArray) => [
      ...resultArray,
      id === targetId
        ? originalArray[sourceId]
        : id === sourceId
        ? originalArray[targetId]
        : element,
    ],
    []
  )
}

export const makeTbodyArray = (obj: any) => {
  const keys = Object.keys(obj)
  const ret = keys.reduce((acc: any, cur, i) => {
    const tem = []
    keys.forEach(key => {
      acc[i][key] = cur[i]
    })
    return acc
  }, [])
  return ret
}
