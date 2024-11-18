import Flag from './Flag';

const Country = (props) => {

  const country = props.country;

  return (
    <div className="country">
      <div><h2>{country.countryName}</h2></div>
      <div className="label">Population:</div><div>{country.population}</div>
      <div className="label">Independence Day:</div><div>{country.independenceDay}</div>
      <Flag countryId={country.id} />
    </div>
  ) 
}

export default Country;