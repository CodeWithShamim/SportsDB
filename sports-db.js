const errorMessage = document.getElementById('error-msg');
errorMessage.style.display = 'none';
const spinner = document.getElementById('spinner');
spinner.style.display = 'none'



const search = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = "";
    spinner.style.display = 'block'
    if (inputFieldValue == '') {
        alert('PLease!! insert a value!')
        spinner.style.display = 'none'
    } else {
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputFieldValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayPlayer(data))
            .catch(error => {
                errorMessage.style.display = 'block';
                spinner.style.display = 'none'
            })

    }

    const displayPlayer = players => {
        const rowParent = document.getElementById('row-parent');
        errorMessage.style.display = 'none';
        rowParent.textContent = "";
        for (const player of players.player) {
            const div = document.createElement('div');
            div.classList.add('col');
            if (player.strThumb == undefined) {
                // const img = document.createElement('img');
                // img.src = `./pic.png`
                // div.appendChild(img)
                div.innerHTML = `
                <div class="card">
                    <img src="./images/pic.jpg" class="rounded card-img-top" alt="..." />
                    <div class="card-body text-center">
                    <h6>Date: ${player.dateBorn}</h6>
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">
                        where he won the Belgian Ebony Shoe. This led to a move to Dutch side Ajax in 2001, from where he joined Celta Vigo on loan in 2003. His next destination was Marseille in France and he left them for Italian side Roma in 2004. He joined English side Tottenham Hotspur on an 18-month loan in 2005 and eventually joined the club permanently in 2006. He left the club in 2007 to join
                        </p>
                    </div>
                </div>
                 `
            } else {
                div.innerHTML = `
            <div class="card">
                <img src="${player.strThumb}" class="rounded card-img-top" alt="..." />
                <div class="card-body text-center">
                <h6>Date: ${player.dateBorn}</h6>
                    <h5 class="card-title">${player.strPlayer}</h5>
                    <p class="card-text">
                    where he won the Belgian Ebony Shoe. This led to a move to Dutch side Ajax in 2001, from where he joined Celta Vigo on loan in 2003. His next destination was Marseille in France and he left them for Italian side Roma in 2004. He joined English side Tottenham Hotspur on an 18-month loan in 2005 and eventually joined the club permanently in 2006. He left the club in 2007 to join
                    </p>
                </div>
            </div>
             `
            }


            rowParent.appendChild(div);

        }
        spinner.style.display = 'none'

    }

}