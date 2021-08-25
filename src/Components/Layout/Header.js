import { Fragment } from "react";
import classes from './Header.module.css'
import Mealsimage from '../../assests/meals.jpg'
const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>
                    ReactMeals
                </h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={Mealsimage} alt="Logo"/>

            </div>


        </Fragment>
    )
}

export default Header;