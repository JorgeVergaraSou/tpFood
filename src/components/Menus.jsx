function Menus({menus}) {

    return (
    <>
        
        { //iteracion
            menus.map((menu, index) => (
            <div key={index}>
                <div> 
                <img src={menu.foto}/> 
                <div>
                <h5>Menu: {menu.menu}</h5>
                <hr/>
                <p>Precio : {menu.precio}</p>
                </div>
                </div>
            </div>
            )  ) 
        }
        </>
    )
}

export default Menus