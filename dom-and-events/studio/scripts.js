// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let takeoff = document.getElementById('takeoff');
    let flightStatus = document.getElementById ('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');

    takeoff.addEventListener('click', function() {
        let readyForTakeOff = confirm('Confirm that the shuttle is ready for takeoff.');

        if(readyForTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = parseInt(shuttleHeightinnerHTML) + 10000;
        }
});
    landing.addEventListener('click', function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
    })
    missionAbort.addEventListener('click', function() {
        let confirmAbort = confirm("Confirm that you want to abort the mission");

        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;

        }
    });
});

window.addEventListener('load', function() {
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById('rocket');
    
    
    upButton.addEventListener('click', function() {
        moveRocket('up');
        adjustShuttleHeight('up');
    });

    downButton.addEventListener('click', function() {
        moveRocket('down');
        adjustShuttleHeight('down');
    });

    rightButton.addEventListener('click', function() {
        moveRocket('right');
    });

    leftButton.addEventListener('click', function() {
        moveRocket('left');
    });
    
    function moveRocket(direction) {
        //parseInt(rocket.style.top) || 0: If rocket.style.top is not set (or is an invalid value), parseInt() will return NaN (Not a Number). Using the logical OR operator (||), we default to 0 if the result is NaN. This ensures that currentTop is always a valid number.
        let currentTop = parseInt(rocket.style.top) || 0;
        let currentLeft = parseInt(rocket.style.left) || 0;
        let step = 10;

        switch (direction) {
            case 'up':
                rocket.style.top = (currentTop - step) + 'px';
                break;
            case 'down':
                rocket.style.top = (currentTop + step) + 'px';
                break;
            case 'right':
                rocket.style.left = (currentLeft + step) + 'px';
                break;
            case 'left':
                rocket.style.left = (currentLeft - step) + 'px';
                break;
            default:
                break;
        }
    }

    function adjustShuttleHeight(direction) {
        let step = 10000;

        if (direction === 'up') {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + step;
        } else if (direction === 'down') {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - step;
        }
    }
});