import React from "react";
import Topheading from "./Topheading";
import useFetch from "../../customHooks/useFetch";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
const mealtypes_url = "http://localhost:3000/api//get_meal_type_list";


const MealItems = () => {

  const {user} = useContext(UserContext)
  const { items, isLoading, isError } = useFetch(mealtypes_url);
  // I am using the custom Hook which is there in useFetch.jsx file

  const variants = {
    initial: {
      x: 2000,
      opacity: 0.4,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        when: "beforeChildren",
      },
    },
  };

  const itemVarinats = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        staggerChildren: 0.25,
      },
    },
  };

  if (isLoading) {
    return (
      <>
        <h1 style={{color:"white"}}>Loading data</h1>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h1 style={{color:"white"}}>Error</h1>
      </>
    );
  }

  return (
    <div className="meal_types">
      <main className="mt-1">
      { user?<h1>!{user.name}</h1> : <h2>Hello world</h2> }
        <Topheading />
        <motion.div
          className="card-section"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={itemVarinats}
            initial="initial"
            animate="animate"
            className="mealItems-2"

          >
            {items.result_mealType_list.map((item) => {
              const { _id, name, content, image, meal_type } = item;
              return (
                <motion.div className="cards" variants={itemVarinats} key={_id}>
                  <div className="img">
                    <img src={`/images/${image}`} alt="image" />
                  </div>
                  <div className="texter">
                    <h1 className="text-h1">{name}</h1>
                    <p className="text-1-span">{content}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default MealItems;
