const buttons = document.
getElementsByClassName('menu-btn');

const itens = document.
getElementsByClassName('food-item');

let clickedButton = 'featured';
selectItens(clickedButton);

for( let button of buttons ) {
    button.addEventListener(
        'click',
        () => {
            selectItens(button.id);
        }
    )
}

function selectItens( id ) {
    clickedButton = id;

    // removo todas as classes active dos butões
    for( let button of buttons ) {
        button.className = 'menu-btn';
    }

    // pelo id recebido, pego no buttao carregado
    // aplico a class de butao activo
    let button = document.getElementById(id);
    button.className = 'menu-btn active-btn';

    for( let item of itens ) {
        // o item é um element HTML.
        if(item.className === 'food-item '+ clickedButton)
        {
            // mostrar os itens com a class drinks
            item.style.display = 'grid';
        } else {
            item.style.display = 'none';
        }
    }
}
