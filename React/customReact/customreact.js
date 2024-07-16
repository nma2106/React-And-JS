import { Children } from "react"

const reactElement={
    type:'a',
    //may be a div or an a  tag 


    props:{
        href: "https://google.com",
        target:'_blank'

    },
    //property - adding key value pair
    
    Children:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

 