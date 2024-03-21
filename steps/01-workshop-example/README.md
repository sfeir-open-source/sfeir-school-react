# Tâche à réaliser 

Description de la tâche...

# Tips

- Aide ou lien utile...

# TP

Code ou exemple de code à ajouter pour faire le TP....

```javascript
// Evénement à intercepter
window.addEventListener('beforeinstallprompt', e => {});

// Annuler un événement javascript
e.preventDefault();

// Lancement de l'événement
deferredEvent.prompt();

// Attente de la confirmation de l'utilisateur
deferredEvent.userChoice.then(choiceResult => {
  // Validation de l'utilisateur
  choiceResult.outcome; // String = dismissed (si l'utilisateur refuse)
});
```
