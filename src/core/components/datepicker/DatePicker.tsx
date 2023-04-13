import React, { useRef, useState } from 'react'
import ReactDatePicker from 'react-datepicker'

import Button from '@/core/components/ui/button/Button'
import Input from '@/core/components/ui/input/Input'

import useClickOutside from '@/core/hooks/useClickOutside'

import { convertDateToDDMMYY } from '@/core/utils/convertDateToDDMMYY'

import ArrowIcon from '@/core/assets/icons/arrow.svg'
import CalendarIcon from '@/core/assets/icons/calendar.svg'
import CloseIcon from '@/core/assets/icons/close.svg'

import * as S from './style'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker = () => {
   const [ startDate, setStartDate ] = useState<Date | null>(null)
   const [ endDate, setEndDate ] = useState<Date | null>(null)
   const onChange = (dates: [ (Date | null), (Date | null) ]) => {
      if (dates) {
         const [ start, end ] = dates
         setStartDate(start)
         setEndDate(end)
         if (start && end) {
            setIsOpenDropdown(false)
         }
      }
   }

   const [ isOpenDropdown, setIsOpenDropdown ] = useState(false)
   const handleToggleDropdown = () => setIsOpenDropdown(true)
   const handleCloseDropdown = () => setIsOpenDropdown(false)
   const wrapperRef = useRef(null)
   useClickOutside(wrapperRef, handleCloseDropdown)

   const onClear = () => {
      setStartDate(null)
      setEndDate(null)
      setIsOpenDropdown(false)
   }

   return (
      <S.DatePikerWrapper>
         <span ref={wrapperRef}>
            <S.DatePikerInput>
               <Input
                  readOnly
                  label="Date"
                  placeholder="Choose date"
                  icon={() => <CalendarIcon/>}
                  onFocus={handleToggleDropdown}
                  value={startDate && endDate ? `${convertDateToDDMMYY(startDate)} - ${convertDateToDDMMYY(endDate)}` : ''}
               />
               <S.DatePikerInputArrow>
                   <ArrowIcon/>
               </S.DatePikerInputArrow>
            </S.DatePikerInput>

            <S.DatePikerDropdown isActive={isOpenDropdown}>
               <ReactDatePicker
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
               />
            </S.DatePikerDropdown>
         </span>

         <S.DatePikerClearButton isActive={!!(startDate && endDate)}>
            <Button onClick={onClear}>
               <CloseIcon/> Clear
            </Button>
         </S.DatePikerClearButton>
      </S.DatePikerWrapper>
   )
}

export default DatePicker