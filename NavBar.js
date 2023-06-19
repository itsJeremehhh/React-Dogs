import React from "react";
import { NavLink } from "react-router-dom";


//we create a NavBar funtion to creat a link for each dog listed in our database.
function NavBar({dogs}) {
    //lets define the links variable in which the use clicks on
    const links = dogs.map( //the map makes a copy of the array from our data of dogs
        dog => (//that data is then looped over for each dog listed. We then assigned to key value to the dogs name. 
        //The "to=" is the route the link directs the user. We then list the text value for each name of the dog.
            <NavLink key={dog.name} to= {`/dogs/${dog.name.toLowerCase()}`}> 
                {dog.name} 
            </NavLink>
        ));
        return (
            <nav>
                <NavLink exact to="/dogs">home</NavLink>
                {links}
            </nav>
        )
}
export default NavBar;