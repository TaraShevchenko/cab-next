import styled, { css } from 'styled-components'

import { flex } from '@/core/styles/utils'

export const ChartButtonGroup = styled.div(
   () => css`
      ${flex.alignItemsCenter};
      justify-content: space-between;
      margin-top: 20px;

      button {
         ${flex.center};
         padding: 0;
         width: 60px;
         height: 30px;
      }
   `
)