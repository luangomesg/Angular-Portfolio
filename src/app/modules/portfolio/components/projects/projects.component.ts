import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/devbill.svg',
      alt: 'Projeto DevBills',
      title: 'DevBill$',
      width: '100px',
      height: '51px',
      description: '<p>O DevBill, trata-se de uma aplicação de gerenciamento financeiro, mantendo o usuário atualizado sobre seu saldo, receitas e gastos. A aplicação conta com gráficos, gastos por períodos e consultas por datas, além da criação de categorias para suas transações. As principais tecnologias utilizadas foram React Node, Typescript e a biblioteca Nivo. Projeto responsivo.</p>',
      links: [
        {
          name: 'Conheça o Projeto',
          href: 'https://dev-bill-frontend.vercel.app'
        }
      ]
    }
  ])
}
