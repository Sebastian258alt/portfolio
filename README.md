# Portefólio — Sebastião Nhamuneque

Site estático (HTML + CSS + JavaScript, sem build), bilingue PT/EN, publicado na Vercel.

## Onde editar cada coisa

| O quê | Ficheiro |
|---|---|
| Textos gerais, destaques, **`SITE_FACTS`** (anos de experiência) e **`CONTACT_CONFIG`** (formulário) | `content.js` |
| Experiência / Formação / Competências | `experience.js`, `education.js`, `skills.js` |
| Certificados (novo certificado = nova entrada + imagem em `assets/certs/`) | `certificates.js` |
| Documentos para descarregar (CV, carta) | `documents.js` + `assets/docs/` |
| Projectos e serviços | `projects.js`, `services.js` |
| Foto do hero | `assets/img/avatar.jpg` (proporção ≈ 4:5) |

Os números "+X anos" e "N certificados" são calculados automaticamente (`SITE_FACTS` e `certificates.js`).

## Formulário de contacto

Por omissão abre o email já preenchido (`mailto:`). Para envio directo:
1. Cria uma conta gratuita em [web3forms.com](https://web3forms.com) (ou formspree.io);
2. Cola a chave em `CONTACT_CONFIG.web3formsKey` (ou o endpoint em `formspreeEndpoint`) no `content.js`.

## ⚠️ Privacidade

**Nunca** ponhas em `assets/` (nem no repositório) o Bilhete de Identidade, o histórico académico com número de estudante,
nem outros documentos pessoais. O site mostra apenas CV e carta; o resto fica "mediante pedido".
