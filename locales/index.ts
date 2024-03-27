const Notifications = {
    En: {
        loadingProducts: "Loading products...",
        getProductError: "Error getting the products :(",
        getProductErrorDescription: "It might be a issue related to AWS api gateway or lambda functions, please contact with the creator of this page.",
        deleteProductError: "Error deleting the product :(",
        deleteProductErrorDescription: "It might be a issue related to AWS api gateway or lambda functions, please contact with the creator of this page.",
        updateProductError: "Error updating the product :(",
        updateProductSuccess: "Product updated successfully :)",
        deleteProductSuccess: "Product deleted successfully :)",
        updateProductErrorDescription: "It might be a issue related to AWS api gateway or lambda functions, please contact with the creator of this page.",
        createProductSuccess: "Product created successfully",
        createProductError: "Error creating the product :(",
        createProductErrorDescription: "It might be a issue related to AWS api gateway or lambda functions, please contact with the creator of this page.",
        fecth: {
            updateError: "Error on requesting the update of the product",
            createError: "Error on requesting the creation of the product",
            deleteError: "Error on requesting the deleting of the product",
            getError: "Error on requesting the product",
        }

    },
    Es: {
        loadingProducts: "Cargando productos...",
        getProductError: "Error obteniendo los productos :(",
        getProductErrorDescription: "Puede ser un error de AWS api gateway o las funciones lambda, por favor ponerse en contacto con el desarrollador.",
        deleteProductError: "Error eliminando el producto :(",
        deleteProductErrorDescription: "Puede ser un error de AWS api gateway o las funciones lambda, por favor ponerse en contacto con el desarrollador.",
        updateProductError: "Error actualizando el productos :(",
        updateProductSuccess: "Producto actualizado correctamente :)",
        deleteProductSuccess: "Producto eliminado satisfactoriamente :)",
        updateProductErrorDescription: "Puede ser un error de AWS api gateway o las funciones lambda, por favor ponerse en contacto con el desarrollador.",
        createProductSuccess: "Producto creado correctamente",
        createProductError: "Error creando el producto",
        createProductErrorDescription: "Puede ser un error de AWS api gateway o las funciones lambda, por favor ponerse en contacto con el desarrollador.",
        fecth: {
            updateError: "Error solicitando la actualización del producto",
            createError: "Error solicitando la creación del producto",
            deleteError: "Error solicitando la eliminación del producto",
            getError: "Error solictitando los productos",
        }
    }
}

const EditForm = {
    En: {
        inputs: {
            name: "Name",
            price: "Price",
            tags: "Tags"
        },
        name: "Product name must be at least 1 character long",
        price: "Product price must be greater or equal to 0",
        tags: "Please provide at least one tag for the product, if you add more please separate them by commas.",
        tagsFormatError: "Provide one or more tags (no numbers) please separated by commas. Example: aqua,sand,sky",
        submitButton: "Update product"
    },
    Es: {
        inputs: {
            name: "Nombre",
            price: "Precio",
            tags: "Tags"
        },
        name: "El nombre del producto debe contener al menos una letra",
        price: "El precio del producto debe ser mayor a 0",
        tags: "Por favor asigna al menos un tag para el producto, si es más de uno por favor separalos con comas.",
        tagsFormatError: "Añada uno o más tags (no usar números) separados por comas. Ejemplo: limpio,casa,duradero",
        submitButton: "Actualizar producto"
    }
}

const ProductCard = {
    En: {
        price: "Product price",
        tags: "Product tags",
        edit: "Edit",
        delete: "Delete",
        deleting: "Deleting",
        isEditingProduct: "Editing",
        confirmDelete: "Confirm permanent delete"
    },
    Es: {
        price: "Precio del producto",
        tags: "Tags del producto",
        edit: "Editar",
        delete: "Eliminar",
        deleting: "Eliminando",
        isEditingProduct: "Editando",
        confirmDelete: "Confirmar eliminación permanente"
    }
}

const ProductGrid = {
    En: {
        addProductButton: "Add product",
        creatingNewProduct: "Creating new product",
        submitButton: "Create product",
    },
    Es: {
        addProductButton: "Añadir producto",
        creatingNewProduct: "Creando nuevo producto",
        submitButton: "Crear producto",
    }
}

const Home = {
    En: {
        title: "Javier",
        description1: "This is a simple page where you can manage products, a simple rest practice with the AWS API GATEWAY and AWS LAMBDA FUNCTIONS.",
        description2: "Lambda functions were created with Nodejs (TypeScript), and using Mongoose (ORM), and MongoDb as database.",
        description3: "This front project you are watching was created with Nuxt3, Nuxt/ui, i18n and tailwindcss.",
        mainButton: "Go to manage products!",
        products: "Products!"
    },
    Es: {
        title: "Javier Español",
        description1: "Esta es una página sencilla donde puedes administrar productos, un simple rest para practicar con los servicios de AWS, API GATEWAY y funciones LAMBDA.",
        description2: "Las funciones lambda fueron escritas con Nodejs (typescript), y usando Mongoose como (ORM), y MongoDb como base de datos.",
        description3: "La interfaz gráfica que esta observando fue construida con Nuxt3, Nuxt/ui, i18n y tailwindcss.",
        mainButton: "Administrar los productos!",
        products: "Productos!"
    }
}

const Navigation = {
    En: {
        title: "aws api gateway and lambda functions"
    },
    Es: {
        title: "aws api gateway y funciones lambda"
    }
}

const Footer = {
    En: {
        title: "Hello world",
        p1: "This page was created by:",
        p2: "You can contact me here!",
        p3: "But you also have my email"

    },
    Es: {
        title: "Hola mundo",
        p1: "Esta página fue creada por:",
        p2: "Puedes contactarme aquí!",
        p3: "También tienes mi email"

    }
}

export {
    Home,
    Navigation,
    ProductCard,
    EditForm,
    Notifications,
    ProductGrid,
    Footer
}