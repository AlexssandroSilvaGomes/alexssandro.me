import Tecnology from '../../components/tecnology/Tecnology'
import { useState } from 'react'

//front end
import CSS from './images/file-type-css.svg'
import HTML from './images/file-type-html.svg'
import JavaScript from './images/javascript-js.svg'
import ReactRouter from './images/react-router.svg'
import React from './images/react.svg'
import SocketIO from './images/socket-io.svg'
import Vite from './images/vite.svg'

//design
import Figma from './images/figma.svg'

//back-end
import Ex from './images/express.svg'
import Java from './images/java-original.svg'
import Node from './images/node-js.svg'
import Prisma from './images/prisma.svg'

//mobile
import Kotlin from './images/kotlin-original.svg'

//banco de dados
import MongoDB from './images/mongodb-original.svg'
import MySQL from './images/file-type-mysql.svg'

//infraestrutura
import Azure from './images/microsoft-azure.svg'
import Firebase from './images/file-type-firebase.svg'
import Vercel from './images/vercel.svg'

//versionamento
import Github from './images/github.svg'

//apps
import Chrome from './images/chrome.svg'
import Discord from './images/discord.svg'
import Eclipse from './images/eclipse.svg'
import Netbeans from './images/netbeans.svg'
import Notion from './images/notion.svg'
import Postman from './images/postman.svg'
import Spotify from './images/spotify.svg'
import Trello from './images/trello.svg'
import VSCode from './images/visual-studio-code.svg'

import './TecnologiasEFerramentas.css'

const TecnologiasEFerramentas = () => {

  return (
    <div className="tecs">
      <div className="tecs_header">
        <h1>Tecnologias e Ferramentas</h1>
        <p>Essas são as tecnologias que me ajudaram durante meu desenvolvimento e ganho de experiência prática. Meu foco é me especializar e ter conhecimento da ferramenta ideal para o trabalho, e assim proporcionar a melhor experiência para o usuário final.</p>
      </div>
      <h3>Front-end</h3>
      <div className="tecs_card" id="tecs_card">
        <Tecnology img={CSS} name={"CSS"} />
        <Tecnology img={HTML} name={"HTML"} />
        <Tecnology img={JavaScript} name={"Javascript"} />
        <Tecnology img={ReactRouter} name={"React Router"} />
        <Tecnology img={React} name={"React"} />
        <Tecnology img={SocketIO} name={"Socket.IO"} />
        <Tecnology img={Vite} name={"Vite"} />
      </div>
      <h3>Design</h3>
      <div className="tecs_card">
        <Tecnology img={Figma} name={"Figma"} />
      </div>
      <h3>Back-end</h3>
      <div className="tecs_card">
        <Tecnology img={Ex} name={"Express"}/>
        <Tecnology img={Java} name={"Java"} />
        <Tecnology img={Node} name={"NodeJS"} />
        <Tecnology img={Prisma} name={"Prisma"} />
      </div>
      <h3>Mobile</h3>
      <div className="tecs_card">
        <Tecnology img={Kotlin} name={"Kotlin"} />
      </div>
      <h3>Banco de Dados</h3>
      <div className="tecs_card">
        <Tecnology img={MongoDB} name={"MongoDB"} />
        <Tecnology img={MySQL} name={"MySQL"} />
      </div>
      <h3>Infraestrutura</h3>
      <div className="tecs_card">
        <Tecnology img={Azure} name={"Azure"} />
        <Tecnology img={Firebase} name={"Firebase"} />
        <Tecnology img={Vercel} name={"Vercel"} />
      </div>
      <h3>Versionamento</h3>
      <div className="tecs_card">
        <Tecnology img={Github} name={"Github"} />
      </div>
      <h3>Aplicativos</h3>
      <div className="tecs_card">
        <Tecnology img={Chrome} name={"Chrome"} />
        <Tecnology img={Discord} name={"Discord"} />
        <Tecnology img={Eclipse} name={"Eclipse"} />
        <Tecnology img={Netbeans} name={"Netbeans"} />
        <Tecnology img={Notion} name={"Notion"} />
        <Tecnology img={Postman} name={"Postman"} />
        <Tecnology img={Spotify} name={"Spotify"} />
        <Tecnology img={Trello} name={"Trello"} />
        <Tecnology img={VSCode} name={"Visual Studio Code"} />
      </div>
    </div>
  )
}

export default TecnologiasEFerramentas