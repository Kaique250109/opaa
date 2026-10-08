/* DUDA — UM UNIVERSO PRA VOCÊ
   Edite as mensagens abaixo. Funciona sem bibliotecas e sem conexão.
   Nenhuma informação sai do aparelho de quem abre a página. */
'use strict';
const LETTERS = [
  {
    "title": "Olha quem me deixa bobo",
    "text": "Amor, eu posso tentar disfarçar o quanto gosto de vc, mas é só chegar uma mensagem sua que eu me entrego.\n\nFico querendo saber o que aconteceu, o que vc tá fazendo, se tá bem… e quando vejo já tô sorrindo sozinho pro celular. Se alguém perguntar, vou falar que vi um vídeo engraçado. Mas nós dois sabemos quem é a culpada kkkkk.\n\nEu gosto dessa vontade de falar com vc. De ter uma coisinha pra contar e já pensar: vou mandar pra Duda."
  },
  {
    "title": "Pé Preto, vem cá kkkkk",
    "text": "Vc realmente achou que ia passar por aqui sem eu te chamar de Pé Preto? Aí vc não me conhece direito kkkkk.\n\nEu gosto de te zoar, mas gosto mais ainda quando vc entra na brincadeira. Uma conversa que começa toda séria e do nada vira nós dois falando besteira… eu quero muito mais disso.\n\nE pode fingir que não gosta dos meus apelidos. Vou continuar te enchendo de carinho do mesmo jeito, princesa."
  },
  {
    "title": "É vc que eu quero conhecer",
    "text": "Maria Eduarda Alves Cavalcante. Falei completo pra vc prestar atenção kkk.\n\nEu gosto de vc. Do seu jeito, das coisas que vc tem vontade de contar, do carinho que vc demonstra. Quero conhecer até aquilo que ainda não sei perguntar.\n\nQuando vc fala de alguma coisa que gosta, eu quero entender por que gosta. Quando muda de ideia, eu quero ouvir. Tem tanta coisa sua que eu ainda posso descobrir… e eu gosto de saber que a gente não precisa ter pressa."
  },
  {
    "title": "Quando o dia pesar",
    "text": "Minha vida, se algum dia vc estiver mal, pode falar comigo sem ensaiar o que vai dizer.\n\nPode mandar um áudio todo enrolado, falar que nem sabe explicar ou só pedir pra eu ficar conversando com vc. Não precisa achar as palavras certas pra merecer meu carinho.\n\nEu posso não saber resolver o que aconteceu, mas quero te ouvir. E se tudo que vc precisar for companhia, eu quero estar ali também."
  },
  {
    "title": "Saudade de ficar perto",
    "text": "Bb, falar com vc é bom, mas tem hora que dá uma vontade de largar o celular e estar aí.\n\nTe olhar enquanto vc fala, rir junto sem ter que escrever “kkkk”, te abraçar e ficar mais um pouco. São essas coisas simples que fazem falta.\n\nE quando eu disser que tô com saudade, pode entender tudo isso junto. É saudade de vc por inteira, não só da nossa conversa."
  },
  {
    "title": "Sem zoeira agora",
    "text": "Princesa, eu queria te dizer uma coisa sem colocar uma brincadeira no final pra disfarçar.\n\nVc é muito importante pra mim. Eu te amo e gosto de ter vc na minha vida. Às vezes eu fico procurando uma forma melhor de falar isso, porque repetir três palavras parece pouco perto de tudo que eu sinto.\n\nMas elas continuam sendo verdade. Eu te amo. E quero que vc sinta isso quando eu falar com vc, quando te ouvir e quando estiver perto."
  },
  {
    "title": "Meu abraço tem um problema",
    "text": "Amor, meu abraço tem um defeito: depois que vc entra, eu demoro pra querer soltar.\n\nA pessoa fala “já vou” e eu já tô negociando mais um minutinho kkkkk. Se deixar, faço até cara de coitado. Muito triste a vida de um menino que só queria ficar agarrado na namorada.\n\nEntão já sabe: quando vier me abraçar, vem sem tanta pressa. Eu vou gostar."
  },
  {
    "title": "Quero rir disso com vc",
    "text": "Meu xodó, quero ter um monte de coisa que só a gente entende. Uma piada que nem é tão engraçada, um apelido nada a ver, uma conversa que sai completamente do assunto.\n\nGosto de imaginar nós dois lembrando de uma besteira e começando a rir de novo. Aí alguém pergunta o motivo e nem dá pra explicar direito.\n\nQuero essas risadas com vc. Sem precisar que o dia seja perfeito pra gente aproveitar estar junto."
  },
  {
    "title": "Também nos dias comuns",
    "text": "Duda, eu gosto de receber seu carinho mesmo quando não tem nenhuma novidade.\n\nPode me contar uma coisinha boba do seu dia. Pode falar que tá sem assunto. Eu não preciso de uma conversa incrível toda vez; gosto de saber de vc.\n\nE quero lembrar de demonstrar o que sinto nesses dias também. Um “pensei em vc”, uma mensagem do nada, um carinho quando a gente se vê. Vc continua sendo especial numa terça-feira qualquer."
  },
  {
    "title": "Ainda tenho o que aprender",
    "text": "Minha vida, eu sei que vou ter coisas pra melhorar. Posso me enrolar pra falar, entender alguma coisa errado ou não perceber na hora o que vc precisava.\n\nMas quero conseguir conversar com vc sobre isso. Ouvir de verdade, assumir quando eu errar e fazer minha parte pra gente ficar bem.\n\nEu gosto demais de nós pra tratar o que vc sente como uma coisa pequena. Quero aprender a te amar melhor enquanto a gente se conhece."
  },
  {
    "title": "Quero te ver feliz com vc mesma",
    "text": "Princesa, eu quero te ver contando animada alguma coisa que conseguiu. Quero ouvir seus planos, mesmo quando eles ainda estiverem todos bagunçados.\n\nSe vc descobrir uma coisa nova que quer fazer, me conta. Se ficar com medo, pode me contar também. Eu quero torcer por vc sem escolher seu caminho no seu lugar.\n\nTem uma vida inteira sua acontecendo. E eu fico feliz de poder conhecer um pedacinho dela de perto."
  },
  {
    "title": "Uma última coisinha, bb",
    "text": "Se vc chegou até aqui, eu queria estar do lado pra ver sua cara kkk. Ia perguntar qual carta vc mais gostou e tentar descobrir qual delas te fez sorrir.\n\nMas antes de vc me responder, guarda uma coisa: tudo isso é um carinho meu pra vc. Cada mensagem tem um pouquinho do que eu queria te falar se estivesse aí.\n\nAgora fecha essa carta, amor. Ainda falta eu terminar de falar com vc."
  }
];
const $ = id => document.getElementById(id);
const sections = ['inicio', 'galaxy', 'ending'];
let stage = 'inicio', current = 0;
const opened = new Set();
const positions = [[22,22],[52,12],[80,25],[91,49],[78,76],[49,88],[20,74],[9,47]];
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
let paused = reduced.matches;
const canvas = $('universe'), ctx = canvas.getContext('2d');
let width = 0, height = 0, stars = [], particles = [], sparks = [], heart = null, last = 0, elapsed = 0, frame = 0;
let shooting = null, nextShooting = 7;
function showStage(id) {
  stage = id;
  sections.forEach(key => { $(key).hidden = key !== id; });
  window.scrollTo({top:0,behavior:'instant'});
  requestAnimationFrame(() => { measureHeart(); draw(0); });
  const heading = $(id).querySelector('h1,h2');
  heading.tabIndex = -1; heading.focus({preventScroll:true});
}
function updateProgress() {
  $('progress').textContent = `${opened.size} de ${LETTERS.length} cartas descobertas`;
  $('progress-fill').style.width = `${opened.size / LETTERS.length * 100}%`;
  $('final-button').hidden = opened.size < LETTERS.length;
  $('hint').textContent = opened.size === LETTERS.length ? 'Leu tudo, amor? Ainda quero te falar uma coisa.' : 'Tem mais carinho nos corações e nas cartas abaixo.';
}
LETTERS.forEach((item, i) => {
  const button = document.createElement('button');
  button.className = i < 8 ? 'star-button' : 'planet-card';
  button.dataset.letter=String(i);
  button.style.setProperty('--x', `${positions[i % 8][0]}%`);
  button.style.setProperty('--y', `${positions[i % 8][1]}%`);
  button.style.setProperty('--delay', `${i * -.5}s`);
  button.setAttribute('aria-label', `Abrir mensagem ${i+1}: ${item.title}`);
  const glyph = document.createElement('span'); glyph.className='star-glyph'; glyph.textContent='♥'; glyph.setAttribute('aria-hidden','true');
  const index = document.createElement('span'); index.className='star-index'; index.textContent=String(i+1).padStart(2,'0');
  button.append(glyph,index); button.addEventListener('click',()=>openLetter(i));
  if(i<8){$('constellation').append(button);}else{
 button.className='bonus-letter';
 glyph.className='bonus-glyph';glyph.textContent='✧';
 index.className='bonus-title';index.textContent=item.title;
 const caption=document.createElement('span');caption.className='bonus-caption';caption.textContent='abrir carta ↗';button.append(caption);$('planets').append(button);
}
});
function openLetter(i) {
  current = i;
  const item = LETTERS[i];
  $('letter-number').textContent = `CARTA ${String(i+1).padStart(2,'0')} / ${LETTERS.length}`;
  $('letter-title').textContent = item.title;
  $('letter-body').textContent = item.text;
  $('previous').disabled = i === 0; $('next').disabled = i === LETTERS.length-1;
  opened.add(i);
  const star = document.querySelector(`[data-letter="${i}"]`); star.classList.add('read');
  star.setAttribute('aria-label', `Reler mensagem ${i+1}: ${item.title}`);
  updateProgress();
  if (!$('letter').open) $('letter').showModal();
  $('letter').scrollTop=0; document.body.classList.add('modal-open');
}
$('close-letter').addEventListener('click',()=>$('letter').close());
$('letter').addEventListener('click',event=>{if(event.target===$('letter')){const r=$('letter').getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)$('letter').close();}});
$('letter').addEventListener('close',()=>{document.body.classList.remove('modal-open');document.querySelector(`[data-letter="${current}"]`).focus({preventScroll:true});});
$('previous').addEventListener('click',()=>{if(current>0)openLetter(current-1);});
$('next').addEventListener('click',()=>{if(current<LETTERS.length-1)openLetter(current+1);});
$('enter').addEventListener('click',()=>{showStage('galaxy');burst();});
$('final-button').addEventListener('click',()=>{showStage('ending');burst(width/2,height*.43);});
$('return').addEventListener('click',()=>showStage('galaxy'));
$('restart').addEventListener('click',()=>showStage('inicio'));
document.querySelector('.brand').addEventListener('click',event=>{event.preventDefault();showStage('inicio');});
let heartTouches=0;
$('core').addEventListener('click',()=>{burst();heartTouches++;$('core').querySelector('.core-caption').textContent=heartTouches<5?'meu coração é seu, bb':'achou meu segredo ♡';if(heartTouches%5===0)showNote('Ué, curiosa kkkkk','Tá cutucando meu coração por quê? Já é seu, amor.\n\nAgora que descobriu meu segredo, guarda bem: tem um menino aqui que gosta demais de vc. E que vai querer um beijo quando vc contar que achou essa mensagem.', $('core'));});
function setPaused(value) {
  paused=value; document.body.classList.toggle('paused',paused);
  $('motion').setAttribute('aria-pressed',String(paused));
  $('motion').setAttribute('aria-label',paused?'Retomar animações':'Pausar animações');
  $('motion').textContent=paused?'▷':'Ⅱ';
  cancelAnimationFrame(frame);last=0;
  if(!paused&&!document.hidden)frame=requestAnimationFrame(tick);else draw(0);
}
$('motion').addEventListener('click',()=>setPaused(!paused));
reduced.addEventListener('change',e=>setPaused(e.matches));
function measureHeart(){if(stage!=='galaxy'){heart=null;return;}const rect=$('core').getBoundingClientRect();heart={x:rect.left+rect.width/2,y:rect.top+rect.height/2-5,scale:Math.min(rect.width/28,rect.height/23)};}
function resize(){width=innerWidth;height=innerHeight;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);stars=Array.from({length:Math.min(220,Math.floor(width*height/4000))},()=>({x:Math.random()*width,y:Math.random()*height,r:Math.random()*1.2+.25,a:Math.random()*.6+.15,p:Math.random()*6.28}));measureHeart();draw(0);}
// Courbe paramétrique du cœur : points du contour et de l'intérieur.
for(let i=0;i<650;i++){const t=Math.random()*Math.PI*2;const fill=i%3===0?Math.sqrt(Math.random()):.92+Math.random()*.08;particles.push({x:16*Math.sin(t)**3*fill,y:-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*fill,p:Math.random()*Math.PI*2,r:Math.random()*1.1+.35,h:i%4===0?222:265+Math.random()*50});}
function burst(x=heart?.x??width/2,y=heart?.y??height/2){if(paused)return;for(let i=0;i<65;i++){const a=Math.random()*Math.PI*2,v=30+Math.random()*130;sparks.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,life:1,r:1+Math.random()*2});}sparks=sparks.slice(-195);}
function draw(dt){if(!ctx)return;ctx.clearRect(0,0,width,height);for(const s of stars){ctx.globalAlpha=s.a*(.75+.25*Math.sin(elapsed*.5+s.p));ctx.fillStyle='#c9c5ff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
if(heart){const pulse=1+Math.sin(elapsed*1.65)*.035;const glow=ctx.createRadialGradient(heart.x,heart.y,0,heart.x,heart.y,heart.scale*20);glow.addColorStop(0,'#793bbd28');glow.addColorStop(.6,'#56219b13');glow.addColorStop(1,'#56219b00');ctx.fillStyle=glow;ctx.fillRect(heart.x-heart.scale*20,heart.y-heart.scale*20,heart.scale*40,heart.scale*40);for(const p of particles){ctx.globalAlpha=.42+.45*(.5+.5*Math.sin(elapsed*1.4+p.p));ctx.fillStyle=`hsl(${p.h} 90% 78%)`;ctx.beginPath();ctx.arc(heart.x+p.x*heart.scale*pulse,heart.y+p.y*heart.scale*pulse,p.r,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;}
if(shooting){shooting.x+=dt*420;shooting.y+=dt*170;shooting.life-=dt;const g=ctx.createLinearGradient(shooting.x-90,shooting.y-36,shooting.x,shooting.y);g.addColorStop(0,'#bca4ff00');g.addColorStop(1,'#e6d9ffbb');ctx.strokeStyle=g;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(shooting.x-90,shooting.y-36);ctx.lineTo(shooting.x,shooting.y);ctx.stroke();if(shooting.life<=0)shooting=null;}
sparks=sparks.filter(s=>s.life>0);for(const s of sparks){s.x+=s.vx*dt;s.y+=s.vy*dt;s.life-=dt*.65;ctx.globalAlpha=Math.max(0,s.life);ctx.fillStyle='#d5b7ff';ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;}
function tick(time){const dt=last?Math.min((time-last)/1000,.04):0;last=time;elapsed+=dt;if(elapsed>nextShooting){shooting={x:Math.random()*width*.6,y:Math.random()*height*.3,life:1.5};nextShooting=elapsed+8+Math.random()*6;}draw(dt);if(!paused&&!document.hidden)frame=requestAnimationFrame(tick);}
window.addEventListener('resize',resize);
window.addEventListener('scroll',()=>{measureHeart();if(paused)draw(0);},{passive:true});
document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(frame);last=0;if(!document.hidden&&!paused)frame=requestAnimationFrame(tick);});
resize();setPaused(paused);

// Bilhetinhos independentes das cartas: não alteram o progresso.
const MOOD_NOTES={
 laugh:{title:'Pé Preto, situação gravíssima',text:'Tô precisando registrar uma reclamação: vc me deixa com saudade e depois eu que tenho que ficar aqui agindo normalmente.\n\nMuito fácil ser linda e deixar um menino bobo por aí, né? kkkkk. Vou aceitar um abraço como pedido de desculpas.'},
 care:{title:'Chega mais, princesa',text:'Queria fazer um cafuné em vc agora. Bem devagar, deixando vc ficar ali sem ter que falar nada.\n\nEnquanto não tô aí, fica com esse recadinho: vc é muito querida por mim, amor. Espero que seu dia tenha um pedacinho de paz e que vc lembre que pode conversar comigo.'},
 miss:{title:'Também queria estar aí, bb',text:'Se vc abriu esse porque tá com saudade, queria conseguir aparecer aí só pra te abraçar.\n\nAí eu ia falar “pronto, vim resolver” e ficar querendo colo também kkk. Me manda uma mensagem quando quiser, amor. Vou gostar de saber que vc lembrou de mim.'}
};
const TINY_NOTES=[
 {title:'Me entrega fácil',text:'Se eu falo que vou dormir e continuo puxando assunto com vc, já sabe: tava querendo ficar mais um pouquinho kkk.'},
 {title:'Um beijo guardado',text:'Princesa, deixei um beijo na testa aqui. O próximo eu quero te dar de perto.'},
 {title:'Meu juízo mandou lembranças',text:'Ele disse que tava tudo normal até vc aparecer. Agora só sabe ficar pensando na Duda. Complicado kkkkk.'},
 {title:'Pode contar a besteira',text:'Sabe aquela coisa pequena que vc pensa “nem vale mandar”? Pode mandar, amor. Eu gosto de saber das suas coisas.'},
 {title:'Volta depois, bb',text:'Se hoje vc sorriu com esse recadinho, guarda ele pra um outro dia também. Meu carinho continua sendo seu.'},
 {title:'É vc mesmo',text:'Entre tanta coisa que eu podia estar pensando, lá vem vc de novo. E eu gosto quando acontece.'},
 {title:'Só pra avisar',text:'Vc acaba de receber mais um “eu te amo” meu. Pode fingir surpresa kkk. Ainda vou querer te dizer muitas vezes.'},
 {title:'Meu lugar no abraço',text:'Quando a gente se encontrar, reserva um espacinho no seu abraço pra mim. Quero chegar e ficar.'}
];
let tinyIndex=0,noteTrigger=null;
function showNote(title,body,trigger){
 noteTrigger=trigger;$('note-title').textContent=title;$('note-body').textContent=body;
 $('little-note').showModal();$('little-note').scrollTop=0;document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-mood]').forEach(button=>button.addEventListener('click',()=>{const note=MOOD_NOTES[button.dataset.mood];showNote(note.title,note.text,button);}));
$('wish-star').addEventListener('click',()=>{const note=TINY_NOTES[tinyIndex%TINY_NOTES.length];tinyIndex++;showNote(note.title,note.text,$('wish-star'));});
$('close-note').addEventListener('click',()=>$('little-note').close());
$('note-done').addEventListener('click',()=>$('little-note').close());
$('little-note').addEventListener('close',()=>{document.body.classList.remove('modal-open');noteTrigger?.focus({preventScroll:true});});
$('little-note').addEventListener('click',event=>{if(event.target===$('little-note')){const r=$('little-note').getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)$('little-note').close();}});
