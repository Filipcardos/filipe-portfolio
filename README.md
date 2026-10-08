# Filipe Cardoso — Portfólio

React + Vite. Layout inspirado no design system **Resend** (preto puro, bordas finas, janela de código e cubo mágico 3D em WebGL).

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção
```

- Conteúdo (perfil, trajetória, projetos, stack): `src/data.js`
- Tokens de design: `src/styles/variables.css`; estilos: `src/styles/global.css`
- Cubo 3D: `src/components/Cube.jsx` (three.js 0.160). Para ajustar o brilho, mexa nas intensidades das luzes; para o ritmo, nos tempos de `wait` e da rotação das camadas.
