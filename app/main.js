// var greeter = require('./Greeter.js')
// document.getElementById('root').appendChild(greeter())

// es6 style

import React from 'react'
import {render} from 'react-dom'
import Greeter from './Greeter.js'

import './main.css'//webpack只有单一入口，需要将其他模块导入main.js

render(<Greeter />, document.getElementById('root'))
