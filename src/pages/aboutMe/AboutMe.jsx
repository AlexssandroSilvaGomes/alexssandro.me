import { Link } from 'react-router-dom'

import Formatura from './images/formatura.jpg'
import Interfatecs from './images/interfatecs.jpg'
import Tcc from './images/tcc.jpg'

import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="about">
      <div className="detalhes">
        <h1>Sobre mim</h1>
        <ul>
          <li>
            <span>
              Localização:
            </span>
            São Paulo, Brasil
          </li>
          <li>
            <span>
              Idade:
            </span>
            20
          </li>
          <li>
            <span>
              Cargo:
            </span>
            A procura de emprego
          </li>
          <li>
            <span>
              Principais tecnologias:
            </span>
            ReactJS, HTML, CSS, JavaScript, NodeJS, Kotlin
          </li>
          <li>
            <span>
              Idiomas:
            </span>
            Inglês (avançado), Português (nativo)
          </li>
          <li>
            <span>
              Pronomes:
            </span>
            ele/dele
          </li>
        </ul>
      </div>
      <div className="quem-sou">
        <h3>Quem sou?</h3>
        <div className="container_img" id="img-1">
          <img src={Interfatecs} alt="foto da minha participação do InterFatecs com meu amigos" />
          <p>Minha participação na maratona <Link to={"https://www.interfatecs.com.br/"} target="_blank">InterFatecs</Link>. Meu time, da esquerda para direta: Eu, Pedro Henrique e Claúdio. (jun. 2023)</p>
        </div>
        <p>Desde pequeno sempre fui muito curioso para entender como as coisas funcionam, conforme fui crescendo essa minha curiosidade só aumentou, mas junto dela me veio as responsabilidades da vida adulta e aquela dúvida de escolher um caminho para trilhar na vida profissional. Eu ainda estou nesse processo de me encontrar, mas acredito que trabalhar com tecnologia e desenvolvimento de software é algo que vou levar para a vida e foi onde encontrei uma paixão por aprender.</p>
        <p>Atualmente estou buscando por uma primeira oportunidade para atuar na área de Tecnologia. Apesar de não ter experiência profissional, tive algumas oportunidades de por meus conhecimentos em práticas desenvolvendo projetos acadêmicos e pessoais. Gosto de me desafiar a tentar coisas novas, sempre que posso estou pesquisando, estudando e me especializando em novas tecnologias.</p>
      </div>
      <div className="formacao-academica">
        <h3>Formação Acadêmica</h3>
        <p>Tenho um diploma de Técnico em Desenvolvimento de Sistemas pelo <Link to={"https://sp.senai.br/unidade/jandira/"} target="_blank">Senai Jandira</Link>. Na instituição, tive a oportunidade de conhecer de maneira mais aprofundada conhecimentos teóricos e, principalmente, práticos. Aprendi desde noções básicas de algoritmos e lógica de programação, até estruturação de dados e construção de softwares. Dentre diversos desafios, tive a oportunidade de desenvolver uma aplicação completa com meu grupo de amigos para o projeto de conclusão do curso chamado de Costuriê, um projeto com foco em dar visibilidade de mercado para pessoas do ramo da costura. </p>
        <div className="container">
          <div className="container_img">
            <img src={Formatura} alt="foto da minha formatura do curso de Desenvolvimento de Sistemas no Senai" />
            <p>Formatura dos alunos da turma de Desenvolvimento de Sistemas do <Link to={"https://sp.senai.br/unidade/jandira/"} target="_blank">Senai Jandira</Link>. (dez. 2023)</p>
          </div>
          <div className="container_img">
            <img src={Tcc} alt="foto da meu grupo de tcc" />
            <p>Meu grupo de TCC juntamente com os membros da banca avaliadora. (dez. 2023)</p>
          </div>
        </div>
        <p>Pouco antes de finalizar o curso e, dando continuidade para meus estudos, comecei a cursar Tecnólogo em Análise e Desenvolvimento de Sistemas na <Link to={"http://www.fateccarapicuiba.edu.br/"} target="_blank">Fatec</Link>. Atualmente estou no 3 semestre da faculdade, no primeiro ano tive a oportunidade de aprofundar meus conhecimentos teóricos e desenvolver algumas pesquisas acadêmicas, bem como participar do campeonato de programação <Link to={"https://www.interfatecs.com.br/"} target="_blank">InterFatecs</Link> com foco em raciocínio lógico.</p>
      </div>
      <div className="interesses-pessoais">
        <h3>Interesses Pessoais</h3>
        <p>Apesar de ser apaixonado por programação e tecnologia, tenho vários hobbies artísticos. Fora do âmbito profissional, gosto de passar meu tempo escrevendo poesias, pintando quadros ou desenhando. Meu maior hobbie é encontrar maneiras diferentes de expressar meus sentimentos através da arte. Fora isso, amo jogar videogames, ouvir música, aprender coisas novas e, principalmente, jogar rpg de mesa com meus amigos.</p>
      </div>
    </div>
  )
}

export default AboutMe