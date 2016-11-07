// var config = require('./config.json')

// module.exports = function(){
//     var greet = document.createElement('div')
//     greet.textContent = config.greetText
//     return greet
// }

// es6 style
import React ,{Component} from 'react'
import config from './config.json'

//When importing the CSS Module from a JS Module, 
//it exports an object with all mappings 
//from local names to global names
import styles from './Greeter.css'


class Greeter extends Component{
    render(){
        return (
            //响应导入的css模块给div添加类名
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter