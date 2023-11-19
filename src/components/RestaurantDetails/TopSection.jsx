import React, { useEffect } from "react";
import { useState } from "react";
import BottomSection from "./BottomSection";
import MenuItems from "./MemuItems/MenuItems";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const TopSection = ({ items }) => {
  const {ref, inView} = useInView()

   const animation = useAnimation()

   useEffect(()=>{
       if(inView){
        console.log("inview is", inView)

        animation.start({
          x:0,
          opacity:1,
          transition:{
            type:"spring",
            damping:22,
          }
         })
       }
       if(!inView){
        animation.start({
          x:1000
        })
       }
   },[inView])





  // console.log("top section", items);
  const [translate, setTranslate] = useState(false);
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <motion.div
        className="image-2"
        key={items._id}
        initial={{
          x: 2000,
          opacity: 0.6,
        }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 17 }}
      >
        <div className="img-2">
          <div className="first-img-1">
            <img src={`/images/${items.thumb[index]}`} alt="Image Breakfast" />
          </div>

          <div className="gallery-2">
            {items.thumb.map((img, index) => {
              return (
                <div key={index}>
                  <img
                    src={`/images/${img}`}
                    alt=""
                    onClick={() => setIndex(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <h1>{items.name}</h1>
        <div className="menu-2">
          <button onClick={() => setMenu(!menu)}>Menu</button>
        </div>

        <div className="menu-items-2">
          <MenuItems
            menu={menu}
            setMenu={setMenu}
            resID={items._id}
            resName={items.name}
          />
        </div>
      </motion.div>

      <motion.div className="seconday-menu-item-2" animate={animation} ref={ref}>
        <div className="slider-2">
          <button onClick={() => setTranslate(false)}>Overview</button>
          <button onClick={() => setTranslate(true)}>Contact</button>

          <div className={`moving ${translate ? "translate-1" : ""}`}></div>
        </div>

        <hr />

        <BottomSection items={items} translate={translate} />
      </motion.div>
    </>
  );
};

export default TopSection;
