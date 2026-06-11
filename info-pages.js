/* ════════════════════════════════════════════════════════════════
   PÁGINAS INSTITUCIONAIS — Monalisa Flores
   Conteúdo fictício, profissional e coerente, aberto em modal pelo rodapé.
   ════════════════════════════════════════════════════════════════ */
const INFO_PAGES = {
  termos: {
    title: 'Termos de Uso',
    html: `
      <p>Bem-vindo(a) à <b>Monalisa Flores</b>. Ao acessar e utilizar nosso site, você concorda com os termos abaixo. Recomendamos a leitura atenta antes de finalizar qualquer pedido.</p>
      <h4>1. Cadastro e Pedidos</h4>
      <p>As informações fornecidas no momento da compra (nome, endereço, telefone e dados do destinatário) devem ser verdadeiras e completas. A Monalisa Flores não se responsabiliza por entregas frustradas em razão de dados incorretos ou incompletos.</p>
      <h4>2. Produtos e Disponibilidade</h4>
      <p>Trabalhamos com flores naturais e frescas. Pequenas variações de tonalidade, tipo de folhagem ou recipiente podem ocorrer conforme a disponibilidade sazonal, preservando sempre o padrão, o valor e a beleza do arranjo apresentado.</p>
      <h4>3. Preços e Pagamento</h4>
      <p>Os preços exibidos são válidos para o momento da compra. Eventuais adicionais (cartão, embalagem, chocolates, balões) são somados ao valor final antes da confirmação do pedido.</p>
      <h4>4. Entregas</h4>
      <p>Os prazos são estimados conforme a região e o horário do pedido. Em datas comemorativas, os prazos podem sofrer alterações, sempre comunicadas ao cliente.</p>
      <p style="color:#777;margin-top:14px">Última atualização: janeiro de 2026.</p>`
  },
  devolucoes: {
    title: 'Devoluções e Reembolsos',
    html: `
      <p>Sua satisfação é a nossa prioridade. Por se tratar de produtos perecíveis (flores naturais e alimentos), seguimos uma política específica, em conformidade com o Código de Defesa do Consumidor.</p>
      <h4>1. Problemas na Entrega</h4>
      <p>Caso o produto chegue danificado ou em desacordo com o pedido, entre em contato com nosso SAC em até <b>24 horas</b> após o recebimento, com fotos do item. Faremos a <b>troca ou o reenvio sem custo</b>.</p>
      <h4>2. Direito de Arrependimento</h4>
      <p>Para compras não personalizadas, o cancelamento pode ser solicitado antes do início da preparação do pedido. Após a produção/saída para entrega, por se tratar de item perecível, o cancelamento não é possível.</p>
      <h4>3. Reembolsos</h4>
      <p>Aprovado o reembolso, o estorno é processado em até <b>7 dias úteis</b>, pelo mesmo meio de pagamento utilizado na compra.</p>
      <p style="color:#777;margin-top:14px">Dúvidas? Fale com nosso SAC.</p>`
  },
  sac: {
    title: 'Central de Atendimento (SAC)',
    html: `
      <p>Estamos aqui para ajudar você em todas as etapas do seu pedido — antes, durante e após a entrega.</p>
      <h4>Canais de Atendimento</h4>
      <p>
        📱 <b>WhatsApp:</b> (11) 99999-9999<br>
        📧 <b>E-mail:</b> atendimento@monalisaflores.com.br<br>
        ☎️ <b>Telefone:</b> (11) 4002-8922
      </p>
      <h4>Horário de Funcionamento</h4>
      <p>
        Segunda a sexta: 08h às 20h<br>
        Sábados, domingos e feriados: 08h às 18h
      </p>
      <h4>Acompanhamento de Pedido</h4>
      <p>Informe o número do seu pedido em qualquer um dos canais acima e nossa equipe dará todo o suporte, incluindo confirmação de entrega e foto do presente.</p>`
  },
  quemsomos: {
    title: 'Quem Somos',
    html: `
      <p>A <b>Monalisa Flores</b> nasceu do desejo de transformar sentimentos em gestos. Há mais de uma década levamos beleza, perfume e emoção até a porta de quem você ama.</p>
      <h4>Nossa Missão</h4>
      <p>Encurtar distâncias e eternizar momentos por meio de flores frescas, arranjos cuidadosamente preparados e um atendimento humano e atencioso.</p>
      <h4>Nossos Valores</h4>
      <p>
        🌷 <b>Frescor:</b> flores selecionadas diariamente.<br>
        💝 <b>Cuidado:</b> cada arranjo é montado à mão, com carinho.<br>
        🚚 <b>Agilidade:</b> entrega no mesmo dia em diversas regiões.<br>
        🤝 <b>Confiança:</b> milhares de presentes entregues com excelência.
      </p>
      <p>Seja para celebrar, agradecer, pedir desculpas ou simplesmente dizer "estou pensando em você", a Monalisa Flores está pronta para florir o seu momento.</p>`
  },
  privacidade: {
    title: 'Política de Privacidade',
    html: `
      <p>A Monalisa Flores respeita a sua privacidade e protege os seus dados pessoais, em conformidade com a <b>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</b>.</p>
      <h4>1. Dados Coletados</h4>
      <p>Coletamos apenas os dados necessários para processar e entregar o seu pedido: nome, e-mail, telefone, endereço e dados do destinatário.</p>
      <h4>2. Uso das Informações</h4>
      <p>Utilizamos seus dados exclusivamente para: processar pedidos, realizar entregas, prestar atendimento e enviar comunicações que você autorizar.</p>
      <h4>3. Compartilhamento</h4>
      <p>Não vendemos nem cedemos seus dados a terceiros. Compartilhamos informações apenas com parceiros logísticos e de pagamento, na medida necessária para concluir a sua compra.</p>
      <h4>4. Seus Direitos</h4>
      <p>Você pode solicitar, a qualquer momento, o acesso, a correção ou a exclusão dos seus dados pelo nosso SAC.</p>
      <p style="color:#777;margin-top:14px">Última atualização: janeiro de 2026.</p>`
  },
  cookies: {
    title: 'Política de Cookies',
    html: `
      <p>Utilizamos cookies para oferecer a melhor experiência possível durante a sua navegação em nosso site.</p>
      <h4>O que são cookies?</h4>
      <p>São pequenos arquivos armazenados no seu dispositivo que ajudam o site a lembrar de suas preferências e a funcionar corretamente.</p>
      <h4>Como utilizamos</h4>
      <p>
        🔧 <b>Essenciais:</b> mantêm o carrinho e o funcionamento do site.<br>
        📊 <b>Desempenho:</b> ajudam a entender como o site é usado, de forma anônima.<br>
        🎯 <b>Personalização:</b> lembram suas preferências e melhoram as recomendações.
      </p>
      <h4>Gerenciamento</h4>
      <p>Você pode aceitar ou recusar os cookies não essenciais a qualquer momento pelas configurações do seu navegador.</p>`
  },
  corporativo: {
    title: 'Monalisa Flores Corporativo',
    html: `
      <p>Leve a beleza e o cuidado da Monalisa Flores para a sua empresa. Oferecemos soluções personalizadas para o mundo corporativo.</p>
      <h4>Soluções para Empresas</h4>
      <p>
        🏢 <b>Recepções e ambientes:</b> arranjos e manutenção semanal.<br>
        🎉 <b>Eventos:</b> decoração floral para confraternizações e lançamentos.<br>
        🎁 <b>Presentear clientes e colaboradores:</b> datas comemorativas, aniversários e conquistas.<br>
        📦 <b>Pedidos em volume:</b> condições especiais e faturamento facilitado.
      </p>
      <h4>Fale com o Comercial</h4>
      <p>
        📧 corporativo@monalisaflores.com.br<br>
        📱 (11) 99999-9999
      </p>
      <p>Nossa equipe monta uma proposta sob medida para a necessidade da sua empresa.</p>`
  }
};

