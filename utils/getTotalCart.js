export const getTotalCart = (cart) => {
    let total = 0

    cart.forEach(item => total += item.precio)

    return total;
}