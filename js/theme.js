const themeModule = {
    init: function () {

        //* La même chose mais en localStorage
        const defaultTheme = localStorage.getItem('theme')
        const defaultColor = localStorage.getItem('color');

        if(defaultColor != null){
            themeModule.switchColor(defaultColor);
        }

        if (defaultTheme === 'dark') {
            themeModule.handleSwitchThemeClick();
        }


        const btnSwitch = document.querySelector('#theme-switch');
        btnSwitch.addEventListener('click', themeModule.handleSwitchThemeClick)

        const buttonThemes = document.querySelectorAll('.theme-button');
        for (const colorButton of buttonThemes) {
            colorButton.addEventListener('click', themeModule.handleColorTheme)
        }
    },

    handleColorTheme: function (event) {
        //* event représente l'évenement qui s'est produit. 
        //* Dans event il existe une propriété targe qui nous idique quel élément du DOM à lancé l'action
        //* id représent l'attribut id de l'élément du DOM qui a déclenché l'action
        themeModule.switchColor(event.target.id);
    },

    handleSwitchThemeClick: function (event) {
        //* on peut récupérer le body directement grace à cette ligne car il s'agit d'une balise standard html. Elle est obigée d'être là et d'être unique
        const body = document.body;

        //* On vérifie si la classe theme-dark est déjà dans le body (on vierifie si on enst en them sombre)
        if (body.classList.contains('theme-dark')) {
            //* si elle l'est on la retir pour passer en theme light
            body.classList.remove('theme-dark');

            // * Suavegarde version localStorage
            localStorage.setItem('theme', 'light');

        } else {

            //* sinon on l'ajooute pour passer de light à dark
            body.classList.add('theme-dark');

            //* Sauvegarde version localstorage
            //* localStorage à le même fonctionnement que notre module cookie à la différence près, qu'il existe globalement dans le contexte javascript (pas besoin de créer un module spécifique, c'est un outil qui existe sur nimporte quel page web comme document)
            localStorage.setItem('theme', 'dark');

        }

    },

    //* newColor pourra prendre les valeur theme-red theme-blue ou them-green
    switchColor: function (newColor) {
        const possibles = document.querySelectorAll('.theme-button');

        //* On parcour les valeurs possible et si la valeur en paramêtre correspon on ajoute la classe sinon on l'enlève

        for (const theme of possibles) {
            if (newColor === theme.id) {
                document.body.classList.add(theme.id);
                localStorage.setItem('color', theme.id);

                // * Changer le logo

                //? je récupère l'élément du DOM qui fait référence au logo
                const imgLogo = document.querySelector('.logo__image');
                //? Je modifie l'attribut src de cet élément. En concaténant/interpollant le nom du theme choisi par l'utilisateur
                imgLogo.src = `img/logo-${theme.id}.png`;
            } else {
                document.body.classList.remove(theme.id)

                //* En dev on utilise souvent trois normes d'écriture pour nomer les choses
                const test_snake = 12; //? Le Snake Case (on ajoute un _ entre chaque mot)
                //const test-kebab = 12; //? Le Kebab Case (on ajoute un - entre chauqe mot ) Pas du tout supporté par JS
                const testCamel = 12; //? Le Camel Case (on ajoute une majuscule entre chaque mot)

            }
        }
    }
}