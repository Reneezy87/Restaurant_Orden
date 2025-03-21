import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/OrderTotal"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()


  return (
    <>
      <header className=" bg-amber-700 py-5">
        <h1 className=" text-center text-4xl text-white"> Orden</h1>

      </header>

      <main className=" max-w-7xl mx-auto mt-10 grid md:grid-cols-2">
        <div className="p-5">
           <h2 className="text-4xl text-blue-700 font-black">Menú</h2>
              <div className="mt-7 space-y-3">
                {menuItems.map(item => (
                  <MenuItem 
                    key = {item.id}
                    item = {item}
                    addItem={addItem}
                  
                  />

                ))}
            </div>
        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
             <OrderContents
            order={order}
            removeItem = {removeItem}
          />

          <TipPercentageForm
            setTip = {setTip} 
            tip= {tip}         
          />


          <OrderTotal
            order = {order}
            tip = {tip}
            placeOrder = {placeOrder}
          
          />
            
            </>
          ) : (

            <p className=" text-center"> La orden esta Vacía</p>
          )}

         
         
          
        </div>
       
      

      </main>
    </>
  )
}

export default App
