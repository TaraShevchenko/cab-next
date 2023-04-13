import DatePicker from '@/core/components/datepicker/DatePicker'
import NavLink from '@/core/components/ui/nav-link/NavLink'

import NotificationBonusIcon from '@/modules/user/assets/icons/notification-bonus.svg'
import NotificationDepositIcon from '@/modules/user/assets/icons/notification-deposit.svg'
import NotificationReferralIcon from '@/modules/user/assets/icons/notification-referral.svg'
import NotificationWithdrawalIcon from '@/modules/user/assets/icons/notification-withdrawal.svg'

import * as S from './style'

const NotificationsList = () => {
   return (
      <>
         <S.NotificationsFilters>
            <DatePicker/>
         </S.NotificationsFilters>

         <S.NotificationsListWrapper>
            <S.NotificationsListTitle>
               New
            </S.NotificationsListTitle>

            <S.NotificationsListItem>
               <S.IconWrapper>
                   <NotificationDepositIcon/>
               </S.IconWrapper>
               <div>
                  <S.Date>Today, 10:25</S.Date>
                  <S.Title>1 FST purchased successfully</S.Title>
                  <S.Subtitle>
                     You have successfully purchased
                     <S.Highlighted>
                        1 FST
                     </S.Highlighted>
                     with
                     <S.Highlighted>
                        0.14 ETH.
                     </S.Highlighted>
                     Check your balance in the
                     <NavLink to="">
                        <S.Link>
                           Dashboard
                        </S.Link>
                     </NavLink>
                  </S.Subtitle>
               </div>
            </S.NotificationsListItem>
            <S.NotificationsListItem>
               <S.IconWrapper>
                   <NotificationBonusIcon/>
               </S.IconWrapper>
               <div>
                  <S.Date>Yesterday, 09:47</S.Date>
                  <S.Title>You have received 0.05 FST referral bonus</S.Title>
                  <S.Subtitle>
                     You have received a referral bonus
                     <S.Highlighted>
                        0.05 FST
                     </S.Highlighted>
                     for referral
                     <S.Highlighted>
                        Jakob Weiss.
                     </S.Highlighted>
                     Check all your bonuses on page
                     <NavLink to="">
                        <S.Link>
                           Referrals
                        </S.Link>
                     </NavLink>
                  </S.Subtitle>
               </div>
            </S.NotificationsListItem>
            <S.NotificationsListItem>
               <S.IconWrapper>
                   <NotificationReferralIcon/>
               </S.IconWrapper>
               <div>
                  <S.Date>21.03.2023, 16:41</S.Date>
                  <S.Title>New referral</S.Title>
                  <S.Subtitle>
                     You have new referral
                     <S.Highlighted>
                        Jakob Weiss.
                     </S.Highlighted>
                     Check all your referrals on page
                     <NavLink to="">
                        <S.Link>
                           Referrals
                        </S.Link>
                     </NavLink>
                  </S.Subtitle>
               </div>
            </S.NotificationsListItem>

         </S.NotificationsListWrapper>


         <S.NotificationsListWrapper>
            <S.NotificationsListTitle>
               Old
            </S.NotificationsListTitle>

            <S.NotificationsListItem>
               <S.IconWrapper>
                   <NotificationDepositIcon/>
               </S.IconWrapper>
               <div>
                  <S.Date>17.03.2023, 09:36</S.Date>
                  <S.Title>2 FST purchased successfully</S.Title>
                  <S.Subtitle>
                     You have successfully purchased
                     <S.Highlighted>2 FST</S.Highlighted>
                     with
                     <S.Highlighted>0.28 ETH.</S.Highlighted>
                     Check your balance in the
                     <NavLink to="">
                        <S.Link>
                           Dashboard
                        </S.Link>
                     </NavLink>
                  </S.Subtitle>
               </div>
            </S.NotificationsListItem>
            <S.NotificationsListItem>
               <S.IconWrapper>
                   <NotificationWithdrawalIcon/>
               </S.IconWrapper>
               <div>
                  <S.Date>13.03.2023, 18:23</S.Date>
                  <S.Title>-100 FST withdrawal failed</S.Title>
                  <S.Subtitle>
                     Your
                     <S.Highlighted>
                        100 FST
                     </S.Highlighted>
                     withdrawal has been canceled due to insufficient funds. Check your balance on the
                     <NavLink to="">
                        <S.Link>
                           Dashboard
                        </S.Link>
                     </NavLink>
                  </S.Subtitle>
               </div>
            </S.NotificationsListItem>
         </S.NotificationsListWrapper>
      </>
   )
}

export default NotificationsList