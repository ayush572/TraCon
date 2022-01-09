import React from 'react'
import '../styles/planlist.scss'
import Levels from './plan_levels';
import { db } from "../firebase";
import { onSnapshot, collection } from "@firebase/firestore";

let lvl_no=["Underweight","Healthy Weight","Overweight","Obese"];


function Planlist(props) {
    return (
        <div className='classlist'>
            <Levels no={lvl_no} />
        </div>
    )
}

export default Planlist;
