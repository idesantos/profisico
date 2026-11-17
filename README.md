# Academia Pró-Físico · site novo

Site estático em [Astro](https://astro.build), com o mesmo visual dos sites da Aquacenter, nas cores da logo da Pró-Físico (azul e amarelo):
- hero com água interativa em WebGL;
- rolagem suave com Lenis;
- animações com GSAP.

- **Domínio:** https://profisico.com.br/, hospedado na Hostinger (hoje um WordPress).
- **Versão de teste:** https://idesantos.github.io/profisico/ (com `noindex`; cada push na `main` republica).
- **Projeto irmão:** `~/projetos/aquacenter-casa-verde`. Este projeto partiu dele em 17/11/2026.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # build de teste (com noindex)
npm run pacote   # build de produção + profisico-site.zip para subir na Hostinger
```

## Publicar

Não há deploy automático para o domínio.
1. Rode `npm run pacote`.
2. Abra o hPanel do profisico.com.br, vá em Gerenciador de Arquivos e entre em `public_html`.
3. Suba `profisico-site.zip` e extraia numa pasta chamada `site`.
4. Mova tudo de dentro de `site` para `public_html`, inclusive o `.htaccess`.
5. Apague a pasta `site` e o zip.

O build de produção gera:
- o `.htaccess`, com HTTPS, sem www, 301 das URLs antigas e PHP bloqueado;
- o sitemap;
- o `robots.txt`.

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| Telefone/WhatsApp, endereço, funcionamento, sobre, planos | `src/data/site.ts` |
| Grade de horários (transcrita das imagens de abril/2024 do site antigo) | `src/data/horarios.ts` |
| Modalidades e aulas (nome, resumo, foto, diferenciais) | `src/data/modalidades.ts` |
| Textos das modalidades (descrição e benefícios) | `src/data/modalidades-conteudo.json` |
| Metodologia Aquativa e níveis (mascotes) | `src/data/metodo.ts` |
| Cores | `src/styles/global.css` (`:root`) |
| Fotos e logo | `src/assets/img/` |

## Água interativa

O código fica em `src/scripts/water/`. Em aparelhos sem WebGL2, ou com "reduzir movimento" ativado, aparece uma versão estática.
