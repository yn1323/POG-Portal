import { SelectionState } from 'src/store'

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

export const selectedPage = (selection: SelectionState[]) =>
  selection.find((v: SelectionState) => v.selected)
