
import type { MenuItem } from "../types"

type MenuItemProps ={
    item : MenuItem,
    addItem: (item : MenuItem) => void


}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className=" border-2 border-b-emerald-600 hover:bg-lime-500 w-full p-3 flex justify-between"
            onClick={() => addItem(item)}>
        <p>{item.name}</p>
        <p className=" font-black">${item.price}</p>
      
      
    </button>
  )
}
