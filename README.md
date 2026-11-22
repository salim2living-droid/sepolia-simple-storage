# SimpleStorage : Smart Contract Solidity + CI/CD GitHub Actions + Sepolia

Projet du devoir « IA, Blockchain, DevOps & Infrastructure ».

## Contenu
- `contracts/SimpleStorage.sol` : contrat (valeur + propriétaire, événement, erreur personnalisée)
- `test/SimpleStorage.test.js` : 3 tests Hardhat (init, écriture propriétaire, refus non-propriétaire)
- `scripts/deploy.js` : script de déploiement
- `.github/workflows/ci-cd.yml` : job `test` (compile + tests) puis job `deploy` (Sepolia, uniquement sur `main`)

## Utilisation locale
```bash
npm install
npx hardhat test
```

## Mise en place du déploiement sur Sepolia
1. Créer un compte RPC (Alchemy / Infura) et récupérer l'URL Sepolia.
2. Créer un portefeuille **dédié aux tests** (jamais votre portefeuille personnel) et l'alimenter en ETH Sepolia via un faucet.
3. Dans GitHub : *Settings → Secrets and variables → Actions*, ajouter :
   - `SEPOLIA_RPC_URL`
   - `DEPLOYER_PRIVATE_KEY`
4. (Optionnel) Créer l'environnement `sepolia` avec une approbation manuelle.
5. Pousser sur `main` : le workflow teste puis déploie. L'adresse du contrat est affichée dans les logs du job `deploy` ; la vérifier sur https://sepolia.etherscan.io et capturer la preuve.
