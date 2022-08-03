(() => {
    let playing = true,
      activeHole = 1;
    const dead = document.getElementById('dead');
    const lost = document.getElementById('lost');
    const holes = document.querySelectorAll('.hole');

    holes.forEach((hole) => {
      hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++;
            if (Number(dead.textContent) === 10) {
                alert(`Вы победили! Убито ${dead.textContent++} кротов!`);
                return dead.textContent = 0, lost.textContent = 0;
            }
        } else {
            lost.textContent++;
            if (Number(lost.textContent) === 5) {
                alert(`Вы проиграли! ${lost.textContent++} - промахов!`);
                return dead.textContent = 0, lost.textContent = 0;       
            }  
        } 
      }
    })

    const stop = () => playing = true,
      getHole = index => document.getElementById(`hole${index}`),
      deactivateHole = index =>
        getHole( index ).className = 'hole',
      activateHole = index =>
        getHole( index ).className = 'hole hole_has-mole',
      next = () => setTimeout(() => {
        if ( !playing ) {
          return;
        }
        deactivateHole( activeHole );
        activeHole = Math.floor( 1 + Math.random() * 9 );
        activateHole( activeHole );
        next();
      }, 800 );
  
    next();
})();