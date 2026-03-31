import { createContext, useEffect, useState } from "react";

export let Context = createContext(null);

function ContextProvider({ children }) {
  const [items, setItems] = useState(["", "", "", "", "", "", "", "", ""]);
  const [toggle, setToggle] = useState(true);
  const [isactive, setisactive] = useState(true);
  const [full,setfull]=useState(false);

  function handleClick(index) {
    if (items[index] === "" && isactive) {
      let value = toggle ? "X" : "O";

      let newItems = [...items];
      newItems[index] = value;

      setItems(newItems);
      setToggle(!toggle);
    }
  }
  let [winner, setwinner] = useState("");
  function checkpairs() {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      let [a, b, c] = pattern;

      if (items[a] !== "" && items[a] === items[b] && items[b] === items[c]) {
        setisactive(false);
        setwinner(items[a]);
        return;
      }
    }
  }

  useEffect(() => {
    checkpairs();
  }, [items]);
  useEffect(()=>{
   let val=items.every((item)=>{
    return item==="X"||item==="O";
   })
   setfull(val);
   
  },[items]
  )

  function newgame() {
    setItems(["", "", "", "", "", "", "", "", ""]);
    setToggle(true);
    setwinner("");
    setisactive(true);
  }

  return (
    <Context.Provider
      value={{
        items,
        setItems,
        toggle,
        setToggle,
        handleClick,
        isactive,
        newgame,
        winner,
        full,
        
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
