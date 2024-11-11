import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  codingSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 65 },
    { name: 'Python', level: 78 },
  ];

  professionalSkills = [
    { name: 'Web Design', level: 95 },
    { name: 'Web Development', level: 67 },
    { name: 'Graphic Design', level: 85 },
    { name: 'SEO Marketing', level: 60 },
  ];
}
