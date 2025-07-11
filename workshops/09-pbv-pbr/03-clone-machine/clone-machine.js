// YOUR CODE BELOW

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
}

const cloneMachine = (objectName) => {
    debugger;
    let cloneObject = {}
    let keys = Object.keys(objectName);
    for (let i = 0; i < keys.length; i++) {
        if (objectName[keys[i]] === objectName.name) {
            cloneObject["name"] = objectName.name.concat("Clone");
        }
        if(objectName[keys[i]] === objectName.species){
            cloneObject["species"] = objectName.species;
        }
        if(objectName[keys[i]] === objectName.offspring){
            cloneObject["offspring"] = [];
        }
    }

    objectName.offspring.push(cloneObject.name);

    return cloneObject;
}



