The project is a simple program that listing organic fruits by category.

##Flows:
###Step #1: 
- Fetch product data provided by mock data (products.json)
- From the products collect product item by ingredients id from ingredients.json.
Use case:
- Open program on a browser you will see the loading page.
- When the loading products is completed, you will see a list of item.
###Step #2:
- Group product of category from the product data (products.json)
- Search product item by name, collection (TODO)
Use case:
- The user can filter by click on the button <CollectionName> at the top of the page to group the product by collection (TODO).
- The user can find any product by typing on the search box (TODO).


##Setup & Run program

##Web App - Build steps:
- React: V16
- Type: React-Typescript 
- Template: typescript package 

##Node & NPM
Based on the provision above

##Install & Build Script

# Install Node packages
`npm install / yarn add`

# Build Customizing Variables For Each Environment
### Development
`npm run build:dev`

### Staging
` npm run build:staging `

### Production
` npm run build `
