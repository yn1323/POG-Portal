import { useEffect, useRef } from 'react'
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

export const useFetch = async ({
  action = null as any,
  param = {},
  watch = [] as any,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    const f = async () => {
      await dispatch(await action({ ...param }))
    }
    f()
  }, watch)
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
