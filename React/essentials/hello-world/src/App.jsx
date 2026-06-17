import './App.css'
import Button from './Button';
//importing components from diff files
import { ArrowButton } from './ArrowButton';
//imoprting arrow functino syntax, easier
import { Card } from './Card';
import { Greeting } from './Greeting';
import { UserDetails } from './UserDetails';
import { CustomButton } from './CustomButton';

function Welcome(props){ //child component
  return (
    <h1>welcome {props.name} aka {props.alias}</h1>
  );
}


//PROPS OBJECT DESTRUCTING !!!
export const Product=({title,price,inStock,categories})=>{
  return(
    <div>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <p>in stock: {inStock ? "yes" : "no"}</p>
      <p>categories: {categories.join(", ")}</p>
    </div>
  );
}

function App() { //parent component
  return (
    <>
    <div>react course</div>
    <Welcome name="aya" /> 
    <Welcome name="bruce" alias="batman"/>
    <Button/>
    <ArrowButton/>
    <Card/>
    <Product title="laptop" price={100} 
             inStock={true} categories={["electronis","hardware"]}
    />

    <Greeting name="aya" message="gm"/>
    <Greeting name="only you"/>
    <Greeting message="gn"/>
    <Greeting/>

    <UserDetails name="chronically" isOnline={true}/>
    <UserDetails name="susan" isOnline={false}/>

    <CustomButton/>

    </>
  );
}

export default App

//REUSE DIFF COMPONENTS USING PROPS: like parameters in functions
//pass down values from parent to children

//default value used only when its UNDEFINED

//KEY is a special prop to track items in a list (shouldnt use INDEX)