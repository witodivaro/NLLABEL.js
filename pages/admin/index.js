import React from "react";

import Slogans from "../../components/Admin/Slogans/Slogans";
import { authenticate } from "../../utils/auth";
import { getServices } from "../api/services";
import { getSlogans } from "../api/slogans";
import { getTeam } from "../api/team";

const Admin = ({ slogans, team, services }) => {
  return (
    <div>
      <Slogans slogans={slogans} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const isAuthenticated = await authenticate(ctx.req, { csrf: false });

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const operations = [getSlogans(), getTeam(), getServices()];

  let slogans = [];
  let team = [];
  let services = [];

  try {
    const [slogansRes, teamRes, servicesRes] = await Promise.all(operations);

    if (slogansRes.data) {
      slogans = slogansRes.data.slogans;
    }

    if (teamRes.data) {
      team = teamRes.data.team;
    }

    if (servicesRes.data) {
      services = servicesRes.data.services;
    }
  } catch (e) {}

  return {
    props: {
      slogans,
      team,
      services,
    },
  };
};

export default Admin;