import { GetServerSideProps } from "next";
import nextCookies from "next-cookies";
import React from "react";

import { RootState, wrapper } from "@/core/redux/store";
import { updateUserData } from "@/modules/user/redux/slice";
import { IUserData } from "@/modules/user/redux/types";

import Layout from "@/core/components/layout/Layout";

import { baseFetchToNext } from "@/core/utils/baseFetchToNext";

import Dashboard from "../../components/dashboard/Dashboard";
import { API_ROUTES } from "@/config";

const DashboardPage = () => {
   return (
      <Layout>
         <Dashboard />
      </Layout>
   );
};

const userDataMock: IUserData = {
   id: "1",
   user_image: "",
   first_name: "John",
   last_name: "Doe",
   email: "johndoe@example.com",
   password: "password123",
   uauth: "abcdefg123",
   balance: 1000,
   personal_volume: 50,
   personal_volume_farming_date: "2023-04-01",
   personal_volume_farming_day_of_month: 1,
   reference_personal_volume: 10,
   calculated_volume: 60,
   farm: 20,
   percent: 5,
   v_bonus: 100,
   m_bonus: 50,
   created_date: "2023-04-01T12:00:00Z",
   updated_date: "2023-04-01T12:00:00Z",
   deleted_date: "",
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
   (store: RootState) =>
      async ({ req }) => {
         const cookies = nextCookies({ req });

         const user = await baseFetchToNext(API_ROUTES.USER(cookies?.user_id || ""), req, {});
         store.dispatch(updateUserData(user || userDataMock));

         return {
            props: {},
         };
      }
);

export default DashboardPage;
