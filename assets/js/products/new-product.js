const newProduct = {
    name: 'new-product',
    template: `
        <div>
            <input type="button" v-on:click="showForm" class="c-new-product__btn-add" value="Ajouter un produit en stock">
            
            <form class="c-new-product__form hidden">
                <div>
                    <label for="product_title">Titre: </label>
                    <input type="text" id="product_title" v-model="product_title" name="Titre du produit">
                    <label>{{product_title}}</label>
                </div>
                <div>
                    <label for="product_description">Description: </label>
                    <input type="text" id="product_description" v-model="product_description" name="Description du produit">
                    <label>{{product_description}}</label>
                </div>
                <div>
                    <label for="product_type">Type (livre, stylo ...): </label>
                    <input type="text" id="product_type" v-model="product_type" name="Type du produit">
                    <label>{{product_type}}</label>
                </div>
                <div>
                    <label for="product_amount">Amount (nombre en stock): </label>
                    <input type="text" id="product_amount" v-model="product_amount" name="Nombre en stock" value="0">
                    <label>{{product_amount}}</label>
                </div>
                <div>
                    <input type="button" class="c-new-product__btn-validate" v-on:click="validateProduct" value="Valider">
                </div>
            </form>
        </div>
    `,
    data:() => {
        return {
            product_title:'',
            product_type: '',
            product_description: '',
            product_amount: '',
        }
    },
    methods: {
        validateProduct() {
            const formData = new FormData();
            formData.set('title', document.querySelector('#product_title').value);
            formData.set('description', document.querySelector('#product_description').value);
            formData.set('type', document.querySelector('#product_type').value);
            formData.set('amount', document.querySelector('#product_amount').value);

            //this.productLists.push(formData);

            // Dispatch event to parent
            this.$emit('update-product-list', formData);

            this.resetForm();
        },
        resetForm() {
            document.querySelector('#product_title').value = '';
            document.querySelector('#product_description').value  = '';
            document.querySelector('#product_type').value = '';
            document.querySelector('#product_amount').value = 0;


        },
        showForm: () => {
            document.querySelector('.c-new-product__form').classList.remove('hidden');
            document.querySelector('.c-new-product__btn-add').classList.add('hidden');
        }
    },
};

export default newProduct;
