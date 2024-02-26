function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     }); 
     missionAbort.addEventListener('mouseover', event => {
        missionAbort.style.backgroundColor = 'red';
     });
   
    missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
    });
    missionAbort.addEventListener('click', event => {
        //prompt the user with a confirmation window
        let abortConfirmed = window.confirm("Are you sure you want to abort the mission?");
        //if user confirms...update text
        if (abortConfirmed) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home.';
        }
    });
}

window.addEventListener("load", init);
