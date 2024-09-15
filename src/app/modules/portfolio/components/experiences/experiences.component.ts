import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Estagiário",
        p: "Fundação Santo André | 06/2022 - 06/2023"
      },
      text: "<p>Durante meu estágio, tive a oportunidade de trabalhar em um ambiente dinâmico e colaborativo, onde utilizei ReactJS, NodeJS e MongoDB para desenvolver alguns projetos.</p> <p>Minhas responsabilidades incluíam a criação de componentes front-end reutilizáveis com React, o desenvolvimento de APIs com NodeJs e a gestão de dados com MongoDB</p>"
    },
    {
      summary: {
        strong: "Freelancer",
        p: "04/2022 - Atual"
      },
      text: "<p>Realizo projetos utilizando HTML, CSS, JavaScript, React.js e Node.js. Criação de Websites responsivos, criação de sistemas Web, criação de Landingpages e entre outros projetos que envolvam desenvolvimento Web </p>"
    }
  ])
}
