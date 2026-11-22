# SimpleStorage : Smart Contract, CI/CD et déploiement sur Sepolia

Projet du Master AI & Digital Economy (module IA, Blockchain, DevOps & Infrastructure).
Un contrat Solidity simple est testé automatiquement, puis déployé sur le réseau de test **Sepolia** via **GitHub Actions**.

## Preuve de déploiement

- **Réseau :** Sepolia (chainId 11155111)
- **Adresse du contrat :** `0x4d2AaA299dF6ff7E020E8c4a671c1444a89c8ad9`
- **Etherscan :** https://sepolia.etherscan.io/address/0x4d2AaA299dF6ff7E020E8c4a671c1444a89c8ad9

## Structure

| Dossier / fichier | Rôle |
|---|---|
| `contracts/` | Contrat Solidity `SimpleStorage` |
| `test/` | Tests automatisés (Hardhat) |
| `scripts/deploy.js` | Script de déploiement |
| `hardhat.config.js` | Configuration du réseau Sepolia |
| `.github/workflows/ci-cd.yml` | Pipeline CI/CD |

## Pipeline CI/CD

1. **test** : installation, compilation et tests à chaque push.
2. **deploy** : exécuté uniquement sur `main`, après réussite des tests ; déploie sur Sepolia.
3. Le journal de déploiement est conservé comme artifact (`deploy-log`).

## Secrets GitHub requis

| Nom | Contenu |
|---|---|
| `SEPOLIA_RPC_URL` | URL RPC d'un nœud Sepolia |
| `DEPLOYER_PRIVATE_KEY` | Clé privée d'un portefeuille de test dédié |

## Exécution locale

```bash
npm ci
npx hardhat compile
npx hardhat test
```

## Sécurité

Les clés ne sont jamais écrites dans le code : elles passent par les secrets GitHub. Utilisez uniquement un portefeuille de test.
