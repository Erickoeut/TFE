export default function AboutPage() {


    return (
        <div>
            <h1>About Page</h1>
            <h2>A propos de moi</h2>
            <p>
                Je m'appelle Eric KOEUT.

            </p>
            <p>
                Diplomé d'une licence en ingénieries mécanique à Lyon durant laquel j'ai pu avoir approche la programmation informatique (calculs scientifiques en python), j'ai commencé ma carrière professionelle en tant que dessinateur industriel en France, puis en Belgique. A la fin de mon CDD en septembre dernier, j'ai eu l'opportunité d'entrer dans le domaine du developpement web grace à la formation de developpeur Javascript FullStack organisé par Bruxelles formation, en collaboration avec Actiris. Les cours ont lieu a Digital City et sont donnés par les formateurs de BSTORM.
            </p>

            <h2>Le TFE</h2>
            <p>
                J'ai choisi le thème du rugby Touch. Il s'agit du sport que je pratique qui est un dérivé sans contact tu rugby. 
                Pour le site en lui-même, l'objectif est de créer un site qui non seulement permet d'acceder aux effectifs (factices) et infos des différentes équipes de touch belgium ainsi que les résultats et classement, mais aussi servir d'outils aux responsables d'équipes (user) qui pourraient inscrire les joueurs de leurs équipes sur les feuilles de matchs et aux officiels qui pourraient enregistrer les nouveaux matchs et les mettre a jours au niveau du status (a jouer ou terminé) ainsi que les résultats finaux.

            </p>
            
            <h2>Les technologies</h2>
            <p>
                Les consignes pour réaliser le projet étaient de mettre en place un font-end et un back-end distinct avec les technologies aux choix, apprises lors de la formation ou non. 
                Le delais pour réaliser ce projet (10 jours) étant assez restreint, j'ai choisi de m'appuyer sur les technologies abordées lors de cette formation.  
                
            </p>
            <h3>Le front-end</h3>
            <p>
                Pour réaliser le front-end de ce projet, je me suis donc appuyé sur la librairie React. Pour la navigation sur le site, j'ai utilisé react-router. 
            </p>

            <h3>Le back-end</h3>
            <p>
                Pour réaliser le back-end, j'avais le choix s'est porté sur NestJS ainsi qu'une database en SQL via MSSQL. La manipulation des DB se fait avec typeORM proposé nativement par NestJS.
            </p>
        </div>)
}