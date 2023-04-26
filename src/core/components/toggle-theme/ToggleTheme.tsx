/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useState } from 'react'
import { useTheme } from 'styled-components'

import { setTheme } from '@/core/redux/slice'
import { useAppDispatch } from '@/core/redux/store'

import { EColorTheme } from '@/core/styles/theme'

import useLoading from '@/core/hooks/useLoading'

import Day from './assets/day-icon.svg'
import Night from './assets/night-icon.svg'
import { Input, Label, Switch } from './styles'

const ToggleTheme = () => {
   const dispatch = useAppDispatch()
   const handleLoadingBefore = useLoading()
   const { colorTheme } = useTheme() as any

   const [ checked, setChecked ] = useState(colorTheme.name === EColorTheme.light)

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.checked)
      handleLoadingBefore(() => {
            dispatch(setTheme(
                  colorTheme.name === EColorTheme.light
                     ? EColorTheme.dark
                     : EColorTheme.light,
               ),
            )
         }
      )
   }

   return (
      <Label htmlFor="theme">
         <Input id="theme" checked={checked} type="checkbox" onChange={handleChange}/>
         <Switch>
            <Night/>
            <Day/>
         </Switch>
      </Label>
   )
}

export default ToggleTheme
