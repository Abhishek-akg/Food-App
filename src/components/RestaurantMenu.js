import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  //console.log(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);

  //   const json = await data.json();
  //   setResInfo(json.data);
  // };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  //console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {item.card.info.price / 100 ||
              item.card.info.variantsV2.variantGroups[0].variations[0].price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
