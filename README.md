# Exercice : inscription (Express + TypeORM + PostgreSQL)

## Lancer
    docker compose up --build

Aucun volume : les données sont perdues à chaque `docker compose down`.

## Tester
    # Succès -> 200
    curl -i -X POST localhost:3000/auth/signup -H "Content-Type: application/json" \
      -d '{"email":"a@b.fr","password":"Password1"}'

    # Doublon -> 409
    # Mot de passe faible / email invalide -> 400

## Voir les données
    docker compose exec db psql -U postgres -d app -c "SELECT id, email, password_hash FROM users;"
