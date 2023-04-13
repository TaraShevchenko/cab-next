import React from 'react';

import ChartWithTimestampButtons
   from '@/modules/currencies/components/chart/chart-with-timestams-buttons/ChartWithTimestampButtons';

import AvailableBalance from './available-balance/AvailableBalance';
import Referral from './referral/Referral';
import * as S from './style';

const Dashboard = () => {
   return (
      <S.DashboardWrapper>
         <S.CardWrapper>
            <AvailableBalance/>
            <S.Card isChart>
               <S.CardTitle>FST chart (to USDT)</S.CardTitle>
               <ChartWithTimestampButtons/>
            </S.Card>
         </S.CardWrapper>
         <Referral/>
      </S.DashboardWrapper>
   );
};

export default Dashboard;