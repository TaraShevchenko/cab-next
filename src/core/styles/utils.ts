import styled, { css } from 'styled-components'

const center = css`
   display: flex;
   align-items: center;
   justify-content: center;
`

const column = css`
   display: flex;
   flex-direction: column;
`

const alignItemsCenter = css`
   display: flex;
   align-items: center;
`

const justifyContentCenter = css`
   display: flex;
   justify-content: center;
`

const justifyContentBetween = css`
   display: flex;
   justify-content: space-between;
`

export const flex = {
   center,
   column,
   alignItemsCenter,
   justifyContentCenter,
   justifyContentBetween,
}

export const Center = styled.div`
   ${center};
   height: 100%;
`
