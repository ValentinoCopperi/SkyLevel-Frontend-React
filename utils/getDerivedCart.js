export const getDerivedCart = (cart) => {
    const derivedCart = []

    cart.forEach((item) => {
        const existingItem = derivedCart.find((dItem) => dItem.id_producto == item.id_producto)
        
        if(existingItem){
            existingItem.cantidad++;
            existingItem.totalPrice += item.precio
        }else{
            derivedCart.push({
                id_producto:item.id_producto,
                producto:item.producto,
                precio:item.precio,
                img : item.imagen_1,
                cantidad : 1,
                totalPrice : item.precio
            })
        }
    })

    return derivedCart;
}
