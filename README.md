# info910-application-web

Application web simple pour vérifier si on est capable d'appeler l'api associée.

Pour lancer le projet, référez vous à la section "Deploiement via yml" 
dans la partie Kubernetes. Vous trouverez ci-dessous deux parties, la partie 
correspondant à la dockerisation et la partie kubernetes. Chaque partie est 
constituée de deux sous partie, la première "automatisé", 
la seconde avec toutes les commandes pas à pas.

## Docker
### Lancement avec docker compose
```bash
# Lancement avec docker compose
docker compose up -d
```
### Lancement sans docker compose
```bash
# Build du conteneur et run à la main
docker build . -t info910/front-app
docker run -p 8080:80 -d info910/front-app
```
## Kubernetes

Veuillez executer les commandes ci-dessous dans la section "Deploiement via yml".
Il se peut que la première commande doive etre utilisée 2x pour que la seconde fonctionne.
Veillez à bien éxecuter le port forwarding pour avoir accès à l'application.

### Deploiement via yml
```bash
# Execution des scripts yml
kubectl apply -f .\deploiement\

# Port forwarding pour que le navigateur ai accès à l'app web
kubectl port-forward service/info910-app-web 8080:80
```

### Deploiement via cmd
```bash
kubectl create deployment info910-app-web --image=ghcr.io/chatelant/info910-front:main
kubectl expose deployment info910-app-web --type=NodePort --port=80
kubectl get services info910-app-web 
kubectl port-forward service/info910-app-web 8080:80
```

## Generation des yml
Commandes utilisées pour générer les yml.
```bash
kubectl create deployment info910-app-web --image=ghcr.io/chatelant/info910-front:main --dry-run=client -o yaml > .\deploiement\create.yml
kubectl expose deployment info910-app-web --type=NodePort --port=80 --dry-run=client -o yaml > .\deploiement\serve.yml
```
