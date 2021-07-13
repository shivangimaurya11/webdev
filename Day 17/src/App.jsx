import Card from "./components/Card";
import "./style.css";

function App(props)
{
    return(
        <div>
            <h1 className="thid"><u>Calories Consumed</u></h1>
        <div className="container">
        <div className="app">
            <Card title="Pizza" title2="13"/>
             <Card title="Burger" title2="134"/>
            <Card title="Ice Cream" title2="140"/>  
            <Card title="Dosa" title2="200"/>
             <Card title="Chocolates" title2="140"/>
            <Card title="Idli" title2="99"/>  
            <Card title="Pav BHaji" title2="140"/>  
            <Card title="Sandwich" title2="59"/>
             <Card title="Butter" title2="100"/>
            <Card title="Palak Paneer" title2="123"/>  
        </div></div></div>
        
  
        
);
}

export default App;