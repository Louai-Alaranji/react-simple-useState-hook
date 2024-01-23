import React, {useState} from "react";
// useState gives us a variabler with a setter. normally the variable is named
// something, and the setter is named setSomething.


function MyComponent(){
     
    const [name, setName] = useState("random");
    const [age, setAge]   = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
        setName("Leo");
        
    }

    const increaseAge = ()=>{
        setAge(age+1);
    }

    const toggleEmployed = () => {
        if (age < 18){
            setIsEmployed(false);
        } else{
            setIsEmployed(true);
        }
       
    }

    return(<>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> Set Name </button>

            <p>Age: {age}</p>
            <button onClick={increaseAge}> Increase Age </button>

            <p>Is Employed? {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployed}> Toggle status </button>
        </div>
    </>)
}

export default MyComponent;



/**********************Doesnt work on just the variable, we have to use the setName 
function MyComponent(){
     
    let [name, setName] = useState();


    const updateName = () =>{
        name = "Leo";
        console.log(name)
    }
    return(<>
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> Set Name </button>
        </div>
    </>)
}

export default MyComponent;

********************************************/