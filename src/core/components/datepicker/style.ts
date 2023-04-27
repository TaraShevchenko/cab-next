import styled, { css } from 'styled-components'

import DatePikerArrowToDarkTheme from '@/core/assets/icons/datepicker-arrow-dark-theme.svg'
import DatePikerArrowToLightTheme from '@/core/assets/icons/datepicker-arrow-light-theme.svg'

export const DatePikerWrapper = styled.div(
   () => css`
      position: relative;
      display: flex;
      align-items: center;
      gap: 20px;
   `
)

export const DatePikerInput = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      position: relative;

      input {
         color: ${colorTheme.colors.primaryText};
         padding: 20px 40px 20px 50px;
         width: 250px;

         &::placeholder {
            color: ${colorTheme.colors.primaryText};
         }

         ${down(breakpoints.sm)} {
            width: 100%;
            font-size: 13px;
            padding: 20px 25px 20px 50px;
         }
      }
   `
)
export const DatePikerInputArrow = styled.div(
   ({ theme: { down, breakpoints, colorTheme } }) => css`
      top: 50%;
      right: 18px;
      position: absolute;
      color: ${colorTheme.colors.primaryText};
      transform: translateY(-50%) rotate(180deg);
      transition: all 0.2s ease-in-out;

      ${down(breakpoints.sm)} {
         right: 10px;
      }
   `
)

export const DatePikerClearButton = styled.div<{ isActive: boolean }>(
   ({ isActive }) => css`
      opacity: ${isActive ? 1 : 0};
      pointer-events: ${isActive ? 'unset' : 'none'};
      transition: all 0.2s ease-in-out;

      button {
         height: 60px;
         min-width: 127px;
         border-radius: 15px;
      }
   `
)

export const DatePikerDropdown = styled.div<{ isActive: boolean }>(
   ({ theme: { down, breakpoints, fonts, colorTheme, colors }, isActive }) => css`
      position: absolute;
      top: calc(100% + 15px);
      left: 0;

      opacity: ${isActive ? 1 : 0};
      pointer-events: ${isActive ? 'unset' : 'none'};

      .react-datepicker {
         border-radius: 8px;
         background: ${colorTheme.datePicker.background};
         border: 1px solid ${colorTheme.colors.background};
         box-shadow: 0 24px 24px -10px ${colorTheme.datePicker.boxShadow};
         width: 250px;
         margin: 0 auto;

         &:after {
            content: '';
            width: 16px;
            height: 16px;
            position: absolute;
            background: ${colorTheme.header.dropdownBackground};
            right: 14px;
            top: -7px;
            border-top-left-radius: 2px;
            transform: rotate(45deg);
            z-index: 2;

            ${down(breakpoints.sm)} {
               right: 50%;
               transform: translateX(50%) rotate(45deg);
            }
         }

         &:before {
            content: '';
            width: 18px;
            height: 18px;
            position: absolute;
            background: ${colorTheme.header.dropdownBorder};
            right: 13px;
            top: -8px;
            border-top-left-radius: 2px;
            transform: rotate(45deg);
            z-index: -1;

            ${down(breakpoints.sm)} {
               right: 50%;
               transform: translateX(50%) rotate(45deg);
            }
         }
      }

      .react-datepicker__header {
         padding: 0;
         background: ${colorTheme.datePicker.background};
         border-bottom: none;
      }

      .react-datepicker__current-month {
         display: flex;
         align-items: center;
         justify-content: center;
         height: 28px;
         color: ${colorTheme.colors.primaryText};
         font-family: ${fonts.primary};
         font-weight: 500;
      }

      .react-datepicker__day-name {
         margin: 0;
         padding: 0;
         font-family: ${fonts.secondary};
         font-weight: 600;
         font-size: 14px;
         line-height: 19px;
         width: 32px;
         height: 32px;
         display: inline-flex;
         align-items: center;
         justify-content: center;
         color: ${colorTheme.colors.primaryText};
      }

      .react-datepicker__month-container {
         padding: 15px 10px 10px;
      }

      .react-datepicker__month {
         margin: 0;
      }

      .react-datepicker__day-names {
         margin: 0;
      }

      .react-datepicker__navigation-icon {
         background: ${`url(${colorTheme.name === 'light' ? DatePikerArrowToLightTheme : DatePikerArrowToDarkTheme})`}
            no-repeat;
         width: 15px;
         height: 15px;
         top: 10px;

         &:before {
            display: none;
         }

         &.react-datepicker__navigation-icon--next {
            transform: rotate(180deg);
         }
      }

      .react-datepicker__day {
         padding: 0;
         margin: 0;
         font-family: ${fonts.secondary};
         font-weight: 600;
         font-size: 14px;
         line-height: 19px;
         width: 32px;
         height: 32px;
         display: inline-flex;
         align-items: center;
         justify-content: center;
         border-radius: 0;
         transition: all 0.2s ease-in-out;
         color: ${colorTheme.colors.primaryText};

         &:hover {
            color: #19242d;
            border-radius: 0;
            background: ${colors.accent};
            transition: all 0.2s ease-in-out;
         }

         &.react-datepicker__day--keyboard-selected,
         &.react-datepicker__day--selected {
            color: ${colorTheme.colors.primaryText};
            background: ${colorTheme.datePicker.background};
         }

         &.react-datepicker__day--today {
            color: ${colorTheme.datePicker.activeColor};
            background: ${colors.accent};
         }

         &.react-datepicker__day--in-range {
            color: ${colorTheme.colors.primaryText};
            background: ${colorTheme.colors.background};
         }

         &.react-datepicker__day--outside-month {
            color: ${colorTheme.datePicker.outsideMonthColor};
         }

         &.react-datepicker__day--in-selecting-range {
            color: ${colorTheme.colors.primaryText};
            background: ${colorTheme.colors.background};
         }

         &.react-datepicker__day--range-start.react-datepicker__day--in-range {
            color: ${colorTheme.datePicker.activeColor};
            background: ${colors.accent};
            border-radius: 8px 0 0 8px;
         }

         &.react-datepicker__day--range-end.react-datepicker__day--in-range {
            color: ${colorTheme.datePicker.activeColor};
            background: ${colors.accent};
            border-radius: 0 8px 8px 0;
         }

         &.react-datepicker__day--range-start.react-datepicker__day--range-end.react-datepicker__day--in-range {
            color: ${colorTheme.datePicker.activeColor};
            background: ${colors.accent};
            border-radius: 8px;
         }

         &.react-datepicker__day--today.react-datepicker__day--in-selecting-range {
            color: ${colorTheme.colors.primaryText};
            background: ${colorTheme.colors.background};
         }

         &.react-datepicker__day--selected {
            color: ${colorTheme.colors.primaryText};
            background: ${colorTheme.colors.background};
         }
      }
   `
)