window.openInfoModal = function(key) {
  const data = INFO_PAGES[key];
  if (!data) return;
  const old = document.getElementById('infoModal');
  if (old) old.remove();
  const ov = document.createElement('div');
  ov.id = 'infoModal';
  ov.className = 'info-modal-overlay';
  ov.innerHTML = `
    <div class="info-modal">
      <div class="info-modal-head">
        <h2>${data.title}</h2>
        <button class="info-modal-close" onclick="closeInfoModal()" aria-label="Fechar">&times;</button>
      </div>
      <div class="info-modal-body">${data.html}</div>
    </div>`;
  ov.addEventListener('click', (e) => { if (e.target === ov) closeInfoModal(); });
  document.body.appendChild(ov);
  document.body.style.overflow = 'hidden';
};
window.closeInfoModal = function() {
  const m = document.getElementById('infoModal');
  if (m) m.remove();
  document.body.style.overflow = '';
};

// Estilo do modal (injetado para manter o arquivo autossuficiente)
(function injectInfoStyles() {
  const s = document.createElement('style');
  s.textContent = `
.info-modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000;display:flex;align-items:flex-end;justify-content:center;animation:infoFade .2s ease}
@keyframes infoFade{from{opacity:0}to{opacity:1}}
.info-modal{background:#fff;width:100%;max-width:560px;max-height:88vh;border-radius:20px 20px 0 0;display:flex;flex-direction:column;animation:infoUp .28s cubic-bezier(.22,1,.36,1);font-family:'DM Sans',sans-serif}
@keyframes infoUp{from{transform:translateY(40px);opacity:.6}to{transform:translateY(0);opacity:1}}
.info-modal-head{display:flex;align-items:center;justify-content:space-between;padding:18px 20px 14px;border-bottom:1px solid #f0f0f0;position:sticky;top:0;background:#fff;border-radius:20px 20px 0 0}
.info-modal-head h2{margin:0;font-size:18px;font-weight:800;color:#e30613;font-family:'Plus Jakarta Sans','DM Sans',sans-serif}
.info-modal-close{background:#f4f4f6;border:none;width:34px;height:34px;border-radius:50%;font-size:22px;line-height:1;color:#555;cursor:pointer;flex-shrink:0}
.info-modal-close:hover{background:#e9e9ee}
.info-modal-body{padding:18px 20px 28px;overflow-y:auto;color:#333;font-size:14px;line-height:1.65}
.info-modal-body h4{margin:18px 0 6px;font-size:14.5px;color:#1a1a2e;font-weight:800}
.info-modal-body p{margin:0 0 10px}
.info-modal-body b{color:#1a1a2e}`;
  document.head.appendChild(s);
})();
