import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SelectionState } from 'src/store'
import { State } from 'src/type/state'

export const useSelected = () => {
  const { selection = {} as SelectionState } = useSelector(
    (state: State) => state
  )
  return selection.find((v: SelectionState) => v.selected)
}

export const useUrl = () => {
  const { url = '' as string } = useSelected()
  return url
}

export const useFetch = (action: any) => {
  const dispatch = useDispatch()
  const url = useUrl()
  useEffect(() => {
    const f = async () => {
      await dispatch(await action({ url }))
    }
    f()
  }, [])
}
