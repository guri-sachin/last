import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import './App.css';


function Custmer()
{
    return(
       <div>
            <h1> this is Custmer panel</h1>
       </div>
   );

}
export default Custmer;