import * as React from 'react'
import { useSelector } from 'react-redux'
import { SelectionState } from 'src/store'
import { State } from 'src/type/state'

export const useSelected = () => {
  const { selection = {} as SelectionState } = useSelector(
    (state: State) => state
  )
  return selection.find((v: SelectionState) => v.selected)
}
