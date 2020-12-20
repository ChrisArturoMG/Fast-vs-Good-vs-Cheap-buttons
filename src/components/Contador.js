/*Cada que se hace un componente se debe importar de React imr*/
import React, {useState, Fragment}     from 'react';
import './css/contador.css' 

/**sfc */

const Contador = () => {

    /**Logica de JS */
    const [numero1, setNumero1] = useState( [true,1] );
    const [numero2, setNumero2] = useState([true,2]);
    const [numero3, setNumero3] = useState([false,0]);

    const aumentar1 = () => {
        if(numero1[0] === false){

            if(numero2[1] === 0 || numero3[1] === 0){
                setNumero1([!numero1[0], 2])
            } else{
             if (numero2[1] === 1 && numero3[1] === 2 ){
                    setNumero1([!numero1[0], numero3[1] ])
                    setNumero2([!numero2[0], numero2[1] - 1])
                    setNumero3([numero3[0], numero3[1] - 1])
                }else{
                    setNumero1([!numero1[0], numero2[1]])
                    setNumero2([numero2[0], numero1[1] - 1])
                    setNumero3([!numero3[0], numero3[1] - 1])
                }
            }
               


        }else{
            setNumero1([!numero1[0], numero1[1]- 1] )

            if(numero2[1] === 2){
                setNumero2([numero2[0], numero2[1] - 1])
            }else if(numero3[1] === 2){
                setNumero3([numero3[0], numero3[1] - 1])
            }
            
        }
        console.log(numero1)
        console.log(numero2)
        console.log(numero3)
        
        
    }

    const aumentar2 = () => {
        if(numero2[0] === false){

            if(numero3[1]===0 || numero1[1]===0){
                setNumero2([!numero2[0], 2])
            }
            else{
               if (numero1[1] === 1 && numero3[1] === 2 ){
                setNumero2([!numero2[0], numero3[1] ])
                
                setNumero1([!numero1[0], numero1[1] - 1])
                setNumero3([numero3[0], numero3[1] - 1])
            
            }else{
                setNumero2([!numero2[0], numero1[1]])
                
                setNumero1([numero1[0], numero1[1] - 1])
                setNumero3([!numero3[0], numero3[1] - 1])
            } 
            }

            
        }else{
            setNumero2([!numero2[0], numero2[1]] - 1)
            if(numero1[1] === 2){
                setNumero1([numero1[0], numero1[1] - 1])
            }else if(numero3[1] === 2){
                setNumero3([numero3[0], numero3[1] - 1])
            }

        }
        console.log(numero1)
        console.log(numero2)
        console.log(numero3)

    }

    const aumentar3 = () => {

        if(numero3[0] === false){

            if(numero1[1] === 0 || numero2[2] === 0){
                setNumero3([!numero3[0], 2])
            }else{
                if (numero1[1] === 1 && numero2[1] === 2 ){
                setNumero3([!numero3[0], numero2[1] ])
                
                setNumero1([!numero1[0], numero1[1] - 1])
                setNumero2([numero2[0], numero2[1] - 1])
            
            }else{
                setNumero3([!numero3[0], numero1[1]])
                
                setNumero1([numero1[0], numero1[1] - 1])
                setNumero2([!numero2[0], numero2[1] - 1])
            }
            }

            
        }else{
            setNumero3([!numero3[0], numero3[1] -1])
            if(numero1[1] === 2){
                setNumero1([numero1[0], numero1[1] - 1])
            }else if(numero2[1] === 2) {
                setNumero2([numero2[0], numero2[1] - 1])
            }
        }
        console.log(numero1)
        console.log(numero2)
        console.log(numero3)
     
    }

    return ( 
        <Fragment>
            <label className="switch"> 
                <input onChange={ aumentar1 }
                        type="checkbox"


                         checked = {numero1[0]}
                        />
                <span className="slider round"></span>
            </label>
            <label className = "etiqueta">Barato</label>
            <br/>
            

            <label className="switch">
                <input onChange={ aumentar2 }
                type="checkbox"
                checked = {numero2[0]}
                />
                <span className="slider round"></span>
            </label>
            <label className = "etiqueta">Bueno</label>
            <br/>

            <label className="switch">
                <input onChange={ aumentar3 }
                type="checkbox"
                checked = {numero3[0]}
                />
                <span className="slider round"></span>
            </label>
            <label className = "etiqueta">Rapido</label>
            <br/>


        </Fragment>
    );
}
 
export default Contador;
