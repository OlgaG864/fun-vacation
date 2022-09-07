import Title from "../Title/Title";

export interface Offer {
  id: number;
  date: string;
  location: string;
  price: number;
}

function Offers() {
  const data: Array<Offer> = [
    {
      id: 1,
      date: "22/10/2022",
      location: "A day in Disneyland, Florida",
      price: 350,
    },
    {
      id: 2,
      date: "01/10/2022",
      location: "New York, USA",
      price: 800,
    },
    {
      id: 3,
      date: "05/10/2022",
      location: "The great park, Somewhere",
      price: 995,
    },
  ];

  return (
    <>
      <Title mainTxt="Our Offers" subTxt="vacation packages for this month" />

      <table className="table table-hover">
        <thead>
          <tr>
            <th className="w-25">Date</th>
            <th className="w-25">Location</th>
            <th className="w-50">Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((offer) => (
            <tr key={offer.id} className="bg-light">
              <td>{offer.date}</td>
              <td>{offer.location}</td>
              <td>{offer.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Offers;
