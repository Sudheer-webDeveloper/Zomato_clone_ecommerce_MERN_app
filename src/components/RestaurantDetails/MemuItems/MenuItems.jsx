import React, {useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import useFetch from "../../../customHooks/useFetch";
import MenuItemsList from "./MenuItemsList";
//
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";


const menuItemsByResID = `http://localhost:3000/api//get_menu_items/62f71de27824c682ccce799f`; // Based on the restaurant id only na we have the menu items

const MenuItems = ({ menu, resID, resName, setMenu }, {}) => {
  const { user } = useContext(UserContext);
  //console.log("user", user.id); // This user id is very important while doing the payment , based on id only we can tell , from which person did the payament was happen

  const [amount, setAmount] = useState(0);
  let total = 0;

  const variants = {
    initial: {
      x: -10000,
      opacity: 0.4,
    },
    animate: {
      x: menu ? 0 : -10000,
      opacity: menu ? 1 : 0.4,
      transition: {
        type: "spring",
        damping: menu ? 18 : 40,
      },
    },
  };

  const {
    items: menuItems,
    isLoading,
    isError,
  } = useFetch(`http://localhost:3000/api/get_menu_items/${resID}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error in Fetching data</h1>;
  }

  function increDecre(id) {
    return {
      incrementing: function () {
        return menuItems.menuItems_ById.find((item) => {
          if (item._id === id) {
            item.qty = item.qty + 1;
            setAmount(amount + 1);
          }
        });
      },
      decrementing: function () {
        return menuItems.menuItems_ById.find((item) => {
          if (item._id === id) {
            if (item.qty !== 0) {
              console.log("bolooo");
              item.qty = item.qty - 1;
              setAmount(amount - 1);
            }
          }
        });
      },
    };
  }

  function settingTotal() {
    return menuItems.menuItems_ById.forEach((item) => {
      total += item.qty * item.price;
    });
  }
  settingTotal();




  // CartItems
  function cartItem() {
    const Items = menuItems.menuItems_ById.filter((item) => {
      if (item.qty > 0) {
        console.log("item", item, "qty", item.qty);
        return item;
      }
    });

    return Items;
  }

  let cartItems = cartItem();

  // checkeout function 
  function handleCheckout() {
    console.log("cartItems", cartItems);


    if(cartItems.length>0){  
      // axios takes parameters first parameter route Path, second payload , here we are payload as object 
      axios.post("/payment/create-checkout-session",{
        cartItems,
        userId:user.id
      }).then((res)=>{
        if(res.data.url){ // if in our response the url exists then take the user to the stripe payment dashboard for payment
          console.log(res.data, "res.data") // This will give the object with {} with url in it
          window.location.href = res.data.url;
        }
      }).catch((error)=>console.log("Error from payment fronted",error))
    }
    else{
      toast.error("Select items for payment")
    }
    
    
  }

  
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="menu-items-3"
    >
      <div className="menu_card-3">
        <div className="closing-3">
          <h3>Menu of {resName}</h3>
          <button onClick={() => setMenu(!menu)}>
            <RxCross1 />
          </button>
        </div>

        <hr />
        {menuItems.menuItems_ById.map((item) => {
          return (
            <MenuItemsList
              menuItems={item}
              key={item._id}
              increDecre={increDecre}
            />
          );
        })}
        <div className="total-3">
          <h6>SubTotal : {total} </h6>
          <button
            onClick={handleCheckout}
          >
            Payment
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItems;
