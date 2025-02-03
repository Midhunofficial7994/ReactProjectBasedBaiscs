import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
    }
  }
`;

const CountryList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Countries</h2>
      <ul>
        {data.countries.map(country => (
          <li key={country.code}>
            {country.emoji} {country.name} ({country.code})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
