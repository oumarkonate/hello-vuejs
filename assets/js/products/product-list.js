const productList = {
    name: 'product-list',
    template: `
         <ul>
            <li v-for="product in productLists" class="c-product-list">
                {{product.name}} : {{product.description}}. Le nombre restant en stock est 
                <span class="c-product-list__number">{{product.amount}}</span>.
                <label class="c-product-list__delete" v-on:click="$emit('delete-product', product.id)">supprimer</label>
            </li>
        </ul>
    `,
    props: ['productLists'],
};

export default productList;
