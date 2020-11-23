import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ApiState, SelectionState } from 'src/store'
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

export const useUrlLoading = () => {
  const { api = {} as ApiState } = useSelector((state: State) => state)
  if (!api.isLoading || !api.race.url) return ''
  return `${api.raceDetail.length} / ${api.race.url.length}`
}

export const usePrevious = (value: any) => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
