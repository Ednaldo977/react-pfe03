import React from 'react'
import { AuthContext } from "./providers/auth";
import Profile from "./components/profile"; 

function Home() {
  const {user, setUser} = React.useContext(AuthContext);
    return (
      <div class="cardee">
        
        <h5>Context API - Iniciante</h5>
        <div class="spinner-border" role="status">
          <h6>1,5</h6>
          <span class="visually-hidden">Loading...</span>
        </div>
            <div class="card cardzao" >
                <div class="card-body">
                  <p>o que o usuário digitar será exibido sincronamente. (limite de 300 caracteres)</p>
                  <p>obs: ainda nao sei como guardar o valor do input.</p>
                <input type="text" maxLength={300} onChange={(e)=>setUser({name: e.target.value})}/>
                <Profile />
                </div>
            </div>
        
      </div>
    );
  }
  
  export default Home;