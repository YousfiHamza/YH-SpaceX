import React, { Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import LaunchItem from "./launchItem";
import MissionKey from "./missionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

export default function Launches() {
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h1>Loading ... </h1>;
          if (error) console.log(error.message);

          return (
            <Fragment>
              {data.launches.map((launch) => (
                <>
                  <LaunchItem
                    key={launch.flight_number + launch.mission_name}
                    launch={launch}
                  />
                </>
              ))}
            </Fragment>
          );
        }}
      </Query>
    </>
  );
}
