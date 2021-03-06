import { Component, OnInit, Input } from '@angular/core';
import { BuildType } from '../model/build-type';

@Component({
  selector: 'app-build-info',
  templateUrl: './build-info.component.html',
  styleUrls: ['./build-info.component.scss']
})
export class BuildInfoComponent {
  @Input() build: BuildType;
}
