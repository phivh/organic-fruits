import React from 'react'; 
import './App.css';
import ProductList from './components/products/ProductList';
import ProductItem from './components/products/ProductItem'; 
import Header from './components/layouts/Header';
import Container from './components/layouts/Container';
import Category from './components/products/Category';
import { ProductState, Product } from './types';
import Skeleton from 'react-loading-skeleton';
 
type Props = ProductState 

const INIT_STATE = {
  productsData: undefined, 
  ingredientsData: undefined,
  loading:false,
  errors: undefined
}

class App extends React.Component<Props> { 
  state: any = {}
  constructor(props: Props) {
    super(props)
    this.state = {
      ...INIT_STATE
    }
  }

  async componentDidMount() {
    let productsData = await this.getProducts() 
    let ingredientsData = await this.getProductIngredients() 
    this.setState({
      productsData: productsData,
      ingredientsData: ingredientsData
    })
  }

  ingredient = (item:any) => {
    return (
      <ProductItem key={item.id} title={item.name} />
    )
  }

  renderProducts = (ingredient_ids:any) => { 
      const { ingredientsData } = this.state
      let ingredients:any =  []
      ingredientsData.ingredients.some( (item:any) => {
        if(ingredient_ids.indexOf(item.id) > -1) {
          ingredients.push(this.ingredient(item))
        }
        return false;
      })
      return ingredients
  }

  getProducts = async () => {
    const productData = await fetch('/mocks/products.json') 
    return productData.json();
  }

  getProductIngredients = async () => {
    const productIngredientsData = await fetch('/mocks/ingredients.json') 
    return productIngredientsData.json();
  }
  

  render() { 
    const { productsData } = this.state
    return (
      <div className="App">  
        <main>
          <Header title={'Organic Fruits'} />
          <Container>
            {productsData ? (
              productsData.products.map( (item:Product) => (
                <div key={item.id}>
                  <Category title={item.name} collection={item.collection} />
                  <ProductList>
                    {this.renderProducts(item.ingredient_ids)} 
                  </ProductList>
                </div>
              ))
            ): (
              <>
                <Skeleton height={50} />
                <ProductList>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </ProductList>
              </>
            )}
          </Container>
        </main>
      </div>
    ) 
  }
}
export default App;
