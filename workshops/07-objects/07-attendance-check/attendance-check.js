let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

const attendanceCheck = (day) => {
debugger;
    let presentStudent = []
    for( let i = 0; i < classRoom.length; i++){
        let objectInitial = classRoom[i];
        for(let objectNameKey in objectInitial){
            let attandanceArray = objectInitial[objectNameKey]
            for(let dayObject of attandanceArray){
                if(dayObject[day]){
                    presentStudent.push(objectNameKey);
                    break;
                }
            }
        }   
    }
    return presentStudent;

}
attendanceCheck('Tuesday');