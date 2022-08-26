import style from './App.module.css';
import { useState } from 'react';
import axios from 'axios';
import Recipe from './Components/Recipes';
import Alert from './Components/Alert';
import Footer from './Components/Footer';
import {v4 as uuidv4} from "uuid"



function App() {

  const [fetch, fetchData] = useState("");
  const [recipes, getRecipes] = useState([]);
  const [alert, setAlert] = useState("");

 const APP_ID = 'a7f845fb';

  const APP_KEY = "13dfcb9bd8a1be01ae6441be71f9a98b";

  const url = `https://api.edamam.com/search?q=${fetch}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async ()=> {
    if (fetchData !== ""){
      const result = await axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      getRecipes(result.data.hits);
      fetchData("");
      setAlert("");
    }else{
      setAlert("Please Fill the Form")
    }
    }
  

  const onChange = (e)=>{
    fetchData(e.target.value);
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    getData();
  }

  return (
    
    <div className={style.App}>
        <Footer/>
      <h1 onClick={getData}>Food Searching App</h1>
      <form className={style.search_form} onSubmit={onSubmit}>
      {alert !== "" && <Alert alert={alert} />}
        <input type="text" placeholder = "search food" onChange={onChange} autoComplete='off'/>
        <input type="submit" value="Search" />
      </form>
      <div className={style.recipes}>
      {recipes !== [] &&
          recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}

export default App;
