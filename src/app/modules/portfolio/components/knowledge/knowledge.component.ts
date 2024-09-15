import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de SASS'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de Javascript'
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'Ícone de conhecimento de Typescript'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de ReactJs'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJs'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de Angular'
    },
    {
      src: 'assets/icons/knowledge/mongodb.svg',
      alt: 'Ícone de conhecimento de MongoDB'
    },
    {
      src: 'assets/icons/knowledge/postgresql.svg',
      alt: 'Ícone de conhecimento de PostgreSQL'
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Ícone de conhecimento de Docker'
    }
  ])
}
