module.exports = class Order {
    #total;
    #items;
    #user;

    constructor(items, user) {
        // Verifica se cada quantidade está disponível em estoque
        items.forEach(({ product, quantity }) => {
            if (quantity > product.inStock) {
                throw new Error('Quantidade indisponível no estoque!');
            }
        });
        this.#items = items;
        this.#user = user;

        // Calcula o total do pedido
        this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0);
    }

    // Retorna os dados do pedido
    get data() {
        return {
            items: this.#items,
            user: this.#user,
            total: this.#total
        };
    }
};
