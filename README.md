# M413 - TD2 : Réponses aux Questions

#### Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?
#### J'ai ajouté l'écouteur d'évènement sur l'objet body grâce à ```.addEventListener```

----

#### Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?
#### Si on utilise ```currentTarget```, cela va référer à l'objet auquel le listener est attaché.

----

#### Comment avez-vous ajouté l’élément ?

#### J'ai utilisé : ```e.target.parentNode.insertBefore(elementTropCool, e.target);```

----

#### Comment avez-vous fait pour que la fonction select2() ignore les évèments de la ```<div>``` donnée ci-dessus ?

#### J'ai comparé la cible (target) avec les éléments contenus dans la div : ```if (e.target !== document.getElementById('insert-div') && !document.getElementById('insert-div').contains(e.target)) {}```.