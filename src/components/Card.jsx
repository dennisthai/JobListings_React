/* eslint-disable react/prop-types */
/*children is used for whatever you wrap, ex: if u have a h1 tag the card will wrap around the h1 tag */
const Card = ({children, bg = "bg-gray-100"}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>
  )
}

export default Card