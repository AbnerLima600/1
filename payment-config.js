/* ════════════════════════════════════════════════════════════════
   CONFIGURAÇÃO DO PAGAMENTO PIX — Monalisa Flores
   ════════════════════════════════════════════════════════════════
   NUNCA coloque a chave secreta (sk_live_...) aqui. Este arquivo é
   público. A chave secreta fica nas Environment Variables da Vercel.

   A função do PIX está na pasta "api/pix.js" e é publicada JUNTO com o
   site na Vercel. Por isso o endpoint é relativo ("/api/pix") — funciona
   automaticamente no domínio onde o site estiver (ex.: monalisaflores.site).
   ════════════════════════════════════════════════════════════════ */
window.MONALISA_PIX = {
  endpoint: "/api/pix",
  whatsappNumber: "5516996336191"
};
